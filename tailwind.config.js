/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				body: ["Nunito"],
			},
			fontSize: {
				middy: "15px",
				big: "17px",
			},
		},
	},
	plugins: [],
};
