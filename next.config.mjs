/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', // ✅ reemplaza el uso de `next export`

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

