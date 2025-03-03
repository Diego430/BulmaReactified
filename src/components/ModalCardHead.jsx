export default function ModalCardHead({
	as: Component = "header",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-card-head ${className}`} {...props}>
			{children}
		</Component>
	);
}
