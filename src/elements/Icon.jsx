import IconWrapper from "./IconWrapper";

/**
 * The icon element contains an icon font that can be styled and positioned. Uses the IconWrapper component to render the icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The class name for the icon to be rendered.
 * @param {string} [props.className] - Additional class names to be added to the IconWrapper.
 *
 * @returns {JSX.Element} The rendered Icon component.
 */
export default function Icon({ as: Component = "span", icon, className = "", ...props }) {
	delete props.children;
	return (
		<IconWrapper as={Component} className={`icon ${className}`} {...props}>
			<i className={icon} />
		</IconWrapper>
	);
}
