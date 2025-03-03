export default function CardHeaderTitle({
	as: Component = "p",
	children,
	className = "",
	...props
}) {
	return (
		<Component className={`card-header-title ${className}`} {...props}>
			{children}
		</Component>
	);
}
