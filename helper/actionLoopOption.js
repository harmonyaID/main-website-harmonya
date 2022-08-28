import _ from 'lodash'

export function actionLoopObject(objectOptions, unShift = ''){
    const options = Object.keys(objectOptions).map(( key) => (
        <option key={'op-' + unShift + key} value={key}>{_.startCase(key)}</option>
    ))
    options.unshift(<option key={unShift} value="">{unShift}</option>)


    return options;
}