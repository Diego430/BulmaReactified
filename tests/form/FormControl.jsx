import FormCheckbox from "./FormCheckbox";
import FormControlWrapper from "./FormControlWrapper";
import FormFile from "./FormFile";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

export default function FormControl({ type, wrapperClassname, children, ...props }) {
	switch (type) {
		case "checkbox":
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormCheckbox {...props}>{children}</FormCheckbox>
				</FormControlWrapper>
			);
		case "radio":
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormRadio {...props}>{children}</FormRadio>
				</FormControlWrapper>
			);
		case "file":
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormFile {...props} />
				</FormControlWrapper>
			);
		case "select":
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormSelect {...props}>{children}</FormSelect>
				</FormControlWrapper>
			);
		case "textarea":
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormTextarea {...props} />
				</FormControlWrapper>
			);

		default:
			return (
				<FormControlWrapper className={wrapperClassname}>
					<FormInput type={type} {...props}>
						{children}
					</FormInput>
				</FormControlWrapper>
			);
	}
}
