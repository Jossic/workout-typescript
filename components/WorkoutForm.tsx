import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './styled/PressableText';
import { useForm, Controller } from 'react-hook-form';

export type Excercice = {
	name: string;
	duration: string;
};

interface WorkoutFormProps {
	// onSubmit: (form: Excercice) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({}: // onSubmit,
WorkoutFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { name: '', duration: '' },
	});
	const onSubmit = (data: Excercice) => console.log('data => ', data);

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
						/>
					)}
					name='name'
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name='duration'
				/>
				<PressableText
					text='Envoyer'
					onPress={handleSubmit(onSubmit)}
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
