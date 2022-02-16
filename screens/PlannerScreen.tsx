import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PlannerScreenProps {}

const PlannerScreen: React.FC<PlannerScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>PlannerScreen</Text>
		</View>
	);
};

export default PlannerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d3d3d3',
		paddingHorizontal: 25,
	},
});
