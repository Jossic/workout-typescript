import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View,
} from 'react-native';

type PressableTextProps = PressableProps & { text: string };

const PressableText: React.FC<PressableTextProps> = (props) => {
	return (
		<Pressable {...props}>
			<Text>{props.text}</Text>
		</Pressable>
	);
};

export default PressableText;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d3d3d3',
		paddingHorizontal: 25,
	},
});
