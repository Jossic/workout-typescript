import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any) => {
	try {
		const stringValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, stringValue);
	} catch (error) {
		console.warn('error saveData =>', error.message);
	}
};

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value) return JSON.parse(value);
	} catch (error) {
		console.warn('error saveData =>', error.message);
	}
};

export const containsKey = async (key: string) => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		return keys.includes(key);
	} catch (error) {
		console.warn('error saveData =>', error.message);
	}
};

export const removeData = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.warn('error saveData =>', error.message);
	}
};
