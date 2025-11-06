const button_incremet = document.getElementById("increment");
const button_decrement = document.getElementById("decrement");
const button_reset = document.getElementById("reset");
const view = document.getElementsByClassName("view-count")
let count = 0;

button_incremet.addEventListener('click', function () {
      count = count + 1
  console.log(count)
  
});


