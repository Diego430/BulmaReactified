"use client";
import React from "react";
import ActivatableProvider from "./ActivatableContext";

export default function DropdownWrapper({
	as: Component = "div",
	align = "left",
	direction = "down",
	isHoverable,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];
	const [isActive, setIsActive] = React.useState(false);

	//* ALIGNED
	switch (align) {
		case "right":
			bulmaClasses.push("is-right");
			break;
		case "left":
			break;
	}

	//* DIRECTION
	switch (direction) {
		case "up":
			bulmaClasses.push("is-up");
			break;
		case "down":
			break;
	}

	//* IS ACTIVE
	if (isActive) bulmaClasses.push("is-active");

	//* IS HOVERABLE
	if (isHoverable) bulmaClasses.push("is-hoverable");

	return (
		<ActivatableProvider value={{ isActive, setIsActive }}>
			<Component className={`dropdown ${bulmaClasses.join(" ")} ${className}`} {...props}>
				{children}
			</Component>
		</ActivatableProvider>
	);
}
