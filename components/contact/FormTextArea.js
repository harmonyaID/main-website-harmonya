const FormTextArea = (props) => {
    const myId = props.id || 'text-area-' + props.name

    return (
        <div className="form-group">
            {props.label ? (<label htmlFor={myId} className="form-label inline-block mb-2 text-gray-700">{props.label}</label>) : null}
            <textarea value={props.value}
                      onChange={props.change}
                      onKeyPress={props.keyPress}
                      name={props.name}
                      className={'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ' + (props.extraInputClass || '')}
                      id={myId}
                      autoComplete={props.autoComplete||'off'}
                      placeholder={props.placeholder||''}
                      rows={props.rows || '3'}
                      cols={props.cols || '4'}
                      readOnly={props.readOnly||''}
                      {...props.other}
            />
        </div>
    )
}

export default FormTextArea;
