export default function ModalContent({
	as: Component = "div",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-content ${className}`} {...props}>
			{children}
		</Component>
	);
}
