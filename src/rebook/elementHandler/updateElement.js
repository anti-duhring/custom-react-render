import setAttributesForElement from './setAttributesForElement'
import setStyleForElement from './setStyleForElement'
export default function(instance, oldProps, newProps) {

    const props = {...oldProps, ...newProps}

    let element = setAttributesForElement(instance, props)
    element = setStyleForElement(element, props.style)
    return element
}