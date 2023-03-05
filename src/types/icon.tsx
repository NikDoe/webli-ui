import { DOMAttributes } from "react";
import { ICommonProps } from "./common";

import { ReactComponent as Visible } from "../assets/icons/files/visible.svg";
import { ReactComponent as VisibleOff } from "../assets/icons/files/visibleoff.svg";
import { newGuid } from "../utils";

export type IconType = "visible" | "visibleoff";

export const iconTypes = new Map([
	["visible", <Visible key={newGuid()} />],
	["visibleoff", <VisibleOff key={newGuid()} />],
]);

export interface IIconProps
	extends DOMAttributes<HTMLSpanElement>,
		ICommonProps {
	type: IconType;
}
