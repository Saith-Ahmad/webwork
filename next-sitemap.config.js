/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webwork.store',
  generateRobotsTxt: true,
  exclude: [
    '/admin-dashboard',        // exact route
    '/admin-dashboard/*',        // other sensitive route
    '/api/*',                  // exclude API routes
    '/_next/*',               // exclude Next.js internal routes
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin-dashboard', '/admin-dashboard/*', '/see-applicants', '/api/*'],
      },
    ],
    additionalSitemaps: [
      'https://webwork.store/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,  // This will create only one sitemap
  // Add this to ensure current dates are used
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
