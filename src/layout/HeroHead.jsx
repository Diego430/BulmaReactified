export default function HeroHead({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`hero-head ${className}`} {...props}>
			{children}
		</Component>
	);
}
