import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, color: 'black' }}>Home Screen</Text>
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
