import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import {
	ActivityIndicator,
	Alert,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
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
			<PressableText text='Cheeeeck' onPress={() => alert('Alert !')} />
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