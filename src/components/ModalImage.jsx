export default function ModalImage({ as: Component = "p", className = "", children, ...props }) {
	return (
		<Component className={`modal-image ${className}`} {...props}>
			{children}
		</Component>
	);
}
