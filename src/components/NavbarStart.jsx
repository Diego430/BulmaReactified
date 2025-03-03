export default function NavbarStart({ as: Component = "div", className = "", children, ...props }) {
	return (
		<Component className={`navbar-start ${className}`} {...props}>
			{children}
		</Component>
	);
}
