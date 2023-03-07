import clsx from "clsx";
import { FC, useState } from "react";
import { IFormField } from "../../types";
import Icon from "../icon";
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
	const [isShowPassword, setIsShowPassword] = useState(false);

	const handleShowPassword = () => {
		setIsShowPassword((prevState) => !prevState);
	};

	const handleType = () => {
		if (type !== "text") {
			return (type = isShowPassword ? "text" : "password");
		}
		return "text";
	};

	const renderInput = () => {
		return (
			<>
				<Input
					className={clsx(isFocused && styles.Input__active)}
					name={name}
					error={error}
					onBlur={onBlur}
					onFocus={onFocus}
					type={handleType()}
					{...props}
				/>
				{((type === "password" && !isShowPassword) ||
					(type !== "password" && isShowPassword)) && (
					<Icon
						type={isShowPassword ? "visibleoff" : "visible"}
						className={styles.Visible}
						onClick={handleShowPassword}
					/>
				)}
				{error && <div className={styles.Error}>{error}</div>}
			</>
		);
	};

	return (
		<div
			className={clsx(
				styles.FormField,
				isFocused && styles.FormField__active,
				className,
			)}
		>
			<label className={clsx(styles.Label)} htmlFor={name}>
				{label}
				{isRequired && (
					<span className={styles.Label__required}> *</span>
				)}
			</label>
			{renderInput()}
		</div>
	);
};

export default FormField;
