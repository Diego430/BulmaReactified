export default function ModalClose({
	as: Component = "button",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-close ${className}`} {...props}>
			{children}
		</Component>
	);
}
