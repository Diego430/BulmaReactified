export default function LevelItem({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`level-item ${className}`} {...props}>
			{children}
		</Component>
	);
}
