export default function FormFile({
	wrapperAs: Component = "div",
	name,
	showIcon = true,
	icon,
	label,
	showFilename,
	filename,
	buttonAlign = "left",
	isFullwidth,
	isBoxed,
	variant,
	size,
	className = "",
	value,
	onChange = () => {},
	...props
}) {
	const bulmaClasses = [];

	//* HAS FILENAME
	if (showFilename || !!filename) {
		bulmaClasses.push("has-name");
	}

	//* BUTTON POSITION
	switch (buttonAlign) {
		case "right":
			bulmaClasses.push("is-right");
			break;
		case "center":
			bulmaClasses.push("is-centered");
			break;
		default:
			break;
	}

	//* IS FULLWIDTH
	if (isFullwidth) bulmaClasses.push("is-fullwidth");

	//* IS BOXED
	if (isBoxed) bulmaClasses.push("is-boxed");

	//* VARIANT
	switch (variant) {
		case "primary":
			bulmaClasses.push("is-primary");
			break;
		case "info":
			bulmaClasses.push("is-info");
			break;
		case "success":
			bulmaClasses.push("is-success");
			break;
		case "warning":
			bulmaClasses.push("is-warning");
			break;
		case "danger":
			bulmaClasses.push("is-danger");
			break;
		default:
			break;
	}

	//* SIZE
	switch (size) {
		case "small":
			bulmaClasses.push("is-small");
			break;
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
		default:
			break;
	}

	return (
		<Component className={`file ${bulmaClasses.join(" ")} ${className}`} {...props}>
			<label className="file-label">
				<input className="file-input" type="file" name={name} value={value} onChange={onChange} />
				<span className="file-cta">
					{showIcon && !icon ? (
						<span className="file-icon">
							<i className="fas fa-upload"></i>
						</span>
					) : (
						icon
					)}
					<span className="file-label">{label}</span>
				</span>
				{(showFilename || !!filename) && <span className="file-name"> {filename} </span>}
			</label>
		</Component>
	);
}
