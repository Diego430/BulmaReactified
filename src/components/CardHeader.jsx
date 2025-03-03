export default function CardHeader({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`card-header ${className}`} {...props}>
			{children}
		</Component>
	);
}
