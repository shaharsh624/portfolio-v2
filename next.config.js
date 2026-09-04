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
            {
                source: "/iolite",
                destination:
                    "https://pdpuacin-my.sharepoint.com/:f:/g/personal/harsh_sce21_pdpu_ac_in/IgCsXkxM9FfdS4cdIj1ryF0-AZIGkdRC4-q7VXkndsxuJvw?e=uRQ9Pc",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
