import React, { ElementType, ReactNode } from "react";
import { Responsiveness } from "../types";

interface ColProps {
	/**
	 * The element type to render
	 *
	 * @type {ElementType}
	 * @example
	 * <Col as="section" />
	 */
	as?: ElementType;

	/**
	 * The size of the column
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Col size={6} />
	 * <Col size={{ mobile: 6, tablet: 4, desktop: 3 }} />
	 */
	size?: number | Responsiveness;

	/**
	 * The offset of the column
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Col offset={2}></Col>
	 * <Col offset={{ mobile: 2, tablet: 4, desktop: 6 }}></Col>
	 */
	offset?: number | Responsiveness;

	/**
	 * To force a column to only take the space it needs.
	 *
	 * @type {number}
	 * @example
	 * <Col mobile={6} />
	 */
	narrow?: boolean;

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
	[prop: string]: any;
}

const Col: React.FC<ColProps> = ({
	as: Component = "div",
	size,
	offset,
	narrow,
	children,
	className = "",
	...props
}) => {
	const bulmaClasses: string[] = [];

	//* SIZE
	if (typeof size === "number") {
		if (size >= 0 && size <= 12) bulmaClasses.push(`is-${size}`);
		else console.warn("Size must be between 0 and 12");
	} else if (typeof size === "object") {
		if (size.mobile) {
			if (size.mobile >= 0 && size.mobile <= 12) bulmaClasses.push(`is-${size.mobile}-mobile`);
			else console.warn("Size in mobile must be between 0 and 12");
		}
		if (size.tablet) {
			if (size.tablet >= 0 && size.tablet <= 12) bulmaClasses.push(`is-${size.tablet}-tablet`);
			else console.warn("Size in tablet must be between 0 and 12");
		}
		if (size.desktop) {
			if (size.desktop >= 0 && size.desktop <= 12) bulmaClasses.push(`is-${size.desktop}-desktop`);
			else console.warn("Size in desktop must be between 0 and 12");
		}
		if (size.widescreen) {
			if (size.widescreen >= 0 && size.widescreen <= 12)
				bulmaClasses.push(`is-${size.widescreen}-widescreen`);
			else console.warn("Size in widescreen must be between 0 and 12");
		}
		if (size.fullhd) {
			if (size.fullhd >= 0 && size.fullhd <= 12) bulmaClasses.push(`is-${size.fullhd}-fullhd`);
			else console.warn("Size in fullhd must be between 0 and 12");
		}
	}

	//* OFFSET
	if (typeof offset === "number") {
		if (offset >= 0 && offset <= 12) bulmaClasses.push(`is-offset-${offset}`);
		else console.warn("Offset must be between 0 and 12");
	} else if (typeof offset === "object") {
		if (offset.mobile) {
			if (offset.mobile >= 0 && offset.mobile <= 12)
				bulmaClasses.push(`is-offset-${offset.mobile}-mobile`);
			else console.warn("Offset in mobile must be between 0 and 12");
		}
		if (offset.tablet) {
			if (offset.tablet >= 0 && offset.tablet <= 12)
				bulmaClasses.push(`is-offset-${offset.tablet}-tablet`);
			else console.warn("Offset in tablet must be between 0 and 12");
		}
		if (offset.desktop) {
			if (offset.desktop >= 0 && offset.desktop <= 12)
				bulmaClasses.push(`is-offset-${offset.desktop}-desktop`);
			else console.warn("Offset in desktop must be between 0 and 12");
		}
		if (offset.widescreen) {
			if (offset.widescreen >= 0 && offset.widescreen <= 12)
				bulmaClasses.push(`is-offset-${offset.widescreen}-widescreen`);
			else console.warn("Offset in widescreen must be between 0 and 12");
		}
		if (offset.fullhd) {
			if (offset.fullhd >= 0 && offset.fullhd <= 12)
				bulmaClasses.push(`is-offset-${offset.fullhd}-fullhd`);
			else console.warn("Offset in fullhd must be between 0 and 12");
		}
	}

	//* IS NARROW
	if (narrow) bulmaClasses.push("is-narrow");

	return (
		<Component
			className={`column ${bulmaClasses.join(" ")} ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Col;
