import { propsEventListners, propsToNotAddAsAttribute } from "./constants/propsConfig"

export default function(element, props) {
    for (const prop in props) {
        if(propsToNotAddAsAttribute.includes(prop)) continue
        
        if(Object.keys(propsEventListners).includes(prop)) {
            element.addEventListener(propsEventListners[prop], props[prop])
            continue
        }

        element.setAttribute(prop, props[prop])
    }

    return element
}