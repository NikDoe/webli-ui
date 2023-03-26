import clsx from "clsx";
import { FC, memo } from "react";
import { IconType, iconTypes, IIconProps } from "types";

import styles from "./styles.module.scss";

const getIcon = (type: IconType): JSX.Element =>
	iconTypes.get(type) as JSX.Element;

const IconComponent: FC<IIconProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(styles.Icon, className)} {...props}>
			{getIcon(props.type)}
		</div>
	);
};

const Icon = memo(IconComponent);

export default Icon;
