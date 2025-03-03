/**
 * Title component for rendering a heading element with Bulma classes.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="h1"] - The HTML tag to use for the title (e.g., "h1", "h2").
 * @param {number} [props.size] - The size of the title, corresponding to Bulma's title sizes (e.g., 1, 2, 3).
 * @param {boolean} [props.isSpaced] - Whether the title should have spacing.
 * @param {React.ReactNode} props.children - The content to be displayed within the title.
 * @param {string} [props.className=""] - Additional custom class names to apply to the title.
 * @param {Object} [props.props] - Additional properties to spread onto the title element.
 * @returns {JSX.Element} The rendered title component.
 */
export default function Title({
	as: Component = "h1",
	size,
	isSpaced,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	if (size) {
		bulmaClasses.push(`is-${size}`);
	}

	if (isSpaced) {
		bulmaClasses.push("is-spaced");
	}

	return (
		<Component className={`title ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
