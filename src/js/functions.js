export default function createElement(tagName, className, idName, textContent) {
    const element = document.createElement(tagName);
    element.className = className;
    element.id = idName;
    element.textContent = textContent
    return element;
}
