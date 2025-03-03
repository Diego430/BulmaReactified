export default function Section({
	as: Component = "section",
	size,
	className,
	children,
	...props
}) {
	const bulmaClasses = [];

	//* SIZE
	switch (size) {
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
		default:
			break;
	}

	return (
		<Component className={`section ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
