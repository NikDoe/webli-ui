import { FC, memo } from "react";
import { IButtonProps } from "../../types";
import clsx from "clsx";

import styles from "./styles.module.scss";

const ButtonComponent: FC<IButtonProps> = ({ className, ...props }) => {
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

const Button = memo(ButtonComponent);

export default Button;
