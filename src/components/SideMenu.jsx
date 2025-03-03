import SideMenuLabel from "./SideMenuLabel";
import SideMenuList from "./SideMenuList";
import SideMenuListItem from "./SideMenuListItem";

function SideMenu({ as: Component = "aside", className = "", children, ...props }) {
	return (
		<Component className={`menu ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(SideMenu, {
	Label: SideMenuLabel,
	List: Object.assign(SideMenuList, {
		Item: SideMenuListItem,
	}),
});
