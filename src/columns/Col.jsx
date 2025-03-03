export default function Col({
	as: Component = "div",
	size,
	mobile,
	tablet,
	desktop,
	widescreen,
	fullhd,
	offset,
	mobileOffset,
	tabletOffset,
	desktopOffset,
	widescreenOffset,
	fullhdOffset,
	isNarrow,
	children,
	className = "",
	...props
}) {
	const bulmaClasses = [];

	//* SIZE
	if (size >= 0 && size <= 12) bulmaClasses.push(`is-${size}`);
	else if (!!size) console.warn("Size must be between 0 and 12");

	//* RESPONSIVENESS
	if (mobile >= 0 && mobile <= 12) bulmaClasses.push(`is-${mobile}-mobile`);
	else if (!!mobile) console.warn("Column in mobile must be between 0 and 12");
	if (tablet >= 0 && tablet <= 12) bulmaClasses.push(`is-${tablet}-tablet`);
	else if (!!tablet) console.warn("Column in tablet must be between 0 and 12");
	if (desktop >= 0 && desktop <= 12) bulmaClasses.push(`is-${desktop}-desktop`);
	else if (!!desktop) console.warn("Column in desktop must be between 0 and 12");
	if (widescreen >= 0 && widescreen <= 12) bulmaClasses.push(`is-${widescreen}-widescreen`);
	else if (!!widescreen) console.warn("Column in widescreen must be between 0 and 12");
	if (fullhd >= 0 && fullhd <= 12) bulmaClasses.push(`is-${fullhd}-fullhd`);
	else if (!!fullhd) console.warn("Column in fullhd must be between 0 and 12");

	//* OFFSET
	if (offset >= 0 && offset <= 12) bulmaClasses.push(`is-offset-${offset}`);
	else if (!!offset) console.warn("Offset must be between 0 and 12");

	//* OFFSET RESPONSIVENESS
	if (mobileOffset >= 0 && mobileOffset <= 12)
		bulmaClasses.push(`is-offset-${mobileOffset}-mobile`);
	else if (!!mobileOffset) console.warn("Offset in mobile must be between 0 and 12");
	if (tabletOffset >= 0 && tabletOffset <= 12)
		bulmaClasses.push(`is-offset-${tabletOffset}-tablet`);
	else if (!!tabletOffset) console.warn("Offset in tablet must be between 0 and 12");
	if (desktopOffset >= 0 && desktopOffset <= 12)
		bulmaClasses.push(`is-offset-${desktopOffset}-desktop`);
	else if (!!desktopOffset) console.warn("Offset in desktop must be between 0 and 12");
	if (widescreenOffset >= 0 && widescreenOffset <= 12)
		bulmaClasses.push(`is-offset-${widescreenOffset}-widescreen`);
	else if (!!widescreenOffset) console.warn("Offset in widescreen must be between 0 and 12");
	if (fullhdOffset >= 0 && fullhdOffset <= 12)
		bulmaClasses.push(`is-offset-${fullhdOffset}-fullhd`);
	else if (!!fullhdOffset) console.warn("Offset in fullhd must be between 0 and 12");

	//* IS NARROW
	if (isNarrow) bulmaClasses.push("is-narrow");

	return (
		<Component className={`column ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}
