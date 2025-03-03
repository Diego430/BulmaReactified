"use client";
import { useActivatable } from "./ActivatableContext";

export default function DropdownMenu({
	as: Component = "div",
	id,
	children,
	className = "",
	...props
}) {
	const { isActive } = useActivatable();

	return (
		<Component
			id={id ?? "dropdown-menu"}
			className={`dropdown-menu ${isActive ? "is-active" : ""} ${className}`}
			{...props}
		>
			<div className="dropdown-content">{children}</div>
		</Component>
	);
}
