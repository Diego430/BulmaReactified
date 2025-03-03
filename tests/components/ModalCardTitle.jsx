export default function ModalCardTitle({
	as: Component = "p",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-card-title ${className}`} {...props}>
			{children}
		</Component>
	);
}
