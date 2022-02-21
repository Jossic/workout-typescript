import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ExerciseForm, { Excercice } from '../components/ExerciseForm';
import { Sequence, SequenceType } from '../types/data';

type PlannerScreenProps = NativeStackHeaderProps;

const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
	const handleFormSubmit = (form: Excercice) => {
		const sequenceItem: Sequence = {
			slug: `${form.name}-${Date.now()}`,
			name: form.name,
			type: form.type as SequenceType,
			duration: Number(form.duration),
			reps: form.reps ? Number(form.reps) : undefined,
		};

		console.log(`sequenceItem =>`, sequenceItem);
	};

	return (
		<View style={styles.container}>
			<ExerciseForm onSubmit={handleFormSubmit} />
		</View>
	);
};

export default PlannerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
});
