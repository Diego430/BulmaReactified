export default function FixedGrid({
	as: Component = "div",
	wrapperAs: WrapperComponent = "div",
	cols,
	className = "",
	wrapperClassName = "",
	children,
	...props
}) {
	const bulmaClasses = [];

	//* COLS
	if (!isNaN(cols)) {
		if (cols >= 0 && cols <= 12) bulmaClasses.push(`has-${cols}-cols`);
		else if (!!cols) console.warn("cols must be between 0 and 12");
	} else if (cols === "auto") {
		bulmaClasses.push(`has-auto-cols`);
	} else {
		//* RESPONSIVENESS
		if (!isNaN(cols?.mobile)) {
			if (cols.mobile >= 0 && cols.mobile <= 12)
				bulmaClasses.push(`has-${cols.mobile}-cols-mobile`);
			else if (!!cols.mobile) console.warn("cols.mobile must be between 0 and 12");
		}
		if (!isNaN(cols?.tablet)) {
			if (cols.tablet >= 0 && cols.tablet <= 12)
				bulmaClasses.push(`has-${cols.tablet}-cols-tablet`);
			else if (!!cols.tablet) console.warn("cols.tablet must be between 0 and 12");
		}
		if (!isNaN(cols?.desktop)) {
			if (cols.desktop >= 0 && cols.desktop <= 12)
				bulmaClasses.push(`has-${cols.desktop}-cols-desktop`);
			else if (!!cols.desktop) console.warn("cols.desktop must be between 0 and 12");
		}
		if (!isNaN(cols?.widescreen)) {
			if (cols.widescreen >= 0 && cols.widescreen <= 12)
				bulmaClasses.push(`has-${cols.widescreen}-cols-widescreen`);
			else if (!!cols.widescreen) console.warn("cols.widescreen must be between 0 and 12");
		}
		if (!isNaN(cols?.fullhd)) {
			if (cols.fullhd >= 0 && cols.fullhd <= 12)
				bulmaClasses.push(`has-${cols.fullhd}-cols-fullhd`);
			else if (!!cols.fullhd) console.warn("cols.fullhd must be between 0 and 12");
		}
	}

	return (
		<WrapperComponent className={`fixed-grid ${bulmaClasses.join(" ")} ${wrapperClassName}`}>
			<Component className={`grid ${className}`} {...props}>
				{children}
			</Component>
		</WrapperComponent>
	);
}
