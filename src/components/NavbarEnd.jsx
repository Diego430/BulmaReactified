export default function NavbarEnd({ as: Component = "div", className = "", children, ...props }) {
	return (
		<Component className={`navbar-end ${className}`} {...props}>
			{children}
		</Component>
	);
}
