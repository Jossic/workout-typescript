import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import WorkoutForm, { Excercice } from '../components/WorkoutForm';

type PlannerScreenProps = NativeStackHeaderProps;

const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
	// const handleFormSubmit = (form: Excercice) => {
	// 	alert(`${form.name} - ${form.duration}`);
	// };

	return (
		<View style={styles.container}>
			<WorkoutForm />
		</View>
	);
};

export default PlannerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
});
