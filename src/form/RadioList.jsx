export default function RadioList({ as: Component = "div", children, className = "", ...props }) {
	return (
		<Component className={`radios ${className}`} {...props}>
			{children}
		</Component>
	);
}
