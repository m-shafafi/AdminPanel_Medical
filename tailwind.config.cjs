/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}" // تمام فایل‌های JSX/TSX داخل src
    ],
    theme: {
        extend: {
            height: {
                '500': '500px',
            }
        },
    },
    plugins: [],
};