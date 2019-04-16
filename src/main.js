import * as React from "react";
import { Fragment } from "react";
import * as PropTypes from "prop-types";
import { render, Artboard, Text, Page, StyleSheet } from "react-sketchapp";

import CoverPage from "./components/Pages/Cover";
import SubSection from "./components/Elements/SubSection";
import Swatch from "./components/Elements/Swatch";
//import globalStyles from "./styles/globalStyles";
import colorList from "../src/data/colors.json";
import Title from "./components/Elements/Title";
//import list from "../src/data/list.json";
//import CoverPage from "./components/Pages/Cover";
//import globalStyles from "./styles/globalStyles";
let basePadding = 20;
let baseWidth = 594;

const mainStyles = StyleSheet.create({
	board: {
		//marginTop: 30,
		marginBottom: 30,
		padding: 20,
		//paddingTop: 35,
		//paddingLeft: 30,
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

const colorItem = Object.keys(colorList).map(item => (
	<SubSection
		key={item}
		label={colorList[item].name}
		content={colorList[item].colors.map(subitem => (
			<Swatch key={subitem} name={subitem.value} hex={subitem.hexcode} />
		))}
	/>
));

const Document = () => (
	<React.Fragment>
		<Page name="Styleguide">
			<CoverPage version={"1.0.1"} />

			<Artboard name="Swatches" style={mainStyles.board}>
				<Title name="Colors" />
				{colorItem}
			</Artboard>
			<Artboard name="Typography" style={mainStyles.board}>
				<Text name="h1" style={mainStyles.h1}>
					This is the headline, blupp
				</Text>
			</Artboard>
		</Page>
	</React.Fragment>
);

export default () => {
	render(<Document />, context.document.currentPage());
};
