export default function PanelIcon({ as: Component = "span", className = "", children, ...props }) {
	return (
		<Component className={`panel-icon ${className}`} {...props}>
			{children}
		</Component>
	);
}
