import { FC, ReactNode } from "react";

interface IButtonProps {
	color: string;
	children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children }) => {
	return <button>{children}</button>;
};

export default Button;
