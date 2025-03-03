export default function NavbarDropdownMenu({
	as: Component = "div",
	align = "left",
	isBoxed,
	className = "",
	children,
	...props
}) {
	const bulmaClasses = [];

	//* ALIGN
	switch (align) {
		case "right":
			bulmaClasses.push("is-right");
			break;
		case "left":
			break;
	}

	//* IS BOXED
	if (isBoxed) bulmaClasses.push("is-boxed");

	return (
		<Component className={`navbar-dropdown ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
