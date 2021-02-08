const elementosHTML = (selector) => {
    return document.querySelectorAll(selector);
}

const elementoHTML = (selector) => {
    return document.querySelector(selector);
}

export { elementoHTML, elementosHTML };