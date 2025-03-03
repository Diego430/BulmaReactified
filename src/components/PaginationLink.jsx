export default function PaginationLink({ isCurrent, className = "", children, ...props }) {
	const bulmaClasses = [];

	if (isCurrent) bulmaClasses.push("is-current");

	return (
		<li>
			<a className={`pagination-link ${bulmaClasses.join(" ")} ${className}`} {...props}>
				{children}
			</a>
		</li>
	);
}
