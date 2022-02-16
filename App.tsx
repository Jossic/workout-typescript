import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <HomeScreen /> */}
			<Navigation />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
});
