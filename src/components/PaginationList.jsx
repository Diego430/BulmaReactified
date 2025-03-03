export default function PaginationList({ className = "", children, ...props }) {
	return (
		<ul className={`pagination-list ${className}`} {...props}>
			{children}
		</ul>
	);
}
