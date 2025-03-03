export default function MessageBody({ as: Component = "div", className = "", children, ...props }) {
	return (
		<Component className={`message-body ${className}`} {...props}>
			{children}
		</Component>
	);
}
