import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../types/input";
import { classNames } from "../../utils";
import styles from "./styles.module.scss";

const inputClassNames = {};

const inputDefaultProps = {};

const Input = forwardRef(
	(props: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		return (
			<input
				className={classNames(
					styles.Input,
					inputClassNames,
					{ ...inputDefaultProps, ...props },
					props.className,
				)}
				ref={ref}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
