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
                    "https://drive.google.com/file/d/1HbjmZ7IPBs3G88PhYMoJp3b030yLaLxK/view",
                permanent: true,
            },
            {
                source: "/cv",
                destination:
                    "https://drive.google.com/file/d/1hkIl2Kd9ATkhB8OAAo2EdyDMG2_SB9Ed/view",
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
