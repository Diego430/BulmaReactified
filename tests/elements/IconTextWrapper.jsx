/**
 * You can combine an icon with text, using the icon-text wrapper, as long as all text inside is wrapped in its own span element.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The icon inline and the text.
 * @param {string} [props.className] - Additional class names to apply to the span.
 *
 * @returns {JSX.Element} The rendered span element with the combined classes and children.
 */

export default function IconTextWrapper({
	as: Component = "span",
	children,
	className = "",
	...props
}) {
	return (
		<Component className={`icon-text ${className}`} {...props}>
			{children}
		</Component>
	);
}
