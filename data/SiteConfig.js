const config = {
  siteTitle: "Arsene's Alibi", // Site title.
  siteTitleShort: "Arsene", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://arsenekuo.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Share something about Web dev, learning and life style.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "xxx", // GA tracking ID.
  disqusShortname: process.env.GATSBY_DISQUS_NAME, // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  featuredPostsLimit: 3, // Amount of featured posts displayed.
  userName: "Yan-Sheng (Arsene) Kuo", // Username to display in the author segment.
  userEmail: "crowley3141@hotmail.com", // Email used for RSS feed's author segment
  userTwitter: "https://twitter.com/ArseneKuo", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Taipei, Taiwan", // User location to display in the author segment.
  userResume:
    "https://drive.google.com/file/d/1OdNg980V-9H4kksJgmXNlRqpd2KLgupI/view?usp=sharing",
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/YSKuo",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/ArseneKuo",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/arsene_alibi/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yanshengkuo/",
    },
  ],
  tabLinks: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    // {
    //   title: "Work",
    //   url: "/work",
    // },
    // {
    //   title: "Playground",
    //   url: "/playground",
    // },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  userSkills: {
    design: [
      "Sketch",
      "Photoshop",
      "Figma",
      "Zeplin",
      "Wireframing",
      "Prototyping",
    ],
    development: ["JavaScript (ES6+)", "HTML", "CSS", "PHP", "Python", "Git"],
    frontend: [
      "React.js",
      "Redux",
      "Gatsby.js",
      "jQuery",
      "Webpack",
      "Babel",
      "Gulp",
    ],
    backend: ["Node.js", "Django", "MySQL", "GraphQL"],
    general: [
      "Web Application",
      "RWD",
      "Interaction Design",
      "Scrum",
      "SEO",
      "Unit Testing",
    ],
  },
  copyright: `Copyright © Arsene Kuo 2019 - ${new Date().getFullYear()}`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#01579b", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
