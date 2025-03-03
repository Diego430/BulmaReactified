export default function SideMenuList({ as: Component = "ul", className = "", children, ...props }) {
	return (
		<Component className={`menu-list ${className}`} {...props}>
			{children}
		</Component>
	);
}
