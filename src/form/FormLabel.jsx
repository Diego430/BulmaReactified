export default function FormLabel({
	as: Component = "label",
	size,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* SIZE
	switch (size) {
		case "small":
			bulmaClasses.push("is-small");
			break;
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
	}

	return (
		<Component className={`label ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
