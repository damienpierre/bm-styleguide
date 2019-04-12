import * as React from "react";
import { Artboard, View, Text, StyleSheet } from "react-sketchapp";
import { variables } from "../../Styles/globalStyles";

const styles = StyleSheet.create({
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
	h1: {
		fontFamily: variables.fonts.titleFont,
		fontSize: 38,
		color: "#333",
		fontWeight: "bold",
	},
	span: {
		fontFamily: variables.fonts.titleFont,
		fontSize: 38,
		color: variables.colors.light,
		fontWeight: "regular",
		marginLeft: 15,
	},
	h2: {
		fontFamily: "Roboto",
		fontSize: 14,
		color: variables.colors.dark,
	},
});

const CoverPage = ({ version }) => (
	<Artboard name="Cover Page" style={styles.cover}>
		<View
			style={{
				padding: 20,

				marginTop: "auto",
				marginBottom: 10,
			}}
		>
			<View style={{ flexDirection: "row" }}>
				<Text style={styles.h1}>Bettermarks</Text>
				<Text style={styles.span}>Styleguide</Text>
			</View>

			<Text style={styles.h2}>Version: {version}</Text>
		</View>
	</Artboard>
);

export default CoverPage;
