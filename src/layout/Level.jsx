import LevelItem from "./LevelItem";
import LevelLeft from "./LevelLeft";
import LevelRight from "./LevelRight";

function Level({ as: Component = "nav", isMobile, className, children, ...props }) {
	const bulmaClasses = [];

	//* IS MOBILE
	if (isMobile) bulmaClasses.push("is-mobile");

	return (
		<Component className={`container ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Level, {
	Left: LevelLeft,
	Right: LevelRight,
	Item: LevelItem,
});
