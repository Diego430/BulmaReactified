export default function HeroFoot({ as: Component = "div", className, children, ...props }) {
	return (
		<Component className={`hero-foot ${className}`} {...props}>
			{children}
		</Component>
	);
}
