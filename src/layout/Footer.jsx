export default function Container({ as: Component = "footer", className, children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`footer ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
