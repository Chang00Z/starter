import "./style.css";

document.querySelector(".addButton").addEventListener("click", () => {
  const inputElement = document.querySelector(".input");
  if (inputElement.value) {
    const newItem = document.createElement("div");
    newItem.innerText = inputElement.value;
    const container = document.querySelector(".container");
    container.appendChild(newItem);
  }
});
