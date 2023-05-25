import ReactReconciler from "react-reconciler";
import emptyObject from 'fbjs/lib/emptyObject';
import createElement from "./elementHandler/createElement";
import updateElement from "./elementHandler/updateElement";

const hostConfig = {
    supportsMutation: true,
    createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        return createElement(type, props, internalInstanceHandle)
    },
    createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
        return document.createTextNode(text)
    },
    appendChildToContainer(parentInstance, child) {
        parentInstance.appendChild(child)
    
    },
    appendChild(parentInstance, child) {
        parentInstance.appendChild(child)

    },
    appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child)

    }
    ,
    removeChildFromContainer(parentInstance, child) {
        parentInstance.removeChild(child)
    
    },
    removeChild(parentInstance, child) {
        parentInstance.removeChild(child)
    },
    insertBefore(parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild)
    
    },
    insertInContainerBefore(parentInstance, child, beforeChild) {},
    prepareUpdate(instance, type, oldProps, newProps, rootContainer, hostContext) {
        return updateElement(instance, oldProps, newProps)
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork) {
        return updateElement(instance, oldProps, newProps)
    },
    commitTextUpdate(textInstance, prevText, nextText) {
        console.log(prevText, nextText)
        textInstance.nodeValue = nextText
    },
    finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
        
    },
    getChildContext() {},
    getPublicInstance(instance) {
    },
    getRootHostContext(rootContainer) {
        
    },
    prepareForCommit(containerInfo) {
       
    },
    resetAfterCommit(containerInfo) {},
    resetTextContent(instance) {},
    shouldSetTextContent() {
       return false
    },
    clearContainer(container) {},
    getChildHostContext(parentHostContext, type, rootContainer){
       
    }
}
;
const DOMRenderer = ReactReconciler(hostConfig);

export default {
  render(elements, containerNode, callback) {

    // We must do this only once
    let container = DOMRenderer.createContainer(
        containerNode,
        false,
        false
      );

    DOMRenderer.updateContainer(elements, container, null, callback);
  }
}