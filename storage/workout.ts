import { containsKey, getData, saveData } from '.';
import data from '../data.json';
import { Workout } from '../types/data';

export const initWorkouts = async (): Promise<boolean> => {
	const hasStoredWorkout = await containsKey('workout-data');
	if (!hasStoredWorkout) {
		await saveData('workout-data', data);
		return true;
	}
	return false;
};

export const getWorkouts = async (): Promise<Workout[]> => {
	const workouts = await getData('workout-data');
	return workouts;
};
