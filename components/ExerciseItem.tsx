import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sequence } from '../types/data';

interface ExerciseItemProps {
	item: Sequence;
	children?: React.ReactNode;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ item, children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>
				{item.name}
				{item.reps ? `- ${item.reps}` : ''} - {item.duration} sec |{' '}
				{item.type}
			</Text>
			{children}
		</View>
	);
};

export default ExerciseItem;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: '#fff',
		borderColor: 'rgba(0,0,0,0.1)',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	name: {
		fontSize: 15,
		marginBottom: 5,
	},
});
