import { useEffect, useRef, useState } from 'react';

export const useCountDown = (idx: number, initialCount: number) => {
	const intervalRef = useRef<number>();
	const [countDown, setCountDown] = useState<number>(-1);
	useEffect(() => {
		if (idx === -1) return;
		intervalRef.current = window.setInterval(() => {
			setCountDown((count) => {
				return count - 1;
			});
		}, 50);
		return cleanup;
	}, [idx]);

	useEffect(() => {
		setCountDown(initialCount);
	}, [initialCount]);

	useEffect(() => {
		if (countDown === 0) {
			cleanup();
		}
	}, [countDown]);

	const cleanup = () => {
		if (intervalRef.current) {
			window.clearInterval(intervalRef.current);
			intervalRef.current = undefined;
		}
	};

	return countDown;
};
