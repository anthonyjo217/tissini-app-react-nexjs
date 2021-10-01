const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  async rewrites() {
    return [
      {
        source: '/categories/:path*',
        destination: '/product/:path*',
      },
    ]
  },
  images: {
    // domains: ['https://v3.tissini.app'],
    loader: 'imgix',
    path: 'https://v3.tissini.app',
  },

  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})
