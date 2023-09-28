/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/locations',
    async redirects() {
        return [
          {
            source: '/',
            destination: '/search',
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
