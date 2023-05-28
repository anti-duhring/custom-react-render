/**
 * This method should mutate the parentInstance to remove the child from the list of its children.
 * React will only call it for the top-level node that is being removed. It is expected that garbage collection would take care of the whole subtree. You are not expected to traverse the child tree in it.
 * @param {HTMLElement} parentInstance - The parent instance 
 * @param {HTMLElement} child - The child to remove from the parent instance
 * @returns {null} 
 */
export default function(parentInstance, child) {
    console.log(child)
}