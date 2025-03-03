/**
 * ProgressBar component renders a Bulma-styled progress bar.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.value - The current value of the progress bar.
 * @param {number} [props.max=100] - The maximum value of the progress bar.
 * @param {string} [props.size] - The size of the progress bar. Can be "small", "normal", "medium", or "large".
 * @param {string} [props.variant] - The variant of the progress bar. Can be "primary", "link", "info", "success", "warning", or "danger".
 * @param {string} [props.className=""] - Additional CSS classes to apply to the progress bar.
 *
 * @returns {JSX.Element} The rendered progress bar component.
 */
export default function ProgressBar({ value, max = 100, size, variant, className = "", ...props }) {
	delete props.children;

	const bulmaClasses = [];

	//* VARIANT
	switch (variant) {
		case "primary":
			bulmaClasses.push("is-primary");
			break;
		case "link":
			bulmaClasses.push("is-link");
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
		case "normal":
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
		<progress
			className={`notification pr-3 ${bulmaClasses.join(" ")} ${className}`}
			value={value}
			max={max}
			{...props}
		>
			{(value ?? 1 / max) * 100}%
		</progress>
	);
}
