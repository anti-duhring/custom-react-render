import setAttributesForElement from './setAttributesForElement'
export default function(instance, oldProps, newProps) {

    const props = {...oldProps, ...newProps}
    return setAttributesForElement(instance, props)
}