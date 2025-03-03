import { useNavbarMenu } from "./NavbarMenuContext";

export default function NavbarBurger({
	as: Component = "a",
	onClick = () => {},
	className = "",
	children,
	...props
}) {
	const { isActive, setIsActive } = useNavbarMenu();
	const bulmaClasses = [];

	if (isActive) bulmaClasses.push("is-active");

	if (!children)
		return (
			<Component
				role="button"
				className={`navbar-burger ${bulmaClasses.join(" ")} ${className}`}
				aria-label="menu"
				aria-expanded="false"
				onClick={(e) => {
					setIsActive(!isActive);
					onClick(e);
				}}
				{...props}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</Component>
		);
	else
		return (
			<Component
				role="button"
				className={`navbar-burger ${className}`}
				aria-label="menu"
				aria-expanded="false"
				{...props}
			>
				{children}
			</Component>
		);
}
