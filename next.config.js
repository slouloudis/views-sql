// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = nextConfig

// console.log(withContentlayer(nextConfig))
// console.log(nextConfig)