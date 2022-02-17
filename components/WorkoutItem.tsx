import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Workout } from '../types/data';
import { formatSec } from '../utils/time';

interface WorkoutItemProps {
	workout: Workout;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{workout.name}</Text>
			<Text style={styles.duration}>
				Durée: {formatSec(workout.duration)}
			</Text>
			<Text style={styles.difficulty}>
				Difficulté: {workout.difficulty}
			</Text>
		</View>
	);
};

export default WorkoutItem;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		borderRadius: 10,
		backgroundColor: '#fff',
		padding: 10,
		minWidth: '90%',
		maxHeight: 100,
		margin: 5,
	},
	name: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	duration: {
		fontSize: 15,
	},
	difficulty: {
		fontSize: 15,
	},
});
