import { containsKey, getData, removeData, saveData } from '.';
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
export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
	const workouts = await getWorkouts();
	const workout = workouts.filter((work) => work.slug === slug)[0];
	return workout;
};

export const clearWorkouts = async (): Promise<void> => {
	await removeData('workout-data');
};

export const saveWorkout = async (newWorkout: Workout): Promise<boolean> => {
	const workouts = await getWorkouts();
	await saveData('workout-data', [...workouts, newWorkout]);
	return true;
};
