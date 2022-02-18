import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Modal from '../components/styled/Modal';
import PressableText from '../components/styled/PressableText';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';

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
				activator={() => (
					<PressableText
						text='Cheeck'
						onPress={() => alert('dfdfhdf')}
					/>
				)}
			/>
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
});
