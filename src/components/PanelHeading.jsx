export default function PanelHeading({ as: Component = "p", className = "", children, ...props }) {
	return (
		<Component className={`panel-heading ${className}`} {...props}>
			{children}
		</Component>
	);
}
