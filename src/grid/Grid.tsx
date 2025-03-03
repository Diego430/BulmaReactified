import React, { ElementType, ReactNode } from "react";

interface GridProps {
	/**
	 * The element type to render
	 *
	 * @type {ElementType}
	 * @example
	 * <Grid as="section" />
	 */
	as?: ElementType;

	/**
	 * The minimum number of columns
	 *
	 * @type {number}
	 * @example
	 * <Grid colMin={6} />
	 */
	colMin?: number;

	/**
	 * The gap between columns
	 *
	 * @type {number}
	 * @example
	 * <Grid gap={4} />
	 */
	gap?: number;

	/**
	 * The gap between columns
	 *
	 * @type {number}
	 * @example
	 * <Grid columnGap={4} />
	 */
	columnGap?: number;

	/**
	 * The gap between columns
	 *
	 * @type {number}
	 * @example
	 * <Grid rowGap={4} />
	 */
	rowGap?: number;

	/**
	 * The class name of the component
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * The content of the component
	 *
	 * @type {ReactNode}
	 */
	children?: ReactNode;

	/**
	 * Additional props
	 */
	[propName: string]: any;
}

const Grid: React.FC<GridProps> = ({
	as: Component = "div",
	colMin,
	gap,
	columnGap,
	rowGap,
	className = "",
	children,
	...props
}) => {
	const bulmaClasses: string[] = [];

	//* COL-MIN
	if (colMin !== undefined) {
		if (colMin >= 0 && colMin <= 32) bulmaClasses.push(`is-col-min-${colMin}`);
		else console.warn("colMin must be between 0 and 32");
	}

	//* GAP
	if (gap !== undefined) {
		if (gap >= 0 && gap <= 8) bulmaClasses.push(`is-gap-${gap}`);
		else console.warn("gap must be between 0 and 8");
	}

	//* COLUMN-GAP
	if (columnGap !== undefined) {
		if (columnGap >= 0 && columnGap <= 8) bulmaClasses.push(`is-column-gap-${columnGap}`);
		else console.warn("columnGap must be between 0 and 8");
	}

	//* ROW-GAP
	if (rowGap !== undefined) {
		if (rowGap >= 0 && rowGap <= 8) bulmaClasses.push(`is-row-gap-${rowGap}`);
		else console.warn("rowGap must be between 0 and 8");
	}

	return (
		<Component
			className={`grid ${className} ${bulmaClasses.join(" ")}`}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Grid;
