import * as React from "react";
import { View, Text, StyleSheet } from "react-sketchapp";
import { variables } from "../../Styles/globalStyles";

const styles = StyleSheet.create({
	title: {
		fontFamily: variables.fonts.titleFont,
		fontSize: variables.sizes.h3,
		textTransform: "uppercase",
		fontWeight: "bold",
		width: "100%",
	},
	separator: {
		borderTopWidth: 2.5,
		borderTopColor: variables.colors.dark,
		borderStyle: "solid",
		marginBottom: 10,
		//paddingTop: 30,
		//marginTop: 5,
		width: "100%",
	},
	section: {
		flexDirection: "column",
		width: "100%",

		//paddingTop: 30,
		//marginTop: 5,
	},
	container: {
		flexDirection: "row",
		width: "100%",
	},
});

const Title = ({ name }) => (
	<View style={styles.section}>
		<Text style={styles.title} name="sectionTitle">
			{name}
		</Text>
		<View style={styles.separator} />
	</View>
);

export default Title;
