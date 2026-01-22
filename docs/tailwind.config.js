/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                primary: '#c1ff00',        // Acid Green (More "Cyberpunk" than Red)
                secondary: '#ccff33',
                dark: '#050505',           // True Void Black
                'glass-border': 'rgba(255, 255, 255, 0.08)',
                'glass-surface': 'rgba(255, 255, 255, 0.03)',
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],           // The "Art" Font
                space: ['Space Grotesk', 'sans-serif'], // The "Tech" Font
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
            },
            animation: {
                'blob': 'blob 10s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
