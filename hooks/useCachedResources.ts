import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useCachedResources = () => {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false);

	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				await Font.loadAsync({
					Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
					Shizuru: require('../assets/fonts/Shizuru-Regular.ttf'),
				});
			} catch (error) {
				console.warn(`error =>`, error);
			} finally {
				setIsLoadingComplete(true);
			}
		};

		loadResourcesAndDataAsync();
	}, [isLoadingComplete]);

	return isLoadingComplete;
};
