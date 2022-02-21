import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface WorkoutFormProps {}

const WorkoutForm: React.FC<WorkoutFormProps> = () => {
	const [form, setForm] = useState({ name: '', duration: '' });
	console.log(`form =>`, form);

	const onChangeText = (inputName: string) => (text: string) => {
		setForm({ ...form, [inputName]: text });
	};
	return (
		<View style={styles.container}>
			<Text>WorkoutForm</Text>
			<View>
				<TextInput
					value={form.name}
					style={styles.input}
					onChangeText={onChangeText('name')}
				/>
				<TextInput
					value={form.duration}
					style={styles.input}
					onChangeText={onChangeText('duration')}
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
