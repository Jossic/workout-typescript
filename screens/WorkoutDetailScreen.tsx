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

	const startupSeq = ['3', '2', '1', 'Go'].reverse();
	const { countDown, isRunning, stop, start } = useCountDown(trackerIdx);

	useEffect(() => {
		if (!workout) return;

		if (trackerIdx === workout.sequence.length - 1) return;

		if (countDown === 0) {
			addItemToSequence(trackerIdx + 1);
		}
	}, [countDown]);

	const addItemToSequence = (idx: number) => {
		let newSequence = [];

		if (idx > 0) {
			newSequence = [...sequence, workout!.sequence[idx]];
		} else {
			newSequence = [workout!.sequence[idx]];
		}
		setSequence(newSequence);
		setTrackerIdx(idx);
		start(newSequence[idx].duration + startupSeq.length);
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
							buttonStyle={{}}
							textStyle={{
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							onPress={handleOpen}
						/>
					)}>
					{() => (
						<View>
							{workout.sequence.map((sequence, idx) => (
								<View
									key={sequence.slug}
									style={styles.sequences}>
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
						</View>
					)}
				</Modal>
			</WorkoutItem>
			<View style={styles.wrapper}>
				<View style={styles.counterUI}>
					<View>
						{sequence.length === 0 ? (
							<Ionicons
								onPress={() => addItemToSequence(0)}
								name='play-circle'
								size={80}
								color='blue'
							/>
						) : isRunning ? (
							<Ionicons
								onPress={() => {
									stop();
								}}
								name='pause-circle'
								size={80}
								color='blue'
							/>
						) : (
							<Ionicons
								onPress={() => {
									if (hasReachedEnd) {
										addItemToSequence(0);
									} else {
										start(countDown);
									}
								}}
								name='play-circle'
								size={80}
								color='blue'
							/>
						)}

						{sequence.length > 0 && countDown >= 0 && (
							<View>
								<Text style={{ fontSize: 50 }}>
									{countDown > sequence[trackerIdx].duration
										? startupSeq[
												countDown -
													sequence[trackerIdx]
														.duration -
													1
										  ]
										: countDown}
								</Text>
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
	counterUI: {
		alignItems: 'center',
	},
	wrapper: {
		marginTop: 10,
		width: '90%',
		borderRadius: 10,
		borderColor: 'rgba(0,0,0,0.1)',
		backgroundColor: '#fff',
		borderWidth: 1,
		padding: 10,
	},
});
