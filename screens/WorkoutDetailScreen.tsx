import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Modal from '../components/styled/Modal';
import PressableText from '../components/styled/PressableText';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';
import { formatSec } from '../utils/time';
import { Ionicons } from '@expo/vector-icons';
import WorkoutItem from '../components/WorkoutItem';
import { Sequence } from '../types/data';
import { useEffect } from 'react';
import { useCountDown } from '../hooks/useCountDown';

type WorkoutDetailScreenProps = {
	route: { params: { slug: string } };
};
type Navigation = WorkoutDetailScreenProps & NativeStackHeaderProps;

const WorkoutDetailScreen: React.FC<Navigation> = ({ route }) => {
	const workout = useWorkoutBySlug(route.params.slug);
	const [sequence, setSequence] = useState<Sequence[]>([]);
	const [trackerIdx, setTrackerIdx] = useState<number>(-1);
	const { countDown, isRunning, stop } = useCountDown(
		trackerIdx,
		trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
	);

	useEffect(() => {
		if (!workout) return;

		if (trackerIdx === workout.sequence.length - 1) return;

		if (countDown === 0) {
			addItemToSequence(trackerIdx + 1);
		}
	}, [countDown]);

	const addItemToSequence = (idx: number) => {
		setSequence([...sequence, workout!.sequence[idx]]);
		setTrackerIdx(idx);
	};

	if (!workout) {
		return <ActivityIndicator />;
	}
	const hasReachedEnd =
		sequence.length === workout.sequence.length && countDown === 0;

	return (
		<View style={styles.container}>
			<WorkoutItem workout={workout} childStyle={{ marginVertical: 10 }}>
				<Modal
					activator={({ handleOpen }) => (
						<PressableText
							text='Check'
							style={{
								backgroundColor: 'lightblue',
								borderRadius: 5,
								padding: 10,
								marginTop: 10,
							}}
							textStyle={{
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							onPress={handleOpen}
						/>
					)}>
					{workout.sequence.map((sequence, idx) => (
						<View key={sequence.slug} style={styles.sequences}>
							<Text>
								{sequence.name}|{sequence.type}|
								{formatSec(sequence.duration)}|
							</Text>
							{idx !== workout.sequence.length - 1 && (
								<Ionicons
									name='arrow-down-circle'
									size={24}
									color='black'
								/>
							)}
						</View>
					))}
				</Modal>
			</WorkoutItem>
			<View>
				{sequence.length === 0 && (
					<Ionicons
						onPress={() => addItemToSequence(0)}
						name='play-circle'
						size={80}
						color='blue'
					/>
				)}

				{sequence.length > 0 && countDown >= 0 && (
					<View>
						<Text style={{ fontSize: 50 }}>{countDown}</Text>
					</View>
				)}
			</View>
			<View>
				<Text style={{ fontSize: 50 }}>
					{sequence.length === 0
						? 'Prepare'
						: hasReachedEnd
						? 'Great Job !'
						: sequence[trackerIdx].name}
				</Text>
			</View>
		</View>
	);
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	sequences: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
