export default function PanelTab({ as: Component = "a", children, ...props }) {
	return <Component {...props}>{children}</Component>;
}
