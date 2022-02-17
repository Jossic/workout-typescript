import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useCachedResources } from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
	const isLoaded = useCachedResources();
	return (
		<>
			<Navigation />
			<StatusBar style='auto' />
		</>
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
