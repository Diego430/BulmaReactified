export default function NavbarLink({ as: Component = "a", className = "", children, ...props }) {
	return (
		<Component className={`navbar-link ${className}`} {...props}>
			{children}
		</Component>
	);
}
