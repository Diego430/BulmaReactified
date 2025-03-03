export default function ModalCardFoot({
	as: Component = "footer",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-card-foot ${className}`} {...props}>
			{children}
		</Component>
	);
}
