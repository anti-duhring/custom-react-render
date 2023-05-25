export function createCSSClass(className, styles) {
    const styleSheet = document.querySelector('style').sheet;
    
    styleSheet.insertRule(`.${className} { ${styles} }`, styleSheet.cssRules.length); 

    removeCSSClass(className)
}

export function removeCSSClass(className) {
    const styleSheet = document.querySelector('style').sheet;
    
    for (let i = 0; i <  styleSheet.cssRules; i++) {
        const rule = styleSheet.cssRules[i];
        console.log(rule)
    }
}