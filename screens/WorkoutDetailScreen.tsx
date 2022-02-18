import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Modal from '../components/styled/Modal';
import PressableText from '../components/styled/PressableText';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';
import { formatSec } from '../utils/time';
import { Ionicons } from '@expo/vector-icons';

type WorkoutDetailScreenProps = {
	route: { params: { slug: string } };
};
type Navigation = WorkoutDetailScreenProps & NativeStackHeaderProps;

const WorkoutDetailScreen: React.FC<Navigation> = ({ route }) => {
	const workout = useWorkoutBySlug(route.params.slug);

	if (!workout) {
		return <ActivityIndicator />;
	}

	return (
		<View style={styles.container}>
			<Text>WorkoutDetailScreen - {workout?.name}</Text>
			<Modal
				activator={({ handleOpen }) => (
					<PressableText
						text='Cheeck'
						style={{
							backgroundColor: 'lightblue',
							borderRadius: 5,
							padding: 10,
							marginTop: 10,
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
		</View>
	);
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	sequences: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
