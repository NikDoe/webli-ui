export const classNames = (
	mainClass: string,
	isDisabled?: boolean,
	classes?: string,
): string => {
	if (classes)
		return mainClass
			.split(" ")
			.concat(
				isDisabled ? `${mainClass}Disabled` : "",
				classes.split(" "),
			)
			.filter((str) => str !== "")
			.join(" ");
	return `${
		isDisabled ? `${mainClass} ${mainClass}Disabled` : `${mainClass}`
	}`;
};
