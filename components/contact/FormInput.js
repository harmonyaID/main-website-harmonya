const FormInput = (props) => {
    const myId = props.id || 'text-input-' + props.name

    return (
        <div className={'form-group ' + (props.extraClass || '')}>
            {props.label ? (
                <label htmlFor={myId} className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
            ) : null}
            <input type={props.type || 'text'}
                   value={props.value}
                   onChange={props.change}
                   onKeyPress={props.keyPress}
                   name={props.name}
                   className={'form-control bloc w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ' + (props.extraInputClass || '')}
                   min={props.min !== '' ? props.min :''}
                   max={props.max !== '' ? props.max :''}
                   id={myId}
                   autoComplete={props.autoComplete||'off'}
                   placeholder={props.placeholder||''}
                   readOnly={props.readOnly||''}
                   {...props.other}/>
            {props.icon ? (
                <span className={props.extraClassIcon || ''} onClick={props.handleIcon}>{props.icon}</span>
            ) : null}
        </div>
    )
}

export default FormInput;