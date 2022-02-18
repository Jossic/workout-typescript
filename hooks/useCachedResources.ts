import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { containsKey, getData, saveData } from '../storage';
import data from '../data.json';
import { getWorkouts, initWorkouts } from '../storage/workout';

export const useCachedResources = () => {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				await initWorkouts();
				await Font.loadAsync({
					Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
					Shizuru: require('../assets/fonts/Shizuru-Regular.ttf'),
					OrbitonBold: require('../assets/fonts/Orbitron-ExtraBold.ttf'),
					Orbiton: require('../assets/fonts/Orbitron-Regular.ttf'),
				});
			} catch (error) {
				console.warn(`error =>`, error);
			} finally {
				const workouts = await getWorkouts();
				setIsLoadingComplete(true);
			}
		};

		loadResourcesAndDataAsync();
	}, [isLoadingComplete]);

	return isLoadingComplete;
};
