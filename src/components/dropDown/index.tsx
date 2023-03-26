import { FC, memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IDropDownProps } from "../../types";

import styles from "./styles.module.scss";

const DropDownComponent: FC<IDropDownProps> = ({
	className,
	children,
	isOpen,
}) => {
	const nodeRef = useRef(null);

	return (
		<CSSTransition
			classNames={className}
			in={isOpen}
			nodeRef={nodeRef}
			timeout={150}
			unmountOnExit
		>
			<div className={styles.Dropdown} ref={nodeRef}>
				{children}
			</div>
		</CSSTransition>
	);
};

const DropDown = memo(DropDownComponent);

export default DropDown;
