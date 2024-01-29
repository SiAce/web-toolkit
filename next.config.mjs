/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/converter/base64',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
