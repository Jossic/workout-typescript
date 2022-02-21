import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './styled/PressableText';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

export type Workout = {
	name: string;
};

interface WorkoutFormProps {
	onSubmit: (form: Workout) => void;
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

				<PressableText
					text='Envoyer'
					onPress={handleSubmit((data) => {
						onSubmit(data as Workout);
					})}
				/>
			</View>
		</View>
	);
};

export default WorkoutForm;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		padding: 10,
	},
	input: {
		minWidth: '80%',
		height: 50,
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		paddingHorizontal: 10,
	},
	inputIOS: {
		height: 40,
		marginTop: 10,
	},
});
