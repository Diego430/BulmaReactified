/**
 * A functional component that renders a Bulma-styled tag element.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="span"] - The HTML element to render as.
 * @param {string} [props.variant] - The color variant of the tag. Can be one of "black", "dark", "light", "white", "primary", "link", "info", "success", "warning", "danger".
 * @param {boolean} [props.isLight] - If true, applies the "is-light" class.
 * @param {string} [props.size] - The size of the tag. Can be one of "small", "medium", "large".
 * @param {boolean} [props.isHoverable] - If true, applies the "is-hoverable" class.
 * @param {boolean} [props.isRounded] - If true, applies the "is-rounded" class.
 * @param {boolean} [props.isDelete] - If true, applies the "is-delete" class.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the tag.
 * @param {string} [props.className=""] - Additional custom class names to apply to the tag.
 *
 * @returns {JSX.Element} The rendered tag element.
 */
export default function Tag({
	as: Component = "span",
	variant,
	isLight,
	size,
	isHoverable,
	isRounded,
	isDelete,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* VARIANT
	switch (variant) {
		case "black":
			bulmaClasses.push("is-black");
			break;
		case "dark":
			bulmaClasses.push("is-dark");
			break;
		case "light":
			bulmaClasses.push("is-light");
			break;
		case "white":
			bulmaClasses.push("is-white");
			break;
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

		default:
			break;
	}

	//* IS LIGHT
	if (isLight) bulmaClasses.push("is-light");

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

		default:
			break;
	}

	//* IS HOVERABLE
	if (isHoverable) bulmaClasses.push("is-hoverable");

	//* IS ROUNDED
	if (isRounded) bulmaClasses.push("is-rounded");

	//* IS DELETE
	if (isDelete) bulmaClasses.push("is-delete");

	return (
		<Component className={`tag ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
