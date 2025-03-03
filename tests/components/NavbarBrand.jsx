export default function NavbarBrand({ as: Component = "div", className = "", children, ...props }) {
	return (
		<Component className={`navbar-brand ${className}`} {...props}>
			{children}
		</Component>
	);
}
