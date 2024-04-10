const transformToDateForm = (date) => {
	let yyyy = date.substring(0, 4);
	let mm = date.substring(5, 7);
	let dd = date.substring(8, 10);

	return `${yyyy}년 ${(mm < 10 ? mm.slice(1,2) : mm)}월 ${(dd < 10 ? dd.slice(1,2) : dd)}일`;
}

export default transformToDateForm;