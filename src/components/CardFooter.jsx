export default function CardFooter({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`card-footer ${className}`} {...props}>
			{children}
		</Component>
	);
}
