import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type OrbitonTextProps = Text['props'];

const OrbitonText: React.FC<OrbitonTextProps> = (props) => {
	return (
		<Text {...props} style={[props.style, { fontFamily: 'OrbitonBold' }]} />
	);
};

export default OrbitonText;
