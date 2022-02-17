import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface OrbitonTextProps {}

const OrbitonText: React.FC<OrbitonTextProps> = ({ children }) => {
	return <Text style={styles.header}>{children}</Text>;
};

export default OrbitonText;

const styles = StyleSheet.create({
	header: {
		fontFamily: 'OrbitonBold',
	},
});
