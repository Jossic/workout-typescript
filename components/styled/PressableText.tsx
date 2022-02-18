import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	View,
} from 'react-native';

type PressableTextProps = PressableProps & {
	text: string;
	textStyle?: StyleProp<TextStyle>;
};

const PressableText: React.FC<PressableTextProps> = (props) => {
	return (
		<Pressable {...props}>
			<Text style={props.textStyle}>{props.text}</Text>
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
