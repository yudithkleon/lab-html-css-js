const button_incremet = document.getElementById("increment");
const button_decrement = document.getElementById("decrement");
const button_reset = document.getElementById("reset");
const view = document.getElementById("view-count");
let count = 0;

view.innerHTML = `<h2 id="h2-count">${count}</h2>`;
button_incremet.addEventListener("click", function () {
  count = count + 1;
  view.innerHTML = `<h2 id="h2-count">${count}</h2>`;
});

button_decrement.addEventListener("click", function () {
  count = count - 1;

  validar_color(count);
  view.innerHTML = `<h2 id="h2-count">${count}</h2>`;
});

button_reset.addEventListener("click", function () {
  count = 0;

  validar_color(count);
  view.innerHTML = `<h2>${count}</h2>`;
});

const validar_color = (count) => {
  if (count >= 10) {
     view.style.color ="red"
  } else {
     
  }
  if (count < 0) {
    console.log("cambiar de color");
    button_decrement.style.background ="rgba(83, 69, 69, 1)"
  }else{
    button_decrement.style.background ="rgb(175, 22, 22)"
  }
};
