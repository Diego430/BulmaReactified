import { render } from "@testing-library/react";
import React from "react";
import Cols from "../../src/components/Cols";

describe("Cols component", () => {
	it("renders without crashing", () => {
		const { container } = render(<Cols />);
		expect(container.firstChild).toHaveClass("columns");
	});

	it("renders with custom element type", () => {
		const { container } = render(<Cols as="section" />);
		expect(container.firstChild.tagName).toBe("SECTION");
	});

	it("applies gapless class", () => {
		const { container } = render(<Cols gapless />);
		expect(container.firstChild).toHaveClass("is-gapless");
	});

	it("applies multiline class", () => {
		const { container } = render(<Cols multiline />);
		expect(container.firstChild).toHaveClass("is-multiline");
	});

	it("applies gap class with number", () => {
		const { container } = render(<Cols gap={4} />);
		expect(container.firstChild).toHaveClass("is-4");
	});

	it("applies gap class with responsiveness object", () => {
		const { container } = render(<Cols gap={{ mobile: 4, tablet: 6, desktop: 8 }} />);
		expect(container.firstChild).toHaveClass("is-mobile-4");
		expect(container.firstChild).toHaveClass("is-tablet-6");
		expect(container.firstChild).toHaveClass("is-desktop-8");
	});

	it("applies vertical alignment class", () => {
		const { container } = render(<Cols verticalAlign="center" />);
		expect(container.firstChild).toHaveClass("is-vcentered");
	});

	it("applies horizontal alignment class", () => {
		const { container } = render(<Cols align="center" />);
		expect(container.firstChild).toHaveClass("is-centered");
	});

	it("applies custom class name", () => {
		const { container } = render(<Cols className="custom-class" />);
		expect(container.firstChild).toHaveClass("custom-class");
	});

	it("renders children", () => {
		const { getByText } = render(<Cols>Test Content</Cols>);
		expect(getByText("Test Content")).toBeInTheDocument();
	});
});
