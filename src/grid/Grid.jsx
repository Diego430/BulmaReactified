export default function Grid({
	as: Component = "div",
	colMin,
	gap,
	columnGap,
	rowGap,
	className = "",
	children,
	...props
}) {
	const bulmaClasses = [];

	//* COL-MIN
	if (colMin >= 0 && colMin <= 32) bulmaClasses.push(`is-col-min-${colMin}`);
	else if (!!colMin) console.warn("colMin must be between 0 and 32");

	// gap, column-gap and/or row-gap
	//* GAP
	if (gap >= 0 && gap <= 8) bulmaClasses.push(`is-gap-${gap}`);
	else if (!!gap) console.warn("gap must be between 0 and 8");

	//* COLUMN-GAP
	if (columnGap >= 0 && columnGap <= 8) bulmaClasses.push(`is-column-gap-${columnGap}`);
	else if (!!columnGap) console.warn("columnGap must be between 0 and 8");

	//* ROW-GAP
	if (rowGap >= 0 && rowGap <= 8) bulmaClasses.push(`is-row-gap-${rowGap}`);
	else if (!!rowGap) console.warn("rowGap must be between 0 and 8");

	return (
		<Component className={`grid ${className}`} {...props}>
			{children}
		</Component>
	);
}
