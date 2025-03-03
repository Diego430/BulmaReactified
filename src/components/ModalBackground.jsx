export default function ModalBackground({
	as: Component = "div",
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`modal-background ${className}`} {...props}>
			{children}
		</Component>
	);
}
