"use strict";
const trees = htmlCollectionToArray(document.getElementsByClassName('tree'));
trees.forEach((tree) => {
    indentNodes(tree, 0);
});
function indentNodes(elem, depth) {
    htmlCollectionToArray(elem.childNodes).forEach((child) => {
        if (!child.tagName || child.tagName.toLowerCase() === "summary") {
            return;
        }
        console.log(child.innerText);
        child.style.marginLeft = depth === 0 ? '0' : '25px';
        if (child.tagName.toLowerCase() === "details") {
            indentNodes(child, depth + 1);
        }
    });
}
function htmlCollectionToArray(collection) {
    return [].slice.call(collection);
}
