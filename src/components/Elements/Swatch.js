import * as React from "react";
import { View, Text, StyleSheet } from "react-sketchapp";
import chroma from "chroma-js";
import { variables } from "../../Styles/globalStyles";

const styles = StyleSheet.create({
	swatchContainer: {
		marginRight: 10,
		marginBottom: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
		//padding: 5,
	},
	swatchColor: {},
	swatchDetails: {
		marginTop: 10,
		width: "55",
		flexDirection: "row",
		flexWrap: "wrap",
	},
});

const Swatch = ({ name, hex }) => (
	<View name={`Swatch ${name}`} style={styles.swatchContainer}>
		<View
			style={{
				height: "60",
				width: "60",
				backgroundColor: hex,
				padding: 5,
				borderRadius: 3,
			}}
		>
			<Text
				style={{
					color: textColor(hex),
					fontFamily: variables.fonts.bodyFont,

					fontSize: 10,
				}}
			>
				{hex}
			</Text>
		</View>
		<View style={styles.swatchDetails}>
			<Text
				name="Swatch Name"
				style={{
					color: variables.colors.dark,
					fontWeight: "bold",
					fontSize: 9,
					fontFamily: variables.fonts.bodyFont,
				}}
			>
				{name}
			</Text>
		</View>
	</View>
);

// take a hex and give us a nice text color to put over it
const textColor = hex => {
	const vsWhite = chroma.contrast(hex, "white");
	if (vsWhite > 4) {
		return "#FFF";
	}
	return chroma(hex)
		.darken(3)
		.hex();
};

export default Swatch;
