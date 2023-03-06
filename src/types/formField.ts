import { FocusEvent } from "react";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormField {
	className?: string;
	isFocused?: boolean;
	isRequired?: boolean;
	name?: string;
	label?: string;
	type?: FormFieldType;
	error?: string;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}
