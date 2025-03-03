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
}) {
	const bulmaClasses = [];

	//* COL-FROM-START
	// if colFromStart can be converted as int or is int
	if (!isNaN(colFromStart)) {
		if (colFromStart >= 0 && colFromStart <= 12)
			bulmaClasses.push(`is-col-from-start-${colFromStart}`);
		else if (!!colFromStart) console.warn("colFromStart must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(colFromStart?.mobile)) {
			if (colFromStart.mobile >= 0 && colFromStart.mobile <= 12)
				bulmaClasses.push(`is-col-from-start-${colFromStart.mobile}-mobile`);
			else if (!!colFromStart.mobile) console.warn("colFromStart.mobile must be between 0 and 12");
		}
		if (!isNaN(colFromStart?.tablet)) {
			if (colFromStart.tablet >= 0 && colFromStart.tablet <= 12)
				bulmaClasses.push(`is-col-from-start-${colFromStart.tablet}-tablet`);
			else if (!!colFromStart.tablet) console.warn("colFromStart.tablet must be between 0 and 12");
		}
		if (!isNaN(colFromStart?.desktop)) {
			if (colFromStart.desktop >= 0 && colFromStart.desktop <= 12)
				bulmaClasses.push(`is-col-from-start-${colFromStart.desktop}-desktop`);
			else if (!!colFromStart.desktop)
				console.warn("colFromStart.desktop must be between 0 and 12");
		}
		if (!isNaN(colFromStart?.widescreen)) {
			if (colFromStart.widescreen >= 0 && colFromStart.widescreen <= 12)
				bulmaClasses.push(`is-col-from-start-${colFromStart.widescreen}-widescreen`);
			else if (!!colFromStart.widescreen)
				console.warn("colFromStart.widescreen must be between 0 and 12");
		}
		if (!isNaN(colFromStart?.fullhd)) {
			if (colFromStart.fullhd >= 0 && colFromStart.fullhd <= 12)
				bulmaClasses.push(`is-col-from-start-${colFromStart.fullhd}-fullhd`);
			else if (!!colFromStart.fullhd) console.warn("colFromStart.fullhd must be between 0 and 12");
		}
	}

	//* COL-FROM-END
	if (!isNaN(colFromEnd)) {
		if (colFromEnd >= 0 && colFromEnd <= 12) bulmaClasses.push(`is-col-from-end-${colFromEnd}`);
		else if (!!colFromEnd) console.warn("colFromEnd must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(colFromEnd?.mobile)) {
			if (colFromEnd.mobile >= 0 && colFromEnd.mobile <= 12)
				bulmaClasses.push(`is-col-from-end-${colFromEnd.mobile}-mobile`);
			else if (!!colFromEnd.mobile) console.warn("colFromEnd.mobile must be between 0 and 12");
		}
		if (!isNaN(colFromEnd?.tablet)) {
			if (colFromEnd.tablet >= 0 && colFromEnd.tablet <= 12)
				bulmaClasses.push(`is-col-from-end-${colFromEnd.tablet}-tablet`);
			else if (!!colFromEnd.tablet) console.warn("colFromEnd.tablet must be between 0 and 12");
		}
		if (!isNaN(colFromEnd?.desktop)) {
			if (colFromEnd.desktop >= 0 && colFromEnd.desktop <= 12)
				bulmaClasses.push(`is-col-from-end-${colFromEnd.desktop}-desktop`);
			else if (!!colFromEnd.desktop) console.warn("colFromEnd.desktop must be between 0 and 12");
		}
		if (!isNaN(colFromEnd?.widescreen)) {
			if (colFromEnd.widescreen >= 0 && colFromEnd.widescreen <= 12)
				bulmaClasses.push(`is-col-from-end-${colFromEnd.widescreen}-widescreen`);
			else if (!!colFromEnd.widescreen)
				console.warn("colFromEnd.widescreen must be between 0 and 12");
		}
		if (!isNaN(colFromEnd?.fullhd)) {
			if (colFromEnd.fullhd >= 0 && colFromEnd.fullhd <= 12)
				bulmaClasses.push(`is-col-from-end-${colFromEnd.fullhd}-fullhd`);
			else if (!!colFromEnd.fullhd) console.warn("colFromEnd.fullhd must be between 0 and 12");
		}
	}

	//* ROW-FROM-START
	if (!isNaN(rowFromStart)) {
		if (rowFromStart >= 0 && rowFromStart <= 12)
			bulmaClasses.push(`is-row-from-start-${rowFromStart}`);
		else if (!!rowFromStart) console.warn("rowFromStart must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(rowFromStart?.mobile)) {
			if (rowFromStart.mobile >= 0 && rowFromStart.mobile <= 12)
				bulmaClasses.push(`is-row-from-start-${rowFromStart.mobile}-mobile`);
			else if (!!rowFromStart.mobile) console.warn("rowFromStart.mobile must be between 0 and 12");
		}
		if (!isNaN(rowFromStart?.tablet)) {
			if (rowFromStart.tablet >= 0 && rowFromStart.tablet <= 12)
				bulmaClasses.push(`is-row-from-start-${rowFromStart.tablet}-tablet`);
			else if (!!rowFromStart.tablet) console.warn("rowFromStart.tablet must be between 0 and 12");
		}
		if (!isNaN(rowFromStart?.desktop)) {
			if (rowFromStart.desktop >= 0 && rowFromStart.desktop <= 12)
				bulmaClasses.push(`is-row-from-start-${rowFromStart.desktop}-desktop`);
			else if (!!rowFromStart.desktop)
				console.warn("rowFromStart.desktop must be between 0 and 12");
		}
		if (!isNaN(rowFromStart?.widescreen)) {
			if (rowFromStart.widescreen >= 0 && rowFromStart.widescreen <= 12)
				bulmaClasses.push(`is-row-from-start-${rowFromStart.widescreen}-widescreen`);
			else if (!!rowFromStart.widescreen)
				console.warn("rowFromStart.widescreen must be between 0 and 12");
		}
		if (!isNaN(rowFromStart?.fullhd)) {
			if (rowFromStart.fullhd >= 0 && rowFromStart.fullhd <= 12)
				bulmaClasses.push(`is-row-from-start-${rowFromStart.fullhd}-fullhd`);
			else if (!!rowFromStart.fullhd) console.warn("rowFromStart.fullhd must be between 0 and 12");
		}
	}

	//* ROW-FROM-END
	if (!isNaN(rowFromEnd)) {
		if (rowFromEnd >= 0 && rowFromEnd <= 12) bulmaClasses.push(`is-row-from-end-${rowFromEnd}`);
		else if (!!rowFromEnd) console.warn("rowFromEnd must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(rowFromEnd?.mobile)) {
			if (rowFromEnd.mobile >= 0 && rowFromEnd.mobile <= 12)
				bulmaClasses.push(`is-row-from-end-${rowFromEnd.mobile}-mobile`);
			else if (!!rowFromEnd.mobile) console.warn("rowFromEnd.mobile must be between 0 and 12");
		}
		if (!isNaN(rowFromEnd?.tablet)) {
			if (rowFromEnd.tablet >= 0 && rowFromEnd.tablet <= 12)
				bulmaClasses.push(`is-row-from-end-${rowFromEnd.tablet}-tablet`);
			else if (!!rowFromEnd.tablet) console.warn("rowFromEnd.tablet must be between 0 and 12");
		}
		if (!isNaN(rowFromEnd?.desktop)) {
			if (rowFromEnd.desktop >= 0 && rowFromEnd.desktop <= 12)
				bulmaClasses.push(`is-row-from-end-${rowFromEnd.desktop}-desktop`);
			else if (!!rowFromEnd.desktop) console.warn("rowFromEnd.desktop must be between 0 and 12");
		}
		if (!isNaN(rowFromEnd?.widescreen)) {
			if (rowFromEnd.widescreen >= 0 && rowFromEnd.widescreen <= 12)
				bulmaClasses.push(`is-row-from-end-${rowFromEnd.widescreen}-widescreen`);
			else if (!!rowFromEnd.widescreen)
				console.warn("rowFromEnd.widescreen must be between 0 and 12");
		}
		if (!isNaN(rowFromEnd?.fullhd)) {
			if (rowFromEnd.fullhd >= 0 && rowFromEnd.fullhd <= 12)
				bulmaClasses.push(`is-row-from-end-${rowFromEnd.fullhd}-fullhd`);
			else if (!!rowFromEnd.fullhd) console.warn("rowFromEnd.fullhd must be between 0 and 12");
		}
	}

	//* COL-SPAN
	if (!isNaN(colSpan)) {
		if (colSpan >= 0 && colSpan <= 12) bulmaClasses.push(`is-col-span-${colSpan}`);
		else if (!!colSpan) console.warn("colSpan must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(colSpan?.mobile)) {
			if (colSpan.mobile >= 0 && colSpan.mobile <= 12)
				bulmaClasses.push(`is-col-span-${colSpan.mobile}-mobile`);
			else if (!!colSpan.mobile) console.warn("colSpan.mobile must be between 0 and 12");
		}
		if (!isNaN(colSpan?.tablet)) {
			if (colSpan.tablet >= 0 && colSpan.tablet <= 12)
				bulmaClasses.push(`is-col-span-${colSpan.tablet}-tablet`);
			else if (!!colSpan.tablet) console.warn("colSpan.tablet must be between 0 and 12");
		}
		if (!isNaN(colSpan?.desktop)) {
			if (colSpan.desktop >= 0 && colSpan.desktop <= 12)
				bulmaClasses.push(`is-col-span-${colSpan.desktop}-desktop`);
			else if (!!colSpan.desktop) console.warn("colSpan.desktop must be between 0 and 12");
		}
		if (!isNaN(colSpan?.widescreen)) {
			if (colSpan.widescreen >= 0 && colSpan.widescreen <= 12)
				bulmaClasses.push(`is-col-span-${colSpan.widescreen}-widescreen`);
			else if (!!colSpan.widescreen) console.warn("colSpan.widescreen must be between 0 and 12");
		}
		if (!isNaN(colSpan?.fullhd)) {
			if (colSpan.fullhd >= 0 && colSpan.fullhd <= 12)
				bulmaClasses.push(`is-col-span-${colSpan.fullhd}-fullhd`);
			else if (!!colSpan.fullhd) console.warn("colSpan.fullhd must be between 0 and 12");
		}
	}

	//* ROW-SPAN
	if (!isNaN(rowSpan)) {
		if (rowSpan >= 0 && rowSpan <= 12) bulmaClasses.push(`is-row-span-${rowSpan}`);
		else if (!!rowSpan) console.warn("rowSpan must be between 0 and 12");
	} else {
		//* RESPONSIVENESS
		if (!isNaN(rowSpan?.mobile)) {
			if (rowSpan.mobile >= 0 && rowSpan.mobile <= 12)
				bulmaClasses.push(`is-row-span-${rowSpan.mobile}-mobile`);
			else if (!!rowSpan.mobile) console.warn("rowSpan.mobile must be between 0 and 12");
		}
		if (!isNaN(rowSpan?.tablet)) {
			if (rowSpan.tablet >= 0 && rowSpan.tablet <= 12)
				bulmaClasses.push(`is-row-span-${rowSpan.tablet}-tablet`);
			else if (!!rowSpan.tablet) console.warn("rowSpan.tablet must be between 0 and 12");
		}
		if (!isNaN(rowSpan?.desktop)) {
			if (rowSpan.desktop >= 0 && rowSpan.desktop <= 12)
				bulmaClasses.push(`is-row-span-${rowSpan.desktop}-desktop`);
			else if (!!rowSpan.desktop) console.warn("rowSpan.desktop must be between 0 and 12");
		}
		if (!isNaN(rowSpan?.widescreen)) {
			if (rowSpan.widescreen >= 0 && rowSpan.widescreen <= 12)
				bulmaClasses.push(`is-row-span-${rowSpan.widescreen}-widescreen`);
			else if (!!rowSpan.widescreen) console.warn("rowSpan.widescreen must be between 0 and 12");
		}
		if (!isNaN(rowSpan?.fullhd)) {
			if (rowSpan.fullhd >= 0 && rowSpan.fullhd <= 12)
				bulmaClasses.push(`is-row-span-${rowSpan.fullhd}-fullhd`);
			else if (!!rowSpan.fullhd) console.warn("rowSpan.fullhd must be between 0 and 12");
		}
	}

	return (
		<Component className={`cell ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
