export default function PaginationNext({
	as: Component = "a",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`pagination-next ${className}`} {...props}>
			{children}
		</Component>
	);
}
