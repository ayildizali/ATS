/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            colors:{
                primary:'#1E724A',
                Graydarker:'#C8CCCF',
                Dark:'#41464B',
                GrayLighter:'#ECEEF0',
                GrayLightest:'#FAFBFD',
                Dark900:'#5E656C'
            }
        },
    },
    plugins: [],
}
