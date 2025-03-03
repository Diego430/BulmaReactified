import PanelBlock from "./PanelBlock";
import PanelHeading from "./PanelHeading";
import PanelIcon from "./PanelIcon";
import PanelTab from "./PanelTab";
import PanelTabs from "./PanelTabs";

function Panel({ as: Component = "aside", variant, className = "", children, ...props }) {
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
	}

	return (
		<Component className={`panel ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Panel, {
	Heading: PanelHeading,
	Tabs: PanelTabs,
	Tab: PanelTab,
	Block: PanelBlock,
	Icon: PanelIcon,
});
