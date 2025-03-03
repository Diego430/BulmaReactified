export default function Container({
	as: Component = "div",
	behavior,
	className,
	children,
	...props
}) {
	const bulmaClasses = [];

	switch (behavior) {
		case "widescreen":
			bulmaClasses.push("is-widescreen");
			break;
		case "fullhd":
			bulmaClasses.push("is-fullhd");
			break;
		case "max-tablet":
			bulmaClasses.push("is-max-tablet");
			break;
		case "max-desktop":
			bulmaClasses.push("is-max-desktop");
			break;
		case "max-widescreen":
			bulmaClasses.push("is-max-widescreen");
			break;
		case "fluid":
			bulmaClasses.push("is-fluid");
			break;
		default:
			break;
	}

	return (
		<Component className={`container ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
