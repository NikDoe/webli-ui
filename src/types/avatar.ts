import { MouseEvent } from "react";

export interface IAvatarProps {
	className?: string;
	defaultIconClassName?: string;
	size?: number;
	title?: string;
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
