import { FC } from "react";
import { IButtonProps } from "../../types";
import clsx from "clsx";

import styles from "./styles.module.scss";

const Button: FC<IButtonProps> = (props) => {
	return (
		<button
			type={props.type}
			disabled={props.isDisabled}
			className={clsx(
				styles.Button,
				props.isDisabled && styles.Button__disabled,
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
