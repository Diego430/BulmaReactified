import MediaContent from "./MediaContent";
import MediaLeft from "./MediaLeft";
import MediaRight from "./MediaRight";

function Media({ as: Component = "div", className, children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`media ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Media, {
	Left: MediaLeft,
	Right: MediaRight,
	Content: MediaContent,
});
