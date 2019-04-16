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
	},
	section: {
		flexDirection: "column",
		marginTop: 20,
		//marginBottom: 20,
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

const SubSection = ({ label, content, extraStyles }) => (
	<View style={(styles.section, extraStyles)}>
		<View style={styles.container}>
			<View style={styles.panelLeft}>
				<Text style={styles.label}>{label}</Text>
			</View>
			<View style={styles.panelRight}>{content}</View>
		</View>
	</View>
);

export default SubSection;
