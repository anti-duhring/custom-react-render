import ReactReconciler from "react-reconciler";
import emptyObject from 'fbjs/lib/emptyObject';
import createElement from "./createElement";

const hostConfig = {
    now: () => {},
    supportsMutation: true,
    createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        return createElement(type, props, internalInstanceHandle)
    },
    createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
        return text
    },
    appendChildToContainer(parentInstance, child) {},
    appendChild(parentInstance, child) {
        if(parentInstance.appendChild) {
            parentInstance.appendChild(child)
        } else {
            parentInstance.document = child
        } 
    },
    appendInitialChild(parentInstance, child) {},
    removeChildFromContainer(parentInstance, child) {},
    removeChild(parentInstance, child) {},
    insertBefore(parentInstance, child, beforeChild) {},
    insertInContainerBefore(parentInstance, child, beforeChild) {},
    prepareUpdate(instance, type, oldProps, newProps, rootContainer, hostContext) {
        return true
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork) {},
    finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
        return false
    },
    getChildContext() {},
    getPublicInstance(instance) {
        return instance
    },
    getRootHostContext(rootContainer) {
        return null
    },
    prepareForCommit(containerInfo) {
        return null
    },
    resetAfterCommit(containerInfo) {},
    resetTextContent(instance) {},
    shouldSetTextContent() {
        return false
    },
    clearContainer(container) {},
    getChildHostContext(parentHostContext, type, rootContainer){
        return emptyObject;
    }
}
;
const DOMRenderer = ReactReconciler(hostConfig);

let internalContainerStructure;
export default {
  render(elements, containerNode, callback) {

    // We must do this only once
    if (!internalContainerStructure) {
      internalContainerStructure = DOMRenderer.createContainer(
        containerNode,
        false,
        false
      );
    }

    DOMRenderer.updateContainer(elements, internalContainerStructure, null, callback);
  }
}