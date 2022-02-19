import { useEffect, useState } from 'react';

export const useCountDown = (idx: number, initialCount: number) => {
	const [countDown, setCountDown] = useState<number>(-1);
	useEffect(() => {
		if (idx === -1) return;
		const intervalId = window.setInterval(() => {
			setCountDown((count) => {
				// console.log(`count =>`, count);
				return count - 1;
			});
		}, 1000);
		return () => window.clearInterval(intervalId);
	}, [idx]);

	useEffect(() => {
		setCountDown(initialCount);
	}, [initialCount]);

	return countDown;
};
