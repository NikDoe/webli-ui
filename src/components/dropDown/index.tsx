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

	return (
		<CSSTransition
			classNames={
				transitions
					? transitions
					: {
							enter: styles.Enter,
							enterDone: styles.EnterDone,
							exit: styles.Exit,
					  }
			}
			in={isOpen}
			nodeRef={nodeRef}
			timeout={200}
			unmountOnExit
		>
			<div ref={nodeRef}>
				<div className={clsx(styles.Dropdown, className)}>
					{children}
				</div>
			</div>
		</CSSTransition>
	);
};

const DropDown = memo(DropDownComponent);

export default DropDown;
