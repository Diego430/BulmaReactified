export default function PanelBlock({
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
		<Component className={`panel-block ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
