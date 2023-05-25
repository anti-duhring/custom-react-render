import setAttributesForElement from "./setAttributesForElement"

export default function(type, props, internalInstanceHandle) {
    const element = document.createElement(type)

    return setAttributesForElement(element, props)
}