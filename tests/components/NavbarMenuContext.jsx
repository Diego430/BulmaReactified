"use client";
import React, { createContext } from "react";

const NavbarMenuContext = createContext();

export default function NavbarMenuProvider({ children, value }) {
	return <NavbarMenuContext.Provider value={value}>{children}</NavbarMenuContext.Provider>;
}

export function useNavbarMenu() {
	const context = React.useContext(NavbarMenuContext);
	if (!context) {
		throw new Error("useNavbarMenu must be used within a NavbarMenuProvider");
	}
	return context;
}
