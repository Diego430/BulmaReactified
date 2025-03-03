import HeroBody from "./HeroBody";
import HeroFoot from "./HeroFoot";
import HeroHead from "./HeroHead";

function Hero({ as: Component = "section", variant, size, className, children, ...props }) {
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
		case "medium":
			bulmaClasses.push("is-medium");
			break;
		case "large":
			bulmaClasses.push("is-large");
			break;
		case "halfheight":
			bulmaClasses.push("is-halfheight");
			break;
		case "fullheight":
			bulmaClasses.push("is-fullheight");
			break;
		case "fullheight-with-navbar":
			bulmaClasses.push("is-fullheight-with-navbar");
			break;

		default:
			break;
	}

	return (
		<Component className={`hero ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Hero, {
	Head: HeroHead,
	Body: HeroBody,
	Foot: HeroFoot,
});
