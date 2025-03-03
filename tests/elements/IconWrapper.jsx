/**
 * The icon element is a container for any type of icon font.
 * By default, the icon container will take up exactly 1.5rem x 1.5rem of space.
 *
 * @param {React.ReactNode} props.children - The content (<i />) to be wrapped inside the span .
 * @param {string} [props.className] - Additional class names to apply to the span.
 *
 * @returns {JSX.Element} The rendered span element with the combined classes and children.
 */

export default function IconWrapper({
	as: Component = "span",
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	return (
		<Component className={`icon ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
