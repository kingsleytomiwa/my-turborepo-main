/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwind-config/tailwind.config.js")
module.exports = {
    ...sharedConfig,
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*,{js,ts,jsx,tsx}",
    ] 
}
