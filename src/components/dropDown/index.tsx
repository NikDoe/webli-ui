import clsx from "clsx";
import { FC, memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IDropDownProps } from "types";

import styles from "./styles.module.scss";

const DropDownComponent: FC<IDropDownProps> = ({
	className,
	transitions,
	children,
	isOpen,
}) => {
	const nodeRef = useRef(null);

	const defaultTransitions = {
		enter: styles.Enter,
		enterDone: styles.EnterDone,
		exit: styles.Exit,
	};

	return (
		<CSSTransition
			classNames={transitions ? transitions : defaultTransitions}
			in={isOpen}
			nodeRef={nodeRef}
			timeout={200}
			unmountOnExit
		>
			<div ref={nodeRef}>
				<div className={className}>{children}</div>
			</div>
		</CSSTransition>
	);
};

const DropDown = memo(DropDownComponent);

export default DropDown;
