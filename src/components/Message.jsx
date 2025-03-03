import MessageBody from "./MessageBody";
import MessageHeader from "./MessageHeader";

function Message({ as: Component = "aside", className = "", children, ...props }) {
	return (
		<Component className={`message ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Message, {
	Header: MessageHeader,
	Body: MessageBody,
});
