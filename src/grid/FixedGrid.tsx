import React, { ElementType, ReactNode } from "react";
import { Responsiveness } from "../types";

interface FixedGridProps {
	/**
	 * The element type to render
	 *
	 * @type {ElementType}
	 * @example
	 * <FixedGrid as="section" />
	 */
	as?: ElementType;

	/**
	 * The element type to wrap the grid
	 *
	 * @type {ElementType}
	 * @example
	 * <FixedGrid wrapperAs="section" />
	 */
	wrapperAs?: ElementType;

	/**
	 * The number of columns
	 *
	 * @type {number | "auto" | Responsiveness}
	 * @example
	 * <FixedGrid cols={6} />
	 * <FixedGrid cols="auto" />
	 * <FixedGrid cols={{ mobile: 6, tablet: 4, desktop: 3 }} />
	 */
	cols?: number | "auto" | Responsiveness;

	/**
	 * The class name of the component
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * The class name of the wrapper component
	 *
	 * @type {string}
	 */
	wrapperClassName?: string;

	/**
	 * The content of the component
	 *
	 * @type {ReactNode}
	 * @example
	 * <FixedGrid>...</FixedGrid>
	 * <FixedGrid>
	 * 	<Cell>...</Cell>
	 * 	<Cell>...</Cell>
	 * </FixedGrid>
	 */
	children?: ReactNode;

	/**
	 * Additional props
	 */
	[key: string]: any;
}

export default function FixedGrid({
	as: Component = "div",
	wrapperAs: WrapperComponent = "div",
	cols,
	className = "",
	wrapperClassName = "",
	children,
	...props
}: FixedGridProps) {
	const bulmaClasses: string[] = [];

	//* COLS
	if (typeof cols === "number") {
		if (cols >= 0 && cols <= 12) bulmaClasses.push(`has-${cols}-cols`);
		else if (!!cols) console.warn("cols must be between 0 and 12");
	} else if (cols === "auto") {
		bulmaClasses.push(`has-auto-cols`);
	} else if (typeof cols === "object") {
		//* RESPONSIVENESS
		if (typeof cols.mobile === "number") {
			if (cols.mobile >= 0 && cols.mobile <= 12)
				bulmaClasses.push(`has-${cols.mobile}-cols-mobile`);
			else if (!!cols.mobile) console.warn("cols.mobile must be between 0 and 12");
		}
		if (typeof cols.tablet === "number") {
			if (cols.tablet >= 0 && cols.tablet <= 12)
				bulmaClasses.push(`has-${cols.tablet}-cols-tablet`);
			else if (!!cols.tablet) console.warn("cols.tablet must be between 0 and 12");
		}
		if (typeof cols.desktop === "number") {
			if (cols.desktop >= 0 && cols.desktop <= 12)
				bulmaClasses.push(`has-${cols.desktop}-cols-desktop`);
			else if (!!cols.desktop) console.warn("cols.desktop must be between 0 and 12");
		}
		if (typeof cols.widescreen === "number") {
			if (cols.widescreen >= 0 && cols.widescreen <= 12)
				bulmaClasses.push(`has-${cols.widescreen}-cols-widescreen`);
			else if (!!cols.widescreen) console.warn("cols.widescreen must be between 0 and 12");
		}
		if (typeof cols.fullhd === "number") {
			if (cols.fullhd >= 0 && cols.fullhd <= 12)
				bulmaClasses.push(`has-${cols.fullhd}-cols-fullhd`);
			else if (!!cols.fullhd) console.warn("cols.fullhd must be between 0 and 12");
		}
	}

	return (
		<WrapperComponent className={`fixed-grid ${bulmaClasses.join(" ")} ${wrapperClassName}`}>
			<Component
				className={`grid ${className}`}
				{...props}
			>
				{children}
			</Component>
		</WrapperComponent>
	);
}
