function addTaskInList() {
  let input = document.getElementsByTagName("input")[0];
  let inputValue = input.value;
  let list = document.querySelector("div.list");

  if (inputValue) {
    createCheckboxItem(inputValue, list);

    input.value = "";
    input.focus();
  } else {
    window.alert("Digite uma tarefa");
    input.value = "";
    input.focus();
  }
}

function createCheckboxItem(inputTask, list) {
  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("name", inputTask);
  inputElement.setAttribute("id", inputTask);

  let label = document.createElement("label");
  let taskDescription = document.createTextNode(inputTask);

  label.setAttribute("for", inputTask);
  label.appendChild(taskDescription);
  
  let container = document.createElement("div");
  
  container.classList.add("item");
  container.appendChild(inputElement);
  container.appendChild(label);

  list.appendChild(container);
}