import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExerciseForm, { Excercice } from '../components/ExerciseForm';
import { Sequence, SequenceType } from '../types/data';
import slugify from 'slugify';
import ExerciseItem from '../components/ExerciseItem';
import PressableText from '../components/styled/PressableText';

type PlannerScreenProps = NativeStackHeaderProps;

const PlannerScreen: React.FC<PlannerScreenProps> = ({ navigation }) => {
	const [seqItems, setSeqItems] = useState<Sequence[]>([]);

	const handleFormSubmit = (form: Excercice) => {
		const sequenceItem: Sequence = {
			slug: slugify(`${form.name}-${Date.now()}`, { lower: true }),
			name: form.name,
			type: form.type as SequenceType,
			duration: Number(form.duration),
			reps: form.reps ? Number(form.reps) : undefined,
		};

		setSeqItems([...seqItems, sequenceItem]);
	};

	return (
		<View style={styles.container}>
			<FlatList
				keyExtractor={(item) => item.slug}
				data={seqItems}
				renderItem={({ item, index }) => (
					<ExerciseItem item={item}>
						<PressableText
							buttonStyle={{}}
							text='Remove'
							onPressIn={() => {
								const items = [...seqItems];
								items.splice(index, 1);
								setSeqItems(items);
							}}
						/>
					</ExerciseItem>
				)}
			/>
			<ExerciseForm onSubmit={handleFormSubmit} />
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
