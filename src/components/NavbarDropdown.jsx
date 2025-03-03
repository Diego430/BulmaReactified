"use client";

import { useState } from "react";
import NavbarDropdownProvider from "./NavbarDropdownContext";

export default function NavbarDropdown({
	as: Component = "div",
	className = "",
	isHoverable,
	direction = "down",
	isArrowless,
	children,
	...props
}) {
	const [isActive, setIsActive] = useState(false);
	const bulmaClasses = [];

	//* IS HOVERABLE
	if (isHoverable) bulmaClasses.push("is-hoverable");

	//* IS ACTIVE
	if (!isHoverable && isActive) bulmaClasses.push("is-active");

	//* DIRECTION
	switch (direction) {
		case "up":
			bulmaClasses.push("is-dropdown-up");
			break;
		case "down":
			break;
	}

	//* IS ARROWLESS
	if (isArrowless) bulmaClasses.push("is-arrowless");

	return (
		<NavbarDropdownProvider value={{ isActive, setIsActive }}>
			<Component
				className={`navbar-item has-dropdown ${bulmaClasses.join(" ")} ${className}`}
				{...props}
			>
				{children}
			</Component>
		</NavbarDropdownProvider>
	);
}
