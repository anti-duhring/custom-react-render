import { propsEventListners, propsToNotAddAsAttribute } from "./constants/propsConfig"
/**
 * Method to set attributes for an element
 * @param {HTMLElement} element - The element to set the attributes on
 * @param {Object} props - New attributes
 * @param {Boolean} setEventListners - Whether to set event listners or not. If the elements is being updated so this should be false.
 * @returns 
 */
export default function(element, props, setEventListners = true) {
    for (const prop in props) {
        if(propsToNotAddAsAttribute.includes(prop)) continue
        
        if(Object.keys(propsEventListners).includes(prop)) {
            if(!setEventListners) continue
            
            element.addEventListener(propsEventListners[prop], props[prop])
            continue
        }

        element.setAttribute(prop, props[prop])
    }

    return element
}