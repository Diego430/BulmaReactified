export default function LevelLeft({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`level-left ${className}`} {...props}>
			{children}
		</Component>
	);
}
