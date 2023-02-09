import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";
import { classNames } from "../../utils";
import styles from "./index.module.scss";

type ButtonType = "button" | "submit" | "reset";

interface IButtonProps
	extends DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		React.AriaAttributes {
	className?: string;
	type?: ButtonType;
	isDisabled?: boolean;
	onClick?: (event: MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({
	children,
	className,
	type,
	isDisabled,
	onClick,
	...props
}) => {
	return (
		<button
			className={classNames(styles.Button, isDisabled, className)}
			type={type}
			disabled={isDisabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
