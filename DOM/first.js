

ol = document.querySelector('ol')
ol.addEventListener('click',theme)

div = document.querySelector("div");
div.addEventListener("click", theme1);
// body = document.querySelector('body')
// body.addEventListener('click',theme1)

function theme(event) {
  event.target.classList.toggle("theme");
  event.stopPropagation()
}
function theme1(event) {
  console.log("clicked");
  event.currentTarget.classList.toggle("theme1");
}