/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                c: {
                    pink: "#e20ab7",
                    green: "#68b643"
                }
            },
            container: {
                center: true,
                padding: "2.5rem",
                screens: {
                    xl: "80rem",
                },
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
