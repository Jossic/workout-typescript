import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getWorkouts } from '../storage/workout';
import { Workout } from '../types/data';

export const useWorkouts = () => {
	const [workouts, setWorkouts] = useState<Workout[]>([]);
	const idFocused = useIsFocused();

	useEffect(() => {
		async function getData() {
			const _workouts = await getWorkouts();
			setWorkouts(_workouts);
		}
		getData();
	}, [idFocused]);

	return workouts;
};
