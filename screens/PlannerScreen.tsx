import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type PlannerScreenProps = NativeStackHeaderProps;

const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>PlannerScreen</Text>
			<Button
				title='Go to Home'
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
};

export default PlannerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
