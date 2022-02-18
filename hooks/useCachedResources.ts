import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { getData, saveData } from '../storage';
import data from '../data.json';

export const useCachedResources = () => {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				await saveData('workout-data', data);
				await Font.loadAsync({
					Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
					Shizuru: require('../assets/fonts/Shizuru-Regular.ttf'),
					OrbitonBold: require('../assets/fonts/Orbitron-ExtraBold.ttf'),
					Orbiton: require('../assets/fonts/Orbitron-Regular.ttf'),
				});
			} catch (error) {
				console.warn(`error =>`, error);
			} finally {
				const workout = await getData('workout-data');
				setIsLoadingComplete(true);
			}
		};

		loadResourcesAndDataAsync();
	}, [isLoadingComplete]);

	return isLoadingComplete;
};
