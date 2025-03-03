import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardFooterItem from "./CardFooterItem";
import CardHeader from "./CardHeader";
import CardHeaderIcon from "./CardHeaderIcon";
import CardHeaderTitle from "./CardHeaderTitle";
import CardImage from "./CardImage";

function Card({ as: Component = "div", children, className = "", ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`breadcrumbs ${bulmaClasses.join(" ")} ${className}`} {...props}>
			<ul>{children}</ul>
		</Component>
	);
}

export default Object.assign(Card, {
	Image: CardImage,
	Header: Object.assign(CardHeader, {
		Title: CardHeaderTitle,
		Icon: CardHeaderIcon,
	}),
	Content: CardContent,
	Footer: Object.assign(CardFooter, {
		Item: CardFooterItem,
	}),
});
