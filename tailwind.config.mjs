/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    "color-scheme": "light",
                    "primary": "#7c3aed",
                    "primary-content": "#ffffff",
                    "secondary": "#7c3aed",
                    "secondary-content": "#ffffff",
                    "accent": "#0f766e",
                    "accent-content": "#ffffff",
                    "neutral": "#2b3440",
                    "neutral-content": "#d7dde4",
                    "base-100": "#ffffff",
                    "base-200": "#f2f2f2",
                    "base-300": "#e5e6e6",
                    "base-content": "#1f2937",
                    "info": "#2563eb",
                    "success": "#16a34a",
                    "warning": "#d97706",
                    "error": "#dc2626",
                },
            },
            {
                dark: {
                    "color-scheme": "dark",
                    "primary": "#a78bfa",
                    "primary-content": "#1e1b4b",
                    "secondary": "#a78bfa",
                    "secondary-content": "#1e1b4b",
                    "accent": "#5eead4",
                    "accent-content": "#042f2e",
                    "neutral": "#2a323c",
                    "neutral-content": "#a6adbb",
                    "base-100": "#1d232a",
                    "base-200": "#191e24",
                    "base-300": "#15191e",
                    "base-content": "#d1d5db",
                    "info": "#60a5fa",
                    "success": "#4ade80",
                    "warning": "#fbbf24",
                    "error": "#f87171",
                },
            },
        ],
    },
};
