import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { useCachedResources } from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
	const isLoaded = useCachedResources();
	const theme = useColorScheme();

	console.log(`theme =>`, theme);

	if (isLoaded) {
		return (
			<>
				<Navigation theme={theme} />
				<StatusBar style='auto' />
			</>
		);
	} else return null;
}

const styles = StyleSheet.create({});
