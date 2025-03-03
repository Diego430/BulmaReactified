import FormCheckbox from "./FormCheckbox";
import FormControlWrapper from "./FormControlWrapper";
import FormField from "./FormField";
import FormFile from "./FormFile";
import FormHelp from "./FormHelp";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

function Form({ as: Component = "form", className = "", children, ...props }) {
	const bulmaClasses = [];

	return (
		<Component className={`${bulmaClasses.join(" ")} ${className}`} {...props}>
			{children}
		</Component>
	);
}

export default Object.assign(Form, {
	Field: Object.assign(FormField, {
		Label: FormLabel,
		Control: Object.assign(FormControlWrapper, {
			Input: FormInput,
			Textarea: FormTextarea,
			Select: FormSelect,
			Checkbox: FormCheckbox,
			Radio: FormRadio,
			File: FormFile,
		}),
		Help: FormHelp,
	}),
});
