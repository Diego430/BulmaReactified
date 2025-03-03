export function TabsItem({ as: Component = "a", active, className = "", children, ...props }) {
	const bulmaClasses = [];

	//* IS ACTIVE
	if (active) bulmaClasses.push("is-active");

	return (
		<li className={bulmaClasses.join(" ")}>
			<Component className={`${className}`} {...props}>
				{children}
			</Component>
		</li>
	);
}
