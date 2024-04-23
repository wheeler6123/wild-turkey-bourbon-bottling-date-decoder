import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Wild Turkey Date Decoder',
        short_name: "Wild Turkey Date Decoder",
        description: "Enter the laser code from your bottle of Wild Turkey bourbon to find out when it was bottled.",
        start_url: '/',
        display: 'standalone',
        background_color: '#1E283A',
        theme_color: '#1E283A',
        icons: [
            {
                "src": "/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}