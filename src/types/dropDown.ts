import { ReactNode } from "react";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

export interface IDropDownProps {
	transitions?: CSSTransitionClassNames;
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
}
