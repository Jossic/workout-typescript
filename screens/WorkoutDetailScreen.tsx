import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useWorkoutBySlug } from '../hooks/useWorkoutBySlug';
import { getWorkoutBySlug } from '../storage/workout';

type WorkoutDetailScreenProps = {
	route: { params: { slug: string } };
};
type Navigation = WorkoutDetailScreenProps & NativeStackHeaderProps;

const WorkoutDetailScreen: React.FC<Navigation> = ({ route }) => {
	const workout = useWorkoutBySlug(route.params.slug);

	return (
		<View style={styles.container}>
			<Text>WorkoutDetailScreen - {workout?.name}</Text>
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
