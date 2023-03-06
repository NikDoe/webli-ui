import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IInputProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name?: string;
	type?: string;
	error?: string;
}
