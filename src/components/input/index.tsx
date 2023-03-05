import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../types/input";
import styles from "./styles.module.scss";

const Input = forwardRef(
	(props: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		return <input className={clsx(styles.Input)} ref={ref} {...props} />;
	},
);

Input.displayName = "Input";

export default Input;
