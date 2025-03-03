import { TabsItem } from "./TabsItem";

function Tabs({
	as: Component = "div",
	align,
	size,
	isFullWidth,
	variant,
	className = "",
	children,
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

	//* IS FULL WIDTH
	if (isFullWidth) bulmaClasses.push("is-fullwidth");

	//* VARIANT
	switch (variant) {
		case "boxed":
			bulmaClasses.push("is-boxed");
			break;
		case "toggle":
			bulmaClasses.push("is-toggle");
			break;
		case "toggle-rounded":
			bulmaClasses.push("is-toggle is-toggle-rounded");
			break;
	}

	return (
		<Component className={`tabs ${bulmaClasses.join(" ")} ${className}`} {...props}>
			<ul>{children}</ul>
		</Component>
	);
}

export default Object.assign(Tabs, {
	Tab: TabsItem,
});
