/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
    async redirects() {
        return [
            {
                source: "/resume",
                destination:
                    "https://links.harshshah.me/p2-resume",
                permanent: true,
            },
            {
                source: "/cv",
                destination:
                    "https://links.harshshah.me/p2-cv",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
