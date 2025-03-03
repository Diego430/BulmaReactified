/**
 * A functional component that renders a set of buttons with optional Bulma classes.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the buttons container.
 * @param {boolean} [props.hasAddons] - If true, applies the "has-addons" Bulma class.
 * @param {string} [props.align] - The alignment of the buttons, can be "center" or "right".
 * @param {string} [props.size] - The size of the buttons, can be "small", "medium", or "large".
 * @param {string} [props.className] - Additional custom classes to apply to the buttons container.
 *
 * @returns {JSX.Element} The rendered buttons container.
 */
export default function Buttons({
	as: Component = "div",
	children,
	hasAddons,
	align,
	size,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* HAS ADDONS
	if (hasAddons) bulmaClasses.push("has-addons");

	//* ALIGN
	switch (align) {
		case "center":
			bulmaClasses.push("is-centered");
			break;
		case "right":
			bulmaClasses.push("is-right");
			break;
	}

	//* SIZE
	switch (size) {
		case "small":
			bulmaClasses.push("are-small");
			break;
		case "medium":
			bulmaClasses.push("are-medium");
			break;
		case "large":
			bulmaClasses.push("are-large");
			break;
		default:
			break;
	}

	return (
		<Component className={`buttons ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
