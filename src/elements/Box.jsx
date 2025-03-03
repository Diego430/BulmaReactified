/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the box.
 * @param {string} [props.className] - Additional class names to apply to the box.
 *
 * @returns {JSX.Element} The rendered Bulma box component.
 */
export default function Box({ as: Component = "div", children, className = "", ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`box ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
