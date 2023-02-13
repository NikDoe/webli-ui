import { DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from "react";

type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	type?: ButtonType;
	className?: string;
	isDisabled?: boolean;
	onClick?: (event: MouseEvent) => void;
}
