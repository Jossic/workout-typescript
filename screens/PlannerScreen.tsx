import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExerciseForm, { Excercice } from '../components/ExerciseForm';
import { Sequence, SequenceType, Workout } from '../types/data';
import slugify from 'slugify';
import ExerciseItem from '../components/ExerciseItem';
import PressableText from '../components/styled/PressableText';
import Modal from '../components/styled/Modal';
import WorkoutForm, { WorkoutData } from '../components/WorkoutForm';

type PlannerScreenProps = NativeStackHeaderProps;

const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
	const [seqItems, setSeqItems] = useState<Sequence[]>([]);

	const handleFormSubmit = (form: Excercice) => {
		const sequenceItem: Sequence = {
			slug: slugify(`${form.name}-${Date.now()}`, { lower: true }),
			name: form.name,
			type: form.type as SequenceType,
			duration: Number(form.duration),
			reps: form.reps ? Number(form.reps) : undefined,
		};

		setSeqItems([...seqItems, sequenceItem]);
	};

	const computeDiff = (exercisesCount: number, workoutDuration: number) => {
		const intensity = workoutDuration / exercisesCount;

		if (intensity <= 60) {
			return 'hard';
		} else if (intensity <= 100) {
			return 'normal';
		} else return 'easy';
	};

	const handleFormSubmitForWorkout = (form: WorkoutData) => {
		if (seqItems.length > 0) {
			const duration = seqItems.reduce((acc, item) => {
				return acc + item.duration;
			}, 0);
			const workoutItem: Workout = {
				name: form.name,
				slug: slugify(`${form.name}-${Date.now()}`, { lower: true }),
				duration,
				difficulty: computeDiff(seqItems.length, duration),
				sequence: [...seqItems],
			};
		}

		// setSeqItems([...seqItems, workoutItem]);
	};

	return (
		<View style={styles.container}>
			<FlatList
				keyExtractor={(item) => item.slug}
				data={seqItems}
				renderItem={({ item, index }) => (
					<ExerciseItem item={item}>
						<PressableText
							buttonStyle={{}}
							text='Remove'
							onPressIn={() => {
								const items = [...seqItems];
								items.splice(index, 1);
								setSeqItems(items);
							}}
						/>
					</ExerciseItem>
				)}
			/>
			<ExerciseForm onSubmit={handleFormSubmit} />
			<View>
				<Modal
					activator={({ handleOpen }) => (
						<PressableText
							text='Workout'
							style={{
								backgroundColor: 'lightblue',
								borderRadius: 5,
								padding: 10,
								marginTop: 10,
							}}
							buttonStyle={{}}
							textStyle={{
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							onPress={handleOpen}
						/>
					)}>
					{({ toggleModal }) => (
						<View>
							<WorkoutForm
								onSubmit={(data) => {
									handleFormSubmitForWorkout(data);
									toggleModal();
									navigation.navigate('Home');
								}}
							/>
						</View>
					)}
				</Modal>
			</View>
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
