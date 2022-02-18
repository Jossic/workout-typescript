import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any) => {
	try {
		const stringValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, stringValue);
	} catch (error) {
		console.warn('error saveData =>', error);
	}
};

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value) return JSON.parse(value);
	} catch (error) {
		console.warn('error saveData =>', error);
	}
};
