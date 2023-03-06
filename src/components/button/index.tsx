import { FC } from "react";
import { IButtonProps } from "../../types";
import clsx from "clsx";

import styles from "./styles.module.scss";

const Button: FC<IButtonProps> = ({ className, ...props }) => {
	return (
		<button
			type={props.type}
			disabled={props.isDisabled}
			className={clsx(
				styles.Button,
				props.isDisabled && styles.Button__disabled,
				className,
			)}
			onClick={props.onClick}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
