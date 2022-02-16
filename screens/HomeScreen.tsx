import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
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
