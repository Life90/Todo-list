const inputText = document.querySelector("#txt");
const myBtn = document.querySelector(".add-list");
const myTodoList = document.querySelector(".my-list ul");
myBtn.addEventListener("click", (e) => {
  if (inputText.value != "") {
    e.preventDefault();

    //create li
    const newList = document.createElement("li");
    newList.innerHTML = inputText.value;
    myTodoList.appendChild(newList);
    //create span
    const mySpan = document.createElement("span");
    mySpan.innerHTML = "x";
    newList.appendChild(mySpan);
  }

  const close = document.querySelectorAll("span");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.style.opacity = 0;
      setTimeout(() => {
        close[i].parentElement.style.display = "none";
        close[i].parentElement.remove();
      }, 500);
    });
  }
  inputText.value = "";
});
