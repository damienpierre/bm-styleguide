import * as React from "react";
import { View, Text } from "react-sketchapp";
import chroma from "chroma-js";
import { variables } from "../../Styles/globalStyles";

const Swatch = ({ name, hex }) => (
	<View
		name={`Swatch ${name}`}
		style={{
			height: "55",
			width: "55",
			marginRight: 10,
			marginBottom: 10,
			//flex: 1,
			//alignItems; "center",
			flexDirection: "column",
			justifyContent: "space-between",
			//flexWrap: "wrap",
			backgroundColor: hex,
			padding: 5,
		}}
	>
		<Text
			name="Swatch Name"
			style={{
				color: textColor(hex),
				fontWeight: "bold",
				fontSize: 9,
				fontFamily: variables.fonts.bodyFont,
			}}
		>
			{name}
		</Text>
		<Text
			name="Swatch Hex"
			style={{
				color: textColor(hex),
				fontSize: 9,
				fontFamily: variables.fonts.bodyFont,
			}}
		>
			{hex}
		</Text>
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
