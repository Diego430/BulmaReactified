/**
 * A React component that renders a set of Bulma tags with various options.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="div"] - The HTML element to render as the container.
 * @param {string} [props.sizes] - The size of the tags. Can be "small", "medium", or "large".
 * @param {boolean} [props.hasAddons] - Whether the tags have addons.
 * @param {boolean} [props.isGrouped] - Whether the tags are grouped.
 * @param {boolean} [props.isMultiline] - Whether the grouped tags are multiline.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the tags container.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container.
 *
 * @returns {JSX.Element} The rendered tags component.
 */
export default function Tags({
	as: Component = "div",
	sizes,
	hasAddons,
	isGrouped,
	isMultiline,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* SIZES
	switch (sizes) {
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

	//* HAS ADDONS
	if (hasAddons) bulmaClasses.push("has-addons");

	//* IS GROUPED
	if (isGrouped)
		if (isMultiline) bulmaClasses.push("is-grouped-multiline");
		else bulmaClasses.push("is-grouped");

	return (
		<Component className={`tags ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
