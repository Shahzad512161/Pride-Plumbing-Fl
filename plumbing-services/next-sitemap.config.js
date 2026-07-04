/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pride-plumbing-fl.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
