export default function Cols({
	as: Component = "div",
	isGapless,
	isMultiline,
	gap,
	mobileGap,
	tabletGap,
	desktopGap,
	widescreenGap,
	fullhdGap,
	verticalAlign,
	align,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* IS GAPLESS
	if (isGapless) bulmaClasses.push("is-gapless");

	//* IS MULTILINE
	if (isMultiline) bulmaClasses.push("is-multiline");

	//* GAP
	if (gap >= 0 && gap <= 8) bulmaClasses.push(`is-${gap}`);
	else if (!!gap) console.warn("Gap must be between 0 and 8");

	//* GAP RESPONSIVENESS
	if (mobileGap >= 0 && mobileGap <= 8) bulmaClasses.push(`is-${mobileGap}-mobile`);
	else if (!!mobileGap) console.warn("Gap in mobile must be between 0 and 8");
	if (tabletGap >= 0 && tabletGap <= 8) bulmaClasses.push(`is-${tabletGap}-tablet`);
	else if (!!tabletGap) console.warn("Gap in tablet must be between 0 and 8");
	if (desktopGap >= 0 && desktopGap <= 8) bulmaClasses.push(`is-${desktopGap}-desktop`);
	else if (!!desktopGap) console.warn("Gap in desktop must be between 0 and 8");
	if (widescreenGap >= 0 && widescreenGap <= 8) bulmaClasses.push(`is-${widescreenGap}-widescreen`);
	else if (!!widescreenGap) console.warn("Gap in widescreen must be between 0 and 8");
	if (fullhdGap >= 0 && fullhdGap <= 8) bulmaClasses.push(`is-${fullhdGap}-fullhd`);
	else if (!!fullhdGap) console.warn("Gap in fullhd must be between 0 and 8");

	//* VERTICAL ALIGN
	switch (verticalAlign) {
		case "center":
			bulmaClasses.push("is-vcentered");
			break;
	}

	//* ALIGN
	switch (align) {
		case "center":
			bulmaClasses.push("is-centered");
			break;
	}

	return (
		<Component className={`columns ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
