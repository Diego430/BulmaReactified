export default function DropdownMenuItem({
	as: Component = "div",
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	return (
		<Component className={`dropdown-item ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
