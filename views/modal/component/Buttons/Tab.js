const createTab = (idName, nameInput, checked, label) => {
  const elems = {
      tabInput: document.createElement("input"),
      tabLabel: document.createElement("label"),
  };
  elems.tabInput.type = "radio";
  elems.tabInput.id = idName;
  elems.tabInput.name = nameInput;
  elems.tabInput.checked = checked;
  elems.tabLabel.setAttribute("for", idName);
  elems.tabLabel.textContent = label;

  return elems;
}

export default createTab;