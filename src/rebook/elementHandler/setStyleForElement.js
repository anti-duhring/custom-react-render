import { createCSSClass, createCSSClassWithSelector } from "./utils/manageCSSClass"

/**
 * Applies style and pseudo classes to an element
 * @param {HTMLElement} element - The element to apply the styles to
 * @param {Object} style - The styles to apply to the element
 * @returns {HTMLElement} The element with the styles applied
 */
export default function(element, style = {}) {
    const pseudoClasses = {}
    for (let key in style) {
        if (key.startsWith('_')) {
            pseudoClasses[key] = style[key]
            continue
        }
        element.style[key] = style[key]
    }

    if(!element.id) return element
    
    Object.entries(pseudoClasses).forEach(([key, value]) => {
        const stylesString = Object.entries(value)
            .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1')
            .toLowerCase()}: ${value}!important;`)
            .join(' ')

        if(key === '_placeholder') {
            createCSSClassWithSelector(`#${element.id}::placeholder`, stylesString)
        } else {
            createCSSClass(element.id + key, stylesString)
        } 
    });

    element.onmouseenter = (e) => {
        e.target.classList.add(element.id + '_hover')
    }
    element.onmouseleave = (e) => {
        e.target.classList.remove(element.id + '_hover')
    }

    return element
}


