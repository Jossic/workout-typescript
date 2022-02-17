import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WorkoutItem from '../components/WorkoutItem';
import data from '../data.json';
import { Workout } from '../types/data';

type HomeScreenProps = NativeStackHeaderProps;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 20,
					marginVertical: 15,
					fontWeight: 'bold',
				}}>
				Workouts
			</Text>
			<FlatList
				data={data as Workout[]}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => <WorkoutItem workout={item} />}
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
});
