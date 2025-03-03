"use client";
import React, { createContext } from "react";

const ActivatableContext = createContext();

export default function ActivatableProvider({ children, value }) {
	return <ActivatableContext.Provider value={value}>{children}</ActivatableContext.Provider>;
}

export function useActivatable() {
	const context = React.useContext(ActivatableContext);
	if (!context) {
		throw new Error("useActivatable must be used within a ActivatableProvider");
	}
	return context;
}
