import { FC } from "react";
import { IButtonProps, IClassObject } from "../../types";
import { classNames } from "../../utils";
import styles from "./styles.module.scss";

const classNamesObj: IClassObject = {
	type: "type-",
	isDisabled: styles["Button-disabled"],
};

const defaultProps: IButtonProps = {
	type: "button",
};

const Button: FC<IButtonProps> = (props) => {
	return (
		<button
			type={props.type}
			disabled={props.isDisabled}
			className={classNames<IButtonProps>(
				styles.Button,
				classNamesObj,
				{ ...defaultProps, ...props },
				props.className,
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
