/**
 * A functional component that renders content with optional Bulma classes for size.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="div"] - The HTML tag or React component to render as.
 * @param {React.ReactNode} props.children - The content to be rendered inside the component.
 * @param {string} [props.size] - The size of the content, can be "small", "medium", or "large".
 * @param {string} [props.className=""] - Additional custom class names to apply to the component.
 *
 * @returns {JSX.Element} The rendered content component.
 */
export default function Content({
	as: Component = "div",
	children,
	size,
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
		default:
			break;
	}

	return (
		<Component className={`content ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
