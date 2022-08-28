import { actionLoopObject } from "../../helper/actionLoopOption";
import FormSelectInput from "./FormSelectInput";

const FormSelectionOptions = (props) => {
    const { change } = props
    const options = actionLoopObject(props.options, props.unshift || 'All')
    return (
        <FormSelectInput 
            className={props.className||''}
            label={props.label}
            name={props.name}
            value={props.value}
            change={(e) => change(e)}
            disabled={props.disabled}
            multiple={props.multiple||false}
            style={props.style}
            id={props.id}
            options={options}
            other={{...props.other}}
        />
    )

}

export default FormSelectionOptions;