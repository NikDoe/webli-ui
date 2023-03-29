import { FocusEvent, InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type FormFieldType = "text" | "password" | "tel" | "textarea";

export interface IFormField<T> extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<FieldValues>;
	className?: string;
	isFocused?: boolean;
	isRequired?: boolean;
	name: Path<T>;
	label?: string;
	type: FormFieldType;
	error?: string;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}
