export default function PaginationEllipsis({ className = "", ...props }) {
	return (
		<li>
			<span className={`pagination-ellipsis ${className}`} {...props}>
				&hellip;
			</span>
		</li>
	);
}
