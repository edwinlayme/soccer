import { createElement } from "../../../../functions/common/common.js";

function createClosedModal(text){
    const close = createElement("button","modal-closed");
    close.textContent = text;
    close.addEventListener('click', () => {
      const modal = document.getElementById('modal')
        modal.style.display = 'none';
    });
    return close;
  }

  export default createClosedModal;