import PaginationEllipsis from "./PaginationEllipsis";
import PaginationLink from "./PaginationLink";
import PaginationList from "./PaginationList";
import PaginationNext from "./PaginationNext";
import PaginationPrev from "./PaginationPrev";

function Pagination({ as: Component = "nav", align = "left", className = "", children, ...props }) {
	const bulmaClasses = [];

	switch (align) {
		case "center":
			bulmaClasses.push("is-centered");
			break;
		case "right":
			bulmaClasses.push("is-right");
			break;
	}

	return (
		<Component
			className={`pagination ${bulmaClasses.join(" ")} ${className}`}
			role="navigation"
			aria-label="pagination"
			{...props}
		>
			{children}
		</Component>
	);
}

export default Object.assign(Pagination, {
	Prev: PaginationPrev,
	Next: PaginationNext,
	List: Object.assign(PaginationList, {
		Link: PaginationLink,
		Ellipsis: PaginationEllipsis,
	}),
});
