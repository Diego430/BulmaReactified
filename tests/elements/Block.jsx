/**
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent margin between them.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the block.
 * @param {string} [props.className] - Additional class names to apply to the block.
 *
 * @returns {JSX.Element} The rendered block element.
 */
export default function Block({ as: Component = "div", children, className = "", ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`block ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
