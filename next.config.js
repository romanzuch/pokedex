/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'raw.githubusercontent.com'
    ]
},
env: {
  API_KEY: process.env.API_KEY,
},
}

module.exports = nextConfig
