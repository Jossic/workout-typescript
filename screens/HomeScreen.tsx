import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from '../data.json';

type HomeScreenProps = NativeStackHeaderProps;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, color: 'black' }}>Home Screen</Text>
			<Text style={{ fontSize: 10, color: 'black' }}>
				{JSON.stringify(data)}
			</Text>
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
