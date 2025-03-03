export default function FormRadio({
	as: Component = "input",
	wrapperAs: WrapperComponent = "label",
	wrapperClassName = "",
	wrapperProps = {},
	children,
	radioPosition = "left",
	className = "",
	disabled,
	name,
	...props
}) {
	const component = (
		<Component className={`${className}`} type="radio" disabled={disabled} name={name} {...props} />
	);

	return (
		<WrapperComponent className={`radio ${wrapperClassName}`} disabled={disabled} {...wrapperProps}>
			{radioPosition === "left" && component}
			{children}
			{radioPosition === "right" && component}
		</WrapperComponent>
	);
}
