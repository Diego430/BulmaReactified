export default function DropdownDivider({
	as: Component = "hr",
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	return (
		<Component className={`dropdown-divider ${bulmaClasses.join(" ")} ${className}`} {...props} />
	);
}
