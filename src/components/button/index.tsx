import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";
import "./index.scss";

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
					btnDisabled ? "Button__disabled" : "",
					classes.split(" "),
				)
				.filter((str) => str !== "")
				.join(" ");
		return `${
			btnDisabled ? `${"Button"} ${"Button__disabled"}` : `${"Button"}`
		}`;
	};
	return (
		<button
			className={classNames("Button", isDisabled, className)}
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
