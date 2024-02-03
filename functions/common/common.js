function createElement(tag, className) {
    const el = document.createElement(tag);
    el.classList.add(className);
    return el;
  }
  function removeFirstChild(parentElement) {
    if (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  export {createElement,removeFirstChild};