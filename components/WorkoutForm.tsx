import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './styled/PressableText';
import { useForm, Controller } from 'react-hook-form';

export type Excercice = {
	name: string;
	duration: string;
	type: string;
	reps?: string;
};

interface WorkoutFormProps {
	onSubmit: (form: Excercice) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({
	onSubmit,
}: WorkoutFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<View style={styles.container}>
			<Text>WorkoutForm</Text>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							style={styles.input}
							onChangeText={onChange}
							value={value}
							placeholder='Nom'
						/>
					)}
					name='name'
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							style={styles.input}
							placeholder='Durée'
							onChangeText={onChange}
							value={value}
						/>
					)}
					name='duration'
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							style={styles.input}
							placeholder='Type'
							onChangeText={onChange}
							value={value}
						/>
					)}
					name='type'
				/>
				<Controller
					control={control}
					rules={{
						required: false,
					}}
					render={({ field: { onChange, value } }) => (
						<TextInput
							style={styles.input}
							placeholder='Reps'
							onChangeText={onChange}
							value={value}
						/>
					)}
					name='reps'
				/>
				<PressableText
					text='Envoyer'
					onPress={handleSubmit((data) =>
						onSubmit(data as Excercice)
					)}
				/>
			</View>
		</View>
	);
};

export default WorkoutForm;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	input: {
		minWidth: '80%',
		height: 50,
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		paddingHorizontal: 10,
	},
});
