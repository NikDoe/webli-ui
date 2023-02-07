import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";

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
	type,
	isDisabled,
	onClick,
	...props
}) => {
	return (
		<button type={type} disabled={isDisabled} onClick={onClick} {...props}>
			{children}
		</button>
	);
};

export default Button;
