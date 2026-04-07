/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://johnbuilds.site',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}