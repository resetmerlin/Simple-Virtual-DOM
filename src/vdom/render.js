const renderElem = ({ tagName, attrs, children }) => {
  const appElement = document.createElement(tagName);
  const textNode = document.createTextNode('Hello world');

  // set attribute
  for (const [key, value] of Object.entries(attrs)) {
    console.log(key, value);
    appElement.setAttribute(key, value);
  }

  // set children
  for (const child of children) {
    const renderedChild = render(child);
    if (child.tagName == 'button') {
      renderedChild.appendChild(textNode);
    }

    appElement.appendChild(renderedChild);
  }

  return appElement;
};

const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }
  return renderElem(vNode);
};

export default render;
