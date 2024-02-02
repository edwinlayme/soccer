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
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  export {createElement,removeFirstChild, capitalizeFirstLetter};