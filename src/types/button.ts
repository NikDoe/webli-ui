import { DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from "react";
import { ICommonProps } from "./common";

type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		ICommonProps {
	type?: ButtonType;
	isDisabled?: boolean;
	onClick?: (event: MouseEvent) => void;
}
