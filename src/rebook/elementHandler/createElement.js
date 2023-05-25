import setAttributesForElement from "./setAttributesForElement"
import setStyleForElement from "./setStyleForElement"

export default function(type, props) {
    let element = document.createElement(type)
    element = setAttributesForElement(element, props)
    element = setStyleForElement(element, props.style)

    return element
}