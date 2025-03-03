export default function ModalCardBody({
	as: Component = "div",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-card-body ${className}`} {...props}>
			{children}
		</Component>
	);
}
