import React, { ElementType, ReactNode } from "react";
import { Responsiveness } from "../types";

interface CellProps {
	/**
	 * The element type to render
	 *
	 * @type {ElementType}
	 * @example
	 * <Cell as="section" />
	 */
	as?: ElementType;

	/**
	 * The column order position from start
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell colFromStart={6} />
	 * <Cell colFromStart={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	colFromStart?: number | Responsiveness;

	/**
	 * The column order position from end
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell colFromEnd={6} />
	 * <Cell colFromEnd={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	colFromEnd?: number | Responsiveness;

	/**
	 * The row order position from start
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell rowFromStart={6} />
	 * <Cell rowFromStart={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	rowFromStart?: number | Responsiveness;

	/**
	 * The row order position from end
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell rowFromEnd={6} />
	 * <Cell rowFromEnd={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	rowFromEnd?: number | Responsiveness;

	/**
	 * The number of columns to span
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell colSpan={6} />
	 * <Cell colSpan={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	colSpan?: number | Responsiveness;

	/**
	 * The number of rows to span
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cell rowSpan={6} />
	 * <Cell rowSpan={{ mobile: 6, tablet: 4, desktop: 2 }} />
	 */
	rowSpan?: number | Responsiveness;

	/**
	 * The class name of the component
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * The children of the component
	 *
	 * @type {ReactNode}
	 */
	children?: ReactNode;

	/**
	 * The rest of the props
	 */
	[key: string]: any;
}

export default function Cell({
	as: Component = "div",
	colFromStart,
	colFromEnd,
	rowFromStart,
	rowFromEnd,
	colSpan,
	rowSpan,
	className = "",
	children,
	...props
}: CellProps) {
	const bulmaClasses: string[] = [];

	const addClass = (prefix: string, value: number | undefined, suffix: string = "") => {
		if (value !== undefined && !isNaN(value)) {
			if (value >= 0 && value <= 12) {
				bulmaClasses.push(`${prefix}-${value}${suffix}`);
			} else {
				console.warn(`${prefix} must be between 0 and 12`);
			}
		}
	};

	const addResponsiveClasses = (prefix: string, values: any) => {
		if (typeof values === "object") {
			addClass(prefix, values.mobile, "-mobile");
			addClass(prefix, values.tablet, "-tablet");
			addClass(prefix, values.desktop, "-desktop");
			addClass(prefix, values.widescreen, "-widescreen");
			addClass(prefix, values.fullhd, "-fullhd");
		} else {
			addClass(prefix, values);
		}
	};

	addResponsiveClasses("is-col-from-start", colFromStart);
	addResponsiveClasses("is-col-from-end", colFromEnd);
	addResponsiveClasses("is-row-from-start", rowFromStart);
	addResponsiveClasses("is-row-from-end", rowFromEnd);
	addResponsiveClasses("is-col-span", colSpan);
	addResponsiveClasses("is-row-span", rowSpan);

	return (
		<Component
			className={`cell ${bulmaClasses.join(" ")} ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
}
