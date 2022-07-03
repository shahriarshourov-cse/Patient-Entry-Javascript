let count = 0;
let countElement = document.getElementById("count-element");
let saveElement = document.getElementById("save-element");

function increment() {
  count = count + 1;
  countElement.textContent = count;
  console.log(count);
}
function savePatient() {
  let countString = count + "-";
  saveElement.textContent += countString;
  countElement.textContent = 0;
  count = 0;
}
