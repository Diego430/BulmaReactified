export default function MediaLeft({ as: Component = "div", className, children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`media-left ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
