import { IClassObject } from "../types";

export const classNames = <T extends object>(
	mainClass: string,
	obj: IClassObject,
	props: T,
	customClasses?: string,
): string => {
	let classNamesArr: string[] = [];

	for (const [key, value] of Object.entries(props)) {
		if (obj[key] !== undefined && value) {
			const cls =
				typeof value !== "boolean"
					? `${obj[key]}${value}`
					: `${obj[key]}`;
			classNamesArr.push(cls);
		}
	}

	if (customClasses) {
		classNamesArr = classNamesArr.concat(customClasses);
	}

	return `${mainClass} ${classNamesArr.join(" ")}`;
};
