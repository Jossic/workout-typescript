import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WorkoutDetailScreenProps = NativeStackHeaderProps;

const WorkoutDetailScreen: React.FC<WorkoutDetailScreenProps> = ({ route }) => {
	return (
		<View style={styles.container}>
			<Text>WorkoutDetailScreen - {route.params.slug}</Text>
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
