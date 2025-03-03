/**
 * Breadcrumbs component for rendering breadcrumb navigation with Bulma classes.
 *
 * @param {Object} props - The properties object.
 * @param {React.ElementType} [props.as="nav"] - The component type to render as.
 * @param {string} [props.align] - The alignment of the breadcrumbs. Options: "center", "right".
 * @param {string} [props.separator] - The separator style of the breadcrumbs. Options: "arrow", "bullet", "dot", "succeeds".
 * @param {string} [props.size] - The size of the breadcrumbs. Options: "small", "medium", "large".
 * @param {React.ReactNode} props.children - The breadcrumb items to render.
 * @param {string} [props.className=""] - Additional class names to apply to the component.
 *
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 */

function Breadcrumbs({
	as: Component = "nav",
	align,
	separator,
	size,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* ALIGN
	switch (align) {
		case "center":
			bulmaClasses.push("is-centered");
			break;
		case "right":
			bulmaClasses.push("is-right");
			break;
	}

	//* SEPARATOR
	switch (separator) {
		case "arrow":
			bulmaClasses.push("has-arrow-separator");
			break;
		case "bullet":
			bulmaClasses.push("has-bullet-separator");
			break;
		case "dot":
			bulmaClasses.push("has-dot-separator");
			break;
		case "succeeds":
			bulmaClasses.push("has-succeeds-separator");
			break;
	}

	//* SIZE
	switch (size) {
		case "small":
			bulmaClasses.push("is-small");
			break;
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
	}

	return (
		<Component
			className={`breadcrumb ${bulmaClasses.join(" ")} ${className}`}
			{...props}
			aria-label="breadcrumbs"
		>
			<ul>{children}</ul>
		</Component>
	);
}

/**
 * BreadcrumbItem component renders a breadcrumb item with optional active state.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.as="li"] - The HTML element or React component to render as the breadcrumb item.
 * @param {boolean} [props.active] - If true, applies the "is-active" class to the breadcrumb item.
 * @param {React.ReactNode} props.children - The content to be rendered inside the breadcrumb item.
 * @param {string} [props.className=""] - Additional class names to apply to the breadcrumb item.
 *
 * @returns {JSX.Element} The rendered breadcrumb item.
 */

function BreadcrumbsItem({ href, active, children, className = "", ...props }) {
	const bulmaClasses = [];

	if (active) bulmaClasses.push("is-active");

	return (
		<li className={`${bulmaClasses.join(" ")} ${className}`} {...props}>
			<a href={href}>{children}</a>
		</li>
	);
}

export default Object.assign(Breadcrumbs, {
	Item: BreadcrumbsItem,
});
