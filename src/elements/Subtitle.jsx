/**
 * Subtitle component for rendering a subtitle element with Bulma classes.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="h3"] - The HTML tag to use for the subtitle.
 * @param {string} [props.size] - The size of the subtitle (e.g., "1", "2", "3", etc.).
 * @param {boolean} [props.isSpaced] - Whether the subtitle should have spacing.
 * @param {React.ReactNode} props.children - The content to be rendered inside the subtitle.
 * @param {string} [props.className=""] - Additional custom class names to apply to the subtitle.
 *
 * @returns {JSX.Element} The rendered subtitle component.
 */
export default function Subtitle({
	as: Component = "h3",
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
		<Component className={`subtitle ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
