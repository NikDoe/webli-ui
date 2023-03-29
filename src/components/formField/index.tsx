import clsx from "clsx";
import { Icon, Input } from "components";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { IFormField } from "types";

import styles from "./styles.module.scss";

const FormField = <T extends FieldValues>({
	register,
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
}: IFormField<T>): JSX.Element => {
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
		const passwordCondition =
			(type === "password" && !isShowPassword) ||
			(type !== "password" && isShowPassword);

		return (
			<>
				<Input
					{...(register ? register(name) : register)}
					className={clsx(isFocused && styles.Input__active)}
					name={name}
					error={error}
					onBlur={onBlur}
					onFocus={onFocus}
					type={handleType()}
					{...props}
				/>
				{passwordCondition && (
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
