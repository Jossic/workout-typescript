import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Workout } from '../types/data';
import { formatSec } from '../utils/time';

interface WorkoutItemProps {
	workout: Workout;
	children?: React.ReactNode;
	childStyle?: StyleProp<ViewStyle>;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({
	workout,
	children,
	childStyle = {},
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{workout.name}</Text>
			<Text style={styles.duration}>
				Durée: {formatSec(workout.duration)}
			</Text>
			<Text style={styles.difficulty}>
				Difficulté: {workout.difficulty}
			</Text>
			{children && <View style={childStyle}>{children}</View>}
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
		maxHeight: 140,
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
