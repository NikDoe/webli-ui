import clsx from "clsx";
import { FC, memo } from "react";
import { IAvatarProps } from "../../types";

import styles from "./styles.module.scss";

import Icon from "../icon";

const AvatarComponent: FC<IAvatarProps> = ({
	className,
	defaultIconClassName,
	size = 40,
	title,
	onClick,
	...props
}) => {
	const wrapperSize = `${size}px`;

	return (
		<div
			className={styles.Avatar}
			style={{ width: wrapperSize, height: wrapperSize }}
			onClick={onClick}
			{...props}
		>
			{!title && <Icon className={defaultIconClassName} type="avatar" />}
			{title && (
				<div className={clsx(styles.Title, className)}>{title}</div>
			)}
		</div>
	);
};

const Avatar = memo(AvatarComponent);

export default Avatar;
