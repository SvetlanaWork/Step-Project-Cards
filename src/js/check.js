export default function createName(tagName, name, id) {
    const element = document.createElement(tagName);
    element.name = name;
    element.id = id;
    return element;
}