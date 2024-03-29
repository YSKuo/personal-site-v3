/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `${parsedFilePath.name}/`;
    } else {
      slug = `${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "excerpt")) {
        createNodeField({
          node,
          name: "excerpt",
          value: node.frontmatter.excerpt,
        });
      }

      let date;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({ node, name: "date", value: date.toISOString() });
      }

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
        // While there is slug in post, just use it
        slug = `${_.kebabCase(node.frontmatter.slug)}`;
      } else if (date.isValid) {
        // Set slug to be a combination of date and filename
        slug = `${_.replace(
          date.toISOString().substr(0, 10),
          new RegExp("-", "g"),
          "/"
        )}/${_.kebabCase(parsedFilePath.name)}`;
      }
    }

    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");
  const homePage = path.resolve("./src/templates/home.jsx");
  const blogPage = path.resolve("./src/templates/blog.jsx");
  // const categoriesPage = path.resolve("./src/templates/categories.jsx");

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  const { postsPerPage, featuredPostsLimit } = siteConfig;

  // Create home page
  if (featuredPostsLimit) {
    createPage({
      path: `/`,
      component: homePage,
      context: {
        limit: featuredPostsLimit,
        featured: true,
      },
    });
  }

  // Paging
  if (postsPerPage) {
    const pageCount = Math.ceil(postsEdges.length / postsPerPage);

    // Create blog pages
    [...Array(pageCount)].forEach((_val, pageNum) => {
      createPage({
        path: pageNum === 0 ? `/blog` : `/blog/${pageNum + 1}/`,
        component: blogPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount,
          currentPageNum: pageNum + 1,
        },
      });
    });
  }

  // Post page creating
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Generate a list of categories
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : null;
    const prevID = index - 1 >= 0 ? index - 1 : null;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: `/post/${edge.node.fields.slug}`,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge ? nextEdge.node.frontmatter.title : undefined,
        nextslug: nextEdge ? nextEdge.node.fields.slug : undefined,
        prevtitle: prevEdge ? prevEdge.node.frontmatter.title : undefined,
        prevslug: prevEdge ? prevEdge.node.fields.slug : undefined,
      },
    });
  });

  //  Create categories page
  // createPage({
  //   path: `/categories`,
  //   component: categoriesPage,
  // });

  //  Create tag pages
  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category pages
  categorySet.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });
};
