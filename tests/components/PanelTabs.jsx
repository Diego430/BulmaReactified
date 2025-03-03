export default function PanelTabs({ as: Component = "p", className = "", children, ...props }) {
	return (
		<Component className={`panel-tabs ${className}`} {...props}>
			{children}
		</Component>
	);
}
