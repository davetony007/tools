/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toolbox-flame.vercel.app',
  generateRobotsTxt: true, // This will also generate a robots.txt file
  exclude: ['/tools/*'], // Exclude dynamic routes (handled separately if needed)
};
