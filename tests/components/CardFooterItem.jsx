export default function CardFooterItem({
	as: Component = "div",
	children,
	className = "",
	...props
}) {
	return (
		<Component className={`card-footer-item ${className}`} {...props}>
			{children}
		</Component>
	);
}
