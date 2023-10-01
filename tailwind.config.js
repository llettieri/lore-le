/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#17a7eb',
                primaryTint: '#26BAFF',
                secondary: '#2917EB',
                secondaryTint: '#3826FF',
                secondaryText: '#2917EB',
                mainBackground: '#333333',
                navbar: '#444444',
            }
        }
    },
    plugins: [],
};
