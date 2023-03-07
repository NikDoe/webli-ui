import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../types";
import styles from "./styles.module.scss";

const Input = forwardRef(
	(
		{ className, ...props }: IInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		return (
			<input
				className={clsx(
					styles.Input,
					props.error && styles.Input__error,
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
