export default function FormCheckbox({
	as: Component = "input",
	wrapperAs: WrapperComponent = "label",
	wrapperClassName = "",
	wrapperProps = {},
	children,
	checkboxPosition = "left",
	className = "",
	disabled,
	...props
}) {
	const component = (
		<Component className={`${className}`} type="checkbox" disabled={disabled} {...props} />
	);

	return (
		<WrapperComponent
			className={`checkbox ${wrapperClassName}`}
			disabled={disabled}
			{...wrapperProps}
		>
			{checkboxPosition === "left" && component}
			{children}
			{checkboxPosition === "right" && component}
		</WrapperComponent>
	);
}
