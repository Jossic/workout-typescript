import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';
import { Workout } from '../types/data';

type HomeScreenProps = NativeStackHeaderProps;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* <Text style={{ fontSize: 20, color: 'black' }}>Home Screen</Text> */}
			<FlatList
				data={data as Workout[]}
				keyExtractor={(item) => item.slug}
				renderItem={({ item }) => (
					<View>
						<Text>{item.name}</Text>
					</View>
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
});
