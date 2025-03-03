"use client";
import React, { createContext } from "react";

const DropdownContext = createContext();

export default function DropdownProvider({ children, value }) {
	return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}

export function useDropdown() {
	const context = React.useContext(DropdownContext);
	if (!context) {
		throw new Error("useActivatable must be used within a ActivatableProvider");
	}
	return context;
}
