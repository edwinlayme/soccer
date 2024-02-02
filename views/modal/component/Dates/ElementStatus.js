import {translateStatus} from "../../../../functions/translate/status.js";
import { createElement } from "../../../../functions/common/common.js";

function addStatus(status){
    const statusElement = createElement("span","status-match");
    statusElement.textContent = translateStatus(status.event_status);
    if(translateStatus(status.event_status).length<=4){
      statusElement.style.fontWeight = '600';
      statusElement.style.color = '#c31818';
    }
    return statusElement;
  }

export default addStatus;