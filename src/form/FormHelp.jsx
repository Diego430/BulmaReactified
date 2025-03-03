export default function FormHelp({
	as: Component = "p",
	variant,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* VARIANT
	switch (variant) {
		case "primary":
			bulmaClasses.push("is-primary");
			break;
		case "info":
			bulmaClasses.push("is-info");
			break;
		case "success":
			bulmaClasses.push("is-success");
			break;
		case "warning":
			bulmaClasses.push("is-warning");
			break;
		case "danger":
			bulmaClasses.push("is-danger");
			break;
		case "light":
			bulmaClasses.push("is-light");
			break;
	}

	return (
		<Component className={`help ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
