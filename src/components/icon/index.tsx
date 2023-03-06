import clsx from "clsx";
import { FC } from "react";
import { IconType, iconTypes, IIconProps } from "../../types";

import styles from "./styles.module.scss";

const getIcon = (type: IconType): JSX.Element =>
	iconTypes.get(type) as JSX.Element;

const Icon: FC<IIconProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(styles.Icon, className)} {...props}>
			{getIcon(props.type)}
		</div>
	);
};

export default Icon;
