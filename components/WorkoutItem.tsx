import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Workout } from '../types/data';

interface WorkoutItemProps {
	workout: Workout;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout }) => {
	return (
		<View style={styles.container}>
			<Text>{workout.name}</Text>
		</View>
	);
};

export default WorkoutItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d3d3d3',
		paddingHorizontal: 25,
		minWidth: '90%',
		height: 30,
		margin: 5,
	},
});
