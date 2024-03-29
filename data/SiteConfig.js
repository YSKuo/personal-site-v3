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
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  featuredPostsLimit: 3, // Amount of featured posts displayed.
  userName: "Yan-Sheng (Arsene) Kuo", // Username to display in the author segment.
  userEmail: "crowley3141@hotmail.com", // Email used for RSS feed's author segment
  userTwitter: "https://twitter.com/ArseneKuo", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Houston, Texas", // User location to display in the author segment.
  userResume:
    "https://docs.google.com/document/d/18ASSmVnMz2kiN3NFxoN6EZEVv33ytBHiGYO5mspWSDI/edit?usp=sharing",
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/YSKuo",
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/ArseneKuo",
    // },
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
    programmingLan: ["JavaScript", "Python", "PHP"],
    frontend: [
      "React",
      "Redux",
      "Jest",
      "Testing Library",
      "HTML",
      "CSS",
      "Webpack",
      "Gatsby",
    ],
    backend: ["Django", "GraphQL", "Node", "Express"],
    database: ["MySQL"],
    design: ["Figma", "Wireframing", "Prototyping", "Interaction design"],
    development: ["Web application", "RWD", "Git", "Agile", "Unit testing"],
  },
  copyright: `Copyright © Arsene Kuo 2020 - ${new Date().getFullYear()}`, // Copyright string for the footer of the website and RSS feed.
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
