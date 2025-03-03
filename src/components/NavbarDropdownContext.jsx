"use client";
import React, { createContext } from "react";

const NavbarDropdownContext = createContext();

export default function NavbarDropdownProvider({ children, value }) {
	return <NavbarDropdownContext.Provider value={value}>{children}</NavbarDropdownContext.Provider>;
}

export function useNavbarDropdown() {
	const context = React.useContext(NavbarDropdownContext);
	if (!context) {
		throw new Error("useNavbarDropdown must be used within a NavbarDropdownProvider");
	}
	return context;
}
