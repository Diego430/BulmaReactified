import { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarBurger from "./NavbarBurger";
import NavbarDivider from "./NavbarDivider";
import NavbarDropdown from "./NavbarDropdown";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
import NavbarDropdownToggle from "./NavbarDropdownToggle";
import NavbarEnd from "./NavbarEnd";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuProvider from "./NavbarMenuContext";
import NavbarStart from "./NavbarStart";

function Navbar({
	as: Component = "nav",
	isTransparent,
	fixed = "",
	isSpaced,
	hasShadow,
	variant,
	className = "",
	children,
	...props
}) {
	const [isActive, setIsActive] = useState(false);
	const bulmaClasses = [];

	//* IS TRANSPARENT
	if (isTransparent) bulmaClasses.push("is-transparent");

	//* FIXED
	if (fixed === "top") {
		bulmaClasses.push("is-fixed-top");
		// Add the corresponding has-navbar-fixed-top modifier to <html>
		document.documentElement.classList.add("has-navbar-fixed-top");
	}
	if (fixed === "bottom") {
		bulmaClasses.push("is-fixed-bottom");
		// Add the corresponding has-navbar-fixed-bottom modifier to <html>
		document.documentElement.classList.add("has-navbar-fixed-bottom");
	}

	//* IS SPACED
	if (isSpaced) bulmaClasses.push("is-spaced");

	//* HAS SHADOW
	if (hasShadow) bulmaClasses.push("has-shadow");

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
		case "black":
			bulmaClasses.push("is-black");
			break;
		case "dark":
			bulmaClasses.push("is-dark");
			break;
		case "light":
			bulmaClasses.push("is-light");
			break;
		case "white":
			bulmaClasses.push("is-white");
			break;
		default:
			break;
	}

	return (
		<NavbarMenuProvider value={{ isActive, setIsActive }}>
			<Component
				className={`navbar ${bulmaClasses.join(" ")} ${className}`}
				role="navigation"
				aria-label="main navigation"
				{...props}
			>
				{children}
			</Component>
		</NavbarMenuProvider>
	);
}

export default Object.assign(Navbar, {
	Brand: NavbarBrand,
	Burger: NavbarBurger,
	Menu: Object.assign(NavbarMenu, {
		Start: NavbarStart,
		End: NavbarEnd,
	}),
	Dropdown: Object.assign(NavbarDropdown, {
		Toggle: NavbarDropdownToggle,
		Menu: NavbarDropdownMenu,
		Divider: NavbarDivider,
	}),
	Item: Object.assign(NavbarItem, {
		Link: NavbarLink,
	}),
});
