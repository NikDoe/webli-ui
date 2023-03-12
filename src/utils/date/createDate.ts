import getWeekNumber from "./getWeekNumber";

interface ICreateDateParams {
	locale?: string;
	date?: Date;
}

const createDate = (params: ICreateDateParams) => {
	const locale = params?.locale ?? "default";

	const d = params?.date ?? new Date();
	const timestamp = d.getTime();
	const day = d.toLocaleDateString(locale, { weekday: "long" });
	const dayShort = d.toLocaleDateString(locale, { weekday: "short" });
	const dayNumber = d.getDate();
	const dayNumberInWeek = d.getDay() + 1;
	const week = getWeekNumber(d);
	const month = d.toLocaleDateString(locale, { month: "long" });
	const monthShort = d.toLocaleDateString(locale, { month: "short" });
	const monthNumber = d.getMonth() + 1;
	const monthIndex = d.getMonth();
	const year = d.getFullYear();
	const yearShort = d.toLocaleDateString(locale, { year: "2-digit" });

	return {
		date: d,
		timestamp,
		day,
		dayShort,
		dayNumber,
		dayNumberInWeek,
		week,
		month,
		monthShort,
		monthNumber,
		monthIndex,
		year,
		yearShort,
	};
};

export default createDate;
