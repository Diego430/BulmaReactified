export default function LevelRight({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`level-right ${className}`} {...props}>
			{children}
		</Component>
	);
}
