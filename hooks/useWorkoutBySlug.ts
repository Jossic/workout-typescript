import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getWorkoutBySlug, getWorkouts } from '../storage/workout';
import { Workout } from '../types/data';

export const useWorkoutBySlug = (slug: string) => {
	const [workout, setWorkout] = useState<Workout>();
	const idFocused = useIsFocused();

	useEffect(() => {
		async function getData() {
			const _workout = await getWorkoutBySlug(slug);
			setWorkout(_workout);
		}
		getData();
	}, [idFocused]);

	return workout;
};
