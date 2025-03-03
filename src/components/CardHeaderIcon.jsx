export default function CardHeaderIcon({
	as: Component = "span",
	children,
	className = "",
	...props
}) {
	return (
		<Component className={`card-header-icon ${className}`} {...props}>
			{children}
		</Component>
	);
}
