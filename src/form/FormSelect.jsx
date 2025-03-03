export default function FormSelect({
	as: Component = "select",
	variant,
	size,
	rounded,
	state,
	isStatic,
	isLoading,
	multiple,
	hasIconLeft,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* VARIANT
	switch (variant) {
		case "primary":
			bulmaClasses.push("is-primary");
			break;
		case "link":
			bulmaClasses.push("is-link");
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
	}

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

	//* ROUNDED
	if (rounded) bulmaClasses.push("is-rounded");

	//* STATE
	switch (state) {
		case "hovered":
			bulmaClasses.push("is-hovered");
			break;
		case "focused":
			bulmaClasses.push("is-focused");
			break;
		case "active":
			bulmaClasses.push("is-active");
			break;
	}

	//* STATIC
	if (isStatic) bulmaClasses.push("is-static");

	//* LOADING
	if (isLoading) bulmaClasses.push("is-loading");

	//* MULTIPLE
	if (multiple) bulmaClasses.push("is-multiple");

	//* ICON LEFT
	if (hasIconLeft) bulmaClasses.push("has-icons-left");

	return (
		<Component
			className={`input ${bulmaClasses.join(" ")} ${className}`}
			multiple={multiple}
			{...props}
		/>
	);
}
