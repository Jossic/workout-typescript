import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrbitonText from '../components/styled/OrbitonText';
import WorkoutItem from '../components/WorkoutItem';
import { useWorkouts } from '../hooks/useWorkout';

type HomeScreenProps = NativeStackHeaderProps;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	const workouts = useWorkouts();
	const colorScheme = useColorScheme();
	const color = colorScheme === 'light' ? '#000' : '#fff';

	return (
		<View style={styles.container}>
			<OrbitonText
				style={{
					fontSize: 30,
					color: colorScheme === 'light' ? '#000' : '#fff',
				}}>
				Workouts
			</OrbitonText>
			<FlatList
				data={workouts}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => (
					<Pressable
						onPress={() =>
							navigation.navigate('WorkoutDetail', {
								slug: item.slug,
							})
						}>
						<WorkoutItem workout={item} />
					</Pressable>
				)}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 25,
		marginVertical: 15,
		fontWeight: 'bold',
		fontFamily: 'OrbitonBold',
	},
});
