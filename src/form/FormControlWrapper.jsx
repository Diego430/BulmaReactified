export default function FormControlWrapper({
	as: Component = "div",
	hasIconLeft,
	hasIconRight,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	return (
		<Component className={`control ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
