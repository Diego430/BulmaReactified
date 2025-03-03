"use client";

import { useActivatable } from "./ActivatableContext";

export default function DropdownTrigger({
	as: Component = "div",
	children,
	className = "",
	...props
}) {
	const { setIsActive } = useActivatable();

	return (
		<Component
			className={`dropdown-trigger ${className}`}
			onClick={() => setIsActive((prev) => !prev)}
			{...props}
		>
			<button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
				{children}
			</button>
		</Component>
	);
}
