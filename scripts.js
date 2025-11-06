const button_incremet = document.getElementById('increment')
const button_decrement = document.getElementById('decrement')
const button_reset = document.getElementById('reset')
const view = document.getElementById('view-count')
let count = 0

view.innerHTML = count
button_incremet.addEventListener('click', function () {
  count = count + 1
  view.innerHTML = count
})


button_decrement.addEventListener('click', function () {
  count = count - 1
  view.innerHTML = count
})

button_reset.addEventListener('click', function () {
  count = 0
  view.innerHTML = count
})