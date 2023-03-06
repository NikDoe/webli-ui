import clsx from "clsx";
import { FC } from "react";
import { IFormField } from "../../types";
import Input from "../input";

import styles from "./styles.module.scss";

const FormField: FC<IFormField> = ({
	className,
	isFocused = false,
	isRequired,
	name,
	label,
	type = "text",
	error,
	onBlur,
	onFocus,
	...props
}) => {
	return (
		<div
			className={clsx(
				styles.FormField,
				isFocused && styles.FormField__active,
				className,
			)}
			{...props}
		>
			<label className={clsx(styles.Label)} htmlFor={name}>
				{label}
				{isRequired && (
					<span className={styles.Label__required}> *</span>
				)}
			</label>
			{type === "text" && (
				<>
					<Input
						className={clsx(isFocused && styles.Input__active)}
						name={name}
						error={error}
						onBlur={onBlur}
						onFocus={onFocus}
						type={type}
					/>
					{error && <div className={styles.Error}>{error}</div>}
				</>
			)}
		</div>
	);
};

export default FormField;
