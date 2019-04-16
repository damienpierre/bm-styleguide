import * as React from "react";
import { View, Text, StyleSheet } from "react-sketchapp";
import { variables } from "../../Styles/globalStyles";

const styles = StyleSheet.create({
	title: {
		fontFamily: variables.fonts.titleFont,
		fontSize: variables.sizes.h3,
		textTransform: "uppercase",
		fontWeight: "bold",

		flexDirection: "row",
		width: "100%",
		color: variables.colors.dark,
	},
	separator: {
		borderTopWidth: 2.5,
		borderTopColor: variables.colors.dark,
		borderStyle: "solid",
		paddingTop: 30,
		marginTop: 5,
	},
	label: {
		fontFamily: variables.fonts.bodyFont,
		fontSize: variables.sizes.h5,
		color: variables.colors.dark,
		width: "25%",
	},
	section: {
		flexDirection: "row",
		marginTop: 20,
		marginBottom: 20,
		width: "100%",
	},
	container: {
		flexDirection: "row",
		width: "100%",
	},
	panelLeft: { width: "25%" },
	panelRight: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "75%",
		justifyContent: "space-between",
	},
});

const SubSection = ({ label, content }) => (
	<View name="Sub Section" style={styles.section}>
		<Text name="Label" style={styles.label}>
			{label}
		</Text>
		<View name="Panel Right" style={styles.panelRight}>
			{content}
		</View>
	</View>
);

export default SubSection;
