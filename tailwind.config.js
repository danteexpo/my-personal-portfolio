module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"main-white": "#EAEAEA",
				"main-black": "#191919",
				"true-white": "#FFF",
				"true-black": "#000",
				"gray-light": "#808080",
				"gray-dark": "#AFAFAF",
			},
		},
	},
	plugins: [],
};
