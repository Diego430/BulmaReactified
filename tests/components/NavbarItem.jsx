export default function NavbarItem({
	as: Component = "div",
	active,
	className = "",
	children,
	...props
}) {
	const bulmaClasses = [];

	//* IS ACTIVE
	if (active) bulmaClasses.push("is-active");

	return (
		<Component className={`navbar-item ${className}`} {...props}>
			{children}
		</Component>
	);
}
