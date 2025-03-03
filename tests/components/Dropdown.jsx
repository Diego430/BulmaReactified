import DropdownDivider from "./DropdownDivider";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownTrigger from "./DropdownTrigger";
import DropdownWrapper from "./DropdownWrapper";

function Dropdown({ children, ...props }) {
	return <DropdownWrapper {...props}>{children}</DropdownWrapper>;
}

export default Object.assign(Dropdown, {
	Trigger: DropdownTrigger,
	Menu: Object.assign(DropdownMenu, {
		Item: DropdownMenuItem,
		Divider: DropdownDivider,
	}),
});
