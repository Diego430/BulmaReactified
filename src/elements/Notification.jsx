import DeleteButton from "./DeleteButton";

/**
 * Bold notification blocks, to alert your users of something.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the notification.
 * @param {string} props.variant - The variant of the notification. Can be one of "primary", "link", "info", "success", "warning", or "danger".
 * @param {boolean} props.isLight - If true, applies the "is-light" style to the notification.
 * @param {string} props.className - Additional class names to apply to the notification.
 *
 * @returns {JSX.Element} The rendered notification component.
 */
export default function Notification({
	as: Component = "div",
	children,
	variant,
	isLight,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* VARIANT
	var variant;
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

	//* IS LIGHT
	if (isLight) bulmaClasses.push("is-light");

	return (
		<Component className={`notification pr-3 ${bulmaClasses.join(" ")} ${className}`} {...props}>
			<DeleteButton />
			{children}
		</Component>
	);
}
