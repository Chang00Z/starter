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

document.querySelector(".container").addEventListener("click", (event) => {
  if (!event.target.classList.contains("container")) {
    event.target.classList.toggle("delete");
  }
});

let isReverse = false;
document.querySelector(".sortButton").addEventListener("click", () => {
  const container = document.querySelector(".container");
  const itemsArray = Array.from(container.querySelectorAll("div"));
  itemsArray.sort((a, b) => {
    const textA = a.textContent.trim();
    const textB = b.textContent.trim();
    if (isReverse) {
      return textB.localeCompare(textA, "zh");
    }
    return textA.localeCompare(textB, "zh");
  });
  isReverse = !isReverse;

  container.innerHTML = "";
  itemsArray.forEach((item) => container.appendChild(item));
});
