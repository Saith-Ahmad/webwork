/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://beyondhut.com',
  generateRobotsTxt: true,
  exclude: [
    '/admin-dashboard',        // exact route
    '/admin-dashboard/*',        // other sensitive route
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin-dashboard', '/admin-dashboard/*', '/see-applicants'],
      },
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
};
