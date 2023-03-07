import { DOMAttributes } from "react";

import { ReactComponent as Visible } from "../assets/icons/files/visible.svg";
import { ReactComponent as VisibleOff } from "../assets/icons/files/visibleoff.svg";
import { ReactComponent as Checkbox } from "../assets/icons/files/checkbox.svg";
import { newGuid } from "../utils";

export type IconType = "visible" | "visibleoff" | "checkbox";

export const iconTypes = new Map([
	["visible", <Visible key={newGuid()} />],
	["visibleoff", <VisibleOff key={newGuid()} />],
	["checkbox", <Checkbox key={newGuid()} />],
]);

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
	type: IconType;
	className?: string;
}
