/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-vercel-url.vercel.app', // Replace with your actual Vercel URL
  generateRobotsTxt: true, // This will also generate a robots.txt file
  exclude: ['/tools/*'], // Exclude dynamic routes (handled separately if needed)
};
