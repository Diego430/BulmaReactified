export default function MediaRight({ as: Component = "div", className, children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`media-right ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
