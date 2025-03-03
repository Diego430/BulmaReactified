export default function SideMenuListItem({ as: Component = "li", children, ...props }) {
	return <Component {...props}>{children}</Component>;
}
