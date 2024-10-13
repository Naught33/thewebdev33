//utility functions
function viewID(identity){
    return document.getElementById(identity);
}

function viewClass(identity){
    return document.getElementsByClassName(identity);
}

function viewClassf(identity,first){
    if(!first){
    return document.getElementsByClassName(identity);
    }
    return document.getElementsByClassName(identity)[0];
}

function viewClassp(identity,position){
    return document.getElementsByClassName(identity)[position];
}

function viewTag(tagName){
    return document.getElementsByTagName(tagName);
}

function viewTagf(tagName,first){
    if(!first){
        return document.getElementsByTagName(tagName);
        }
        return document.getElementsByTagName(tagName)[0];
}

function viewTagp(tagName, position){
    return document.getElementsByTagName(tagName)[position];
}

function createElementWithClass(element,classname){
    let Element = document.createElement(element);
    Element.className = classname;
    return Element;
}

function createElementWithAtrr(element,type, attribute){
    let Element = document.createElement(element);
    Element.setAttribute(type,attribute);
}

export {
    viewID,
    viewClass,
    viewClassf,
    viewClassp,
    viewTagf,
    viewTagp,
    viewTag,
    createElementWithClass,
    createElementWithAtrr,
}
