export default function FormField({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`field ${className}`} {...props}>
			{children}
		</Component>
	);
}
