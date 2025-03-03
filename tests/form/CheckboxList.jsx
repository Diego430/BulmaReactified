export default function CheckboxList({
	as: Component = "div",
	children,
	className = "",
	...props
}) {
	return (
		<Component className={`checkboxes ${className}`} {...props}>
			{children}
		</Component>
	);
}
