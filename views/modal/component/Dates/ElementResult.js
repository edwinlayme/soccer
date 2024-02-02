import {formatResult} from "../../../../functions/dates/format.js";
import { createElement } from "../../../../functions/common/common.js";

function addResult(result){
    const matchResult = createElement("div","result-match");
    matchResult.textContent = formatResult(result.event_final_result);  
    return matchResult;
  }
export default addResult;