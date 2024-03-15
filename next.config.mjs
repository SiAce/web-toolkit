/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/converter/text/base64',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
