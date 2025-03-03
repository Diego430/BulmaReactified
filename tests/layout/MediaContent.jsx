export default function MediaContent({ as: Component = "div", className, children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`media-content ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
