/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'buymecoffee.com'
            }
        ],
        unoptimized: true,
    },
};

export default nextConfig;