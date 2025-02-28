let parent = document.querySelector("#content");
for (let index = 1; index < 11; index++) {
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(`2 x ${index} = ${2 * index}`));
  parent.appendChild(p);
}



function theme(event) {
  event.currentTarget.parentElement.classList.toggle("dark");
  event.stopPropagation();
}



button = document.querySelectorAll("button");
for (const element of button) {
  element.addEventListener("click", theme);
}

let row = document.querySelector(".row");
row.addEventListener("click", () => {
  console.log("row element is clicked");
});

function theme1(event) {
  event.currentTarget.classList.toggle("dark");
}
let body = document.querySelector("body");
body.addEventListener("click", theme1);
