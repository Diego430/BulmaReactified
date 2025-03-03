import { useNavbarDropdown } from "./NavbarDropdownContext";

export default function NavbarDropdownToggle({
	as: Component = "div",
	dropdownHoverable,
	onClick = () => {},
	className = "",
	children,
	...props
}) {
	const { isActive, setIsActive } = useNavbarDropdown();

	return (
		<Component
			className={`navbar-link ${className}`}
			onClick={(e) => {
				setIsActive(!isActive);
				onClick(e);
			}}
			{...props}
		>
			{children}
		</Component>
	);
}
