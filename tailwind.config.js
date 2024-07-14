import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        flowbite.content()
    ],
    theme: {
        extend: {
            colors: {
                primary: '#17a7eb',
                primaryTint: '#2bb4f8',
                secondary: '#0F5591',
                secondaryTint: '#1476CC',
                secondaryText: '#2917EB',
                mainBackground: '#041B26',
                navbar: '#052433',
            }
        }
    },
    plugins: [
        flowbite.plugin()
    ],
};
