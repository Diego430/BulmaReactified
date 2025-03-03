import DeleteButton from "../elements/DeleteButton";

export default function MessageHeader({
	as: Component = "div",
	hasDelete,
	className = "",
	children,
	...props
}) {
	return (
		<Component className={`message-header ${className}`} {...props}>
			{children}
			{hasDelete && <DeleteButton />}
		</Component>
	);
}
