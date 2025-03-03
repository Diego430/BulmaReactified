export default function CardContent({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`card-content ${className}`} {...props}>
			{children}
		</Component>
	);
}
