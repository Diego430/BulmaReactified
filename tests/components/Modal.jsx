import ModalBackground from "./ModalBackground";
import ModalCard from "./ModalCard";
import ModalCardBody from "./ModalCardBody";
import ModalCardFoot from "./ModalCardFoot";
import ModalCardHead from "./ModalCardHead";
import ModalCardTitle from "./ModalCardTitle";
import ModalContent from "./ModalContent";
import ModalClose from "./ModalDelete";
import ModalImage from "./ModalImage";

function Modal({
	as: Component = "div",
	show,
	onHide,
	hideBackground,
	hideClose,
	className = "",
	children,
	...props
}) {
	const bulmaClasses = [];

	//* SHOW
	if (show) bulmaClasses.push("is-active");

	return (
		<Component className={`modal ${bulmaClasses.join(" ")} ${className}`} {...props}>
			{!hideBackground && <ModalBackground onClick={onHide} />}
			{!hideClose && <ModalClose onClick={onHide} />}
			<ModalContent>{children}</ModalContent>
		</Component>
	);
}

export default Object.assign(Modal, {
	Image: ModalImage,
	Close: ModalClose,
	Card: Object.assign(ModalCard, {
		Body: ModalCardBody,
		Foot: ModalCardFoot,
		Head: ModalCardHead,
		Title: ModalCardTitle,
	}),
});
