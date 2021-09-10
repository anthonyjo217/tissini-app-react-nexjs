module.exports = {
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
}
