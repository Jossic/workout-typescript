import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, color: 'black' }}>Home Screen</Text>
			<Button
				title='Go to planner'
				onPress={() => navigation.navigate('Planner')}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
