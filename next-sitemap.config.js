/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://johncodes.xyz',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}