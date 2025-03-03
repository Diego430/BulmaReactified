export default function PaginationPrev({
	as: Component = "a",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`pagination-previous ${className}`} {...props}>
			{children}
		</Component>
	);
}
