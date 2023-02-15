import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICommonProps } from "./common";

export interface IInputProps
	extends DetailedHTMLProps<
			HTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		ICommonProps {
	name?: string;
	type?: string;
	error?: string;
}
