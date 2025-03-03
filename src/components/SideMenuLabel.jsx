export default function SideMenuLabel({ as: Component = "p", className = "", children, ...props }) {
	return (
		<Component className={`menu-label ${className}`} {...props}>
			{children}
		</Component>
	);
}
