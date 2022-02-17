export const secsToMins = (sec: number) => {
	return (sec / 60).toFixed(1);
};

export const formatSec = (sec: number) => {
	const _min = Math.floor(sec / 60);
	const _sec = sec % 60;

	return `${_min} min et ${_sec} sec`;
};
