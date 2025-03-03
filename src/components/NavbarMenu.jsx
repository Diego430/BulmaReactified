import { useNavbarMenu } from "./NavbarMenuContext";

export default function NavbarMenu({ as: Component = "div", className = "", children, ...props }) {
	const { isActive } = useNavbarMenu();
	const bulmaClasses = [];

	if (isActive) bulmaClasses.push("is-active");

	return (
		<Component className={`navbar-menu ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
