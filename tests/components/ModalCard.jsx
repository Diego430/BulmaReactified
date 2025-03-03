export default function ModalCard({ as: Component = "div", className = "", children, ...props }) {
	return (
		<Component className={`modal-card ${className}`} {...props}>
			{children}
		</Component>
	);
}
