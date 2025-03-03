export default function NavbarDivider({ className = "", ...props }) {
	return <hr className={`navbar-divider ${className}`} {...props} />;
}
