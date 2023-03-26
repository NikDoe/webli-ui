import clsx from "clsx";
import { FC, memo } from "react";
import { ICheckboxProps } from "types";
import { Icon } from "components";

import styles from "./styles.module.scss";

const CheckBoxComponent: FC<ICheckboxProps> = ({
	className,
	isChecked,
	label,
	id,
	onChange,
}) => {
	return (
		<div
			className={clsx(
				styles.Checkbox,
				isChecked && styles.Active,
				className,
			)}
		>
			<Icon type="checkbox" />
			{label && <label htmlFor={id}>{label}</label>}
			<input
				type="checkbox"
				checked={isChecked}
				id={id}
				name={label}
				value={label}
				onChange={onChange}
			/>
		</div>
	);
};

const CheckBox = memo(CheckBoxComponent);
export default CheckBox;
