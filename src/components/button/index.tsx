import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";
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
	onClick: (event: MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({
	children,
	className,
	type,
	isDisabled,
	onClick,
	...props
}) => {
	const classNames = (
		mainClass: string,
		btnDisabled?: boolean,
		classes?: string,
	): string => {
		if (classes)
			return mainClass
				.split(" ")
				.concat(
					btnDisabled ? `${styles.ButtonDisabled}` : "",
					classes.split(" "),
				)
				.filter((str) => str !== "")
				.join(" ");
		return `${
			btnDisabled
				? `${mainClass} ${styles.ButtonDisabled}`
				: `${mainClass}`
		}`;
	};
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