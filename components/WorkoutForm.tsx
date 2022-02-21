import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './styled/PressableText';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

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
	const [type, setType] = useState<'exercise' | 'break' | 'stretch'>();

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
					render={({ field: { onChange, value } }) => (
						// <TextInput
						// 	style={styles.input}
						// 	placeholder='Type'
						// 	onChangeText={onChange}
						// 	value={value}
						// />
						<>
							<Text>Type</Text>
							<Picker
								selectedValue={type}
								style={
									Platform.OS === 'ios'
										? styles.inputIOS
										: styles.input
								}
								itemStyle={{ height: 40, marginTop: 10 }}
								numberOfLines={1}
								onValueChange={(itemValue, itemIndex) =>
									setType(itemValue)
								}>
								<Picker.Item
									label='Exercise'
									value='Exercise'
								/>
								<Picker.Item label='Break' value='Break' />
								<Picker.Item label='Stretch' value='Stretch' />
							</Picker>
						</>
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
					onPress={handleSubmit((data) => {
						data.type = type;
						onSubmit(data as Excercice);
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
		maxHeight: 80,
	},
});
