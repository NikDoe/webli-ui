import { ChangeEvent } from "react";

export interface ICheckboxProps {
	className?: string;
	id: string;
	label?: string;
	isChecked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
