"use client";

/**
 * The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the button.
 * @param {function} [props.onClick] - The function to be called when the button is clicked.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {string} [props.color] - The color of the button. Can be "white", "light", "dark", "black", "text", or "ghost".
 * @param {string} [props.variant] - The variant of the button. Can be "primary", "link", "info", "success", "warning", or "danger".
 * @param {string} [props.size] - The size of the button. Can be "small", "normal", "medium", or "large".
 * @param {boolean} [props.dark] - If true, applies the dark theme to the button.
 * @param {boolean} [props.responsive] - If true, makes the button responsive.
 * @param {boolean} [props.isFullWidth] - If true, makes the button full width.
 * @param {boolean} [props.isOutlined] - If true, applies the outlined style to the button.
 * @param {boolean} [props.isInverted] - If true, applies the inverted style to the button.
 * @param {boolean} [props.isRounded] - If true, makes the button rounded.
 * @param {boolean} [props.isHovered] - If true, applies the hovered style to the button.
 * @param {boolean} [props.isFocused] - If true, applies the focused style to the button.
 * @param {boolean} [props.active] - If true, applies the active style to the button.
 * @param {boolean} [props.isLoading] - If true, shows a loading spinner inside the button.
 * @param {boolean} [props.isStatic] - If true, makes the button static.
 * @param {boolean} [props.disabled] - If true, disables the button.
 * @param {Object} [props.props] - Additional properties to be passed to the button element.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({
	as: Component = "button",
	children,
	onClick = () => {},
	className = "",
	color,
	variant,
	size,
	dark,
	responsive,
	isFullWidth,
	isOutlined,
	isInverted,
	isRounded,
	isHovered,
	isFocused,
	active,
	isLoading,
	isStatic,
	disabled,
	...props
}) {
	const bulmaClasses = [];

	//* COLOR
	switch (color) {
		case "white":
			bulmaClasses.push("is-white");
			break;
		case "light":
			bulmaClasses.push("is-light");
			break;
		case "dark":
			bulmaClasses.push("is-dark");
			break;
		case "black":
			bulmaClasses.push("is-black");
			break;
		case "text":
			bulmaClasses.push("is-text");
			break;
		case "ghost":
			bulmaClasses.push("is-ghost");
			break;
		default:
			break;
	}

	//* VARIANT
	switch (variant) {
		case "primary":
			bulmaClasses.push("is-primary");
			break;
		case "link":
			bulmaClasses.push("is-link");
			break;
		case "info":
			bulmaClasses.push("is-info");
			break;
		case "success":
			bulmaClasses.push("is-success");
			break;
		case "warning":
			bulmaClasses.push("is-warning");
			break;
		case "danger":
			bulmaClasses.push("is-danger");
			break;
		default:
			break;
	}

	//* SIZE
	switch (size) {
		case "small":
			bulmaClasses.push("is-small");
			break;
		case "normal":
			break;
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
		default:
			break;
	}

	//* DARK THEME
	if (dark) bulmaClasses.push("is-dark");

	//* RESPONSIVE
	if (responsive) bulmaClasses.push("is-fullwidth");

	//* FULLWIDTH
	if (isFullWidth) bulmaClasses.push("is-fullwidth");

	//* OUTLINED
	if (isOutlined) bulmaClasses.push("is-outlined");

	//* INVERTED
	if (isInverted) bulmaClasses.push("is-inverted");

	//* ROUNDED
	if (isRounded) bulmaClasses.push("is-rounded");

	//* HOVERED
	if (isHovered) bulmaClasses.push("is-hovered");

	//* FOCUSED
	if (isFocused) bulmaClasses.push("is-focused");

	//* ACTIVE
	if (active) bulmaClasses.push("is-active");

	//* LOADING
	if (isLoading) bulmaClasses.push("is-loading");

	//* STATIC
	if (isStatic) bulmaClasses.push("is-static");

	return (
		<Component
			className={`button ${bulmaClasses.join(" ")} ${className}`}
			onClick={onClick}
			disabled={disabled}
			{...props}
		>
			{children}
		</Component>
	);
}
