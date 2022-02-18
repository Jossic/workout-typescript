import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrbitonText from '../components/styled/OrbitonText';
import WorkoutItem from '../components/WorkoutItem';
import data from '../data.json';
import { Workout } from '../types/data';

type HomeScreenProps = NativeStackHeaderProps;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<OrbitonText style={{ fontSize: 30 }}>Workouuuuts</OrbitonText>
			<FlatList
				data={data as Workout[]}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => (
					<Pressable onPress={() => console.log('press')}>
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
