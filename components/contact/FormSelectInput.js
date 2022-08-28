const FormSelectInput = (props) => {
    const myId = props.id || 'select-input-' + props.name

    return (
        <div className={'form-group ' + (props.extraClass || '')}>
            {props.label ? (
                <label htmlFor={myId}>{props.label}</label>
            ) : null}
            <select className={"form-control appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "  + (props.className||'')}
                    name={props.name}
                    value={props.value}
                    onChange={props.change}
                    disabled={props.disabled}
                    multiple={props.multiple||false}
                    style={props.style}
                    {...props.other}
                    id={myId}>
                {props.options}
            </select>

            {props.icon ? (
                <span className=""></span>
            ) : null}
        </div>
    )
}

export default FormSelectInput;