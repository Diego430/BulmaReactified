export default function HeroBody({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`hero-body ${className}`} {...props}>
			{children}
		</Component>
	);
}
