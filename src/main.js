import * as React from "react";
import { Fragment } from "react";
import * as PropTypes from "prop-types";
import {
	render,
	Artboard,
	Text,
	View,
	Page,
	StyleSheet,
} from "react-sketchapp";
import chroma from "chroma-js";
import CoverPage from "./components/Pages/Cover";
import Section from "./components/Elements/Section";
import Swatch from "./components/Elements/Swatch";
//import globalStyles from "./styles/globalStyles";
//import colorList from "../src/data/colors.json";
//import list from "../src/data/list.json";
//import CoverPage from "./components/Pages/Cover";
//import globalStyles from "./styles/globalStyles";
let basePadding = 20;
let baseWidth = 594;

const mainStyles = StyleSheet.create({
	board: {
		marginTop: 30,
		marginBottom: 30,
		padding: 20,
		paddingTop: 35,
		paddingLeft: 50,
		height: 592,
		width: 842,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	cover: {
		width: "100%",
		marginTop: 30,
		marginBottom: 30,
		padding: 10,
		height: 592,
		width: 842,
		flexDirection: "row",
		flexWrap: "wrap",
		flexDirection: "column",
		//justifyContent: "center",
		backgroundColor: "#faaf1b",
		//alignItems: "center",
	},
	view: {
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
	},
	h1: {
		fontFamily: "Google Sans",
		fontSize: 38,
		color: "#333",
		fontWeight: "bold",
	},
	h2: {
		fontFamily: "Roboto",
		fontSize: 14,
		color: "#fff",
	},
	bar: {
		fontSize: 36,
		color: "blue",
	},
});

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

const Color = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Document = ({ colors }) => (
	<React.Fragment>
		<Page name="Styleguide">
			<CoverPage version={"1.0.1"} />

			<Artboard name="Swatches" style={mainStyles.board}>
				<Section
					title="Colors"
					label="Primary Colors"
					content={Object.keys(colors).map(color => (
						<Swatch name={color} hex={colors[color]} key={color} />
					))}
				/>
			</Artboard>
			<Artboard name="Typography" style={mainStyles.board}>
				<Text name="h1" style={mainStyles.h1}>
					This is the headline
				</Text>
			</Artboard>
		</Page>
	</React.Fragment>
);

Document.propTypes = {
	colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
	const colorList = {
		"Bettermarks Canary": "#faaf1b",
		"Azul oscuro casi negro": "#333333",
		Haus: "#F3F4F4",
		Night: "#333",
		Sur: "#96DBE4",
		"Sur Dark": "#24828F",
		Peach: "#EFADA0",
		"Peach Dark": "#E37059",
		Pear: "#93DAAB",
		"Pear Dark": "#2E854B",
	};

	render(<Document colors={colorList} />, context.document.currentPage());
};
