/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html", "./src/**/*.js"],
    theme: {
        extend: {
            animation: {
                shake: "shake 0.5s ease-in-out infinite",
            },
            keyframes: {
                shake: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
        },
    },
    plugins: [],
};
