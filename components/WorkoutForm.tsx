import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WorkoutFormProps {}

const WorkoutForm: React.FC<WorkoutFormProps> = () => {
	return (
		<View style={styles.container}>
			<Text>WorkoutForm</Text>
		</View>
	);
};

export default WorkoutForm;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
