/**
 * Table component to render a table with Bulma CSS classes.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.isBordered] - If true, adds the "is-bordered" class.
 * @param {boolean} [props.isStriped] - If true, adds the "is-striped" class.
 * @param {boolean} [props.isNarrow] - If true, adds the "is-narrow" class.
 * @param {boolean} [props.isHoverable] - If true, adds the "is-hoverable" class.
 * @param {boolean} [props.isFullWidth] - If true, adds the "is-fullwidth" class.
 * @param {React.ReactNode} props.children - The content of the table.
 * @param {string} [props.className=""] - Additional custom class names.
 *
 * @returns {JSX.Element} The rendered table component.
 */
export default function Table({
	as: Component = "table",
	isBordered,
	isStriped,
	isNarrow,
	isHoverable,
	isFullWidth,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* IS BORDERED
	if (isBordered) bulmaClasses.push("is-bordered");

	//* IS STRIPED
	if (isStriped) bulmaClasses.push("is-striped");

	//* IS NARROW
	if (isNarrow) bulmaClasses.push("is-narrow");

	//* IS HOVERABLE
	if (isHoverable) bulmaClasses.push("is-hoverable");

	//* IS FULL WIDTH
	if (isFullWidth) bulmaClasses.push("is-fullwidth");

	return (
		<Component className={`table ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
