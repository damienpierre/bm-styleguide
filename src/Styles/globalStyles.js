const baseline = 16;

export const variables = {
	colors: {
		dark: "#333",
		light: "#fefefe",
		canary: "#faaf1b",
		orange: "#ff3300",
	},
	fonts: {
		titleFont: "Google Sans",
		bodyFont: "Roboto",
	},
	sizes: {
		xxl: baseline * 3,
		xl: baseline * 2,
		baseline: baseline,
		sm: baseline / 1.25,
		h1: 34,
		h2: 28,
		h3: 18,
		h4: 16,
		h5: 12,
		h6: 10,
	},
};

export const globalStyles = {
	h1: {},
};

// const globalStyles = StyleSheet.create({
// 	board: {
// 		flexDirection: "row",
// 		flexWrap: "wrap",
// 		marginTop: 50,
// 		marginBottom: 50,
// 		padding: 20,
// 		width: 595,
// 		height: 842,
// 	},
// });
