export default function CardImage({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`card-image ${className}`} {...props}>
			{children}
		</Component>
	);
}
