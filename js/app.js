// CODE EXPLAINED channel
//select the elements

// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show todays date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = newDate();
//Variables
let LIST, id;

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

dateElement.innerHtml = today.toLocalDateString("en-US", options);
// Add to do function
function addToDo(toDo, id, done, trash) {
    if(trash){return;}

//add to do function
function addToDo(toDo){
    const item = `<li class="item">
    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
    <p class="text">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i>
    </li>
    `
    const position = "beforeend";
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    list.insertAdjacentHTML(position, item);
  const item = `
    <li class="item">
      <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>`;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}
addToDo("drink coffee");

// Add an item to the list using the enter key
document.addEventListener("keyup", function(even) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    // If the input is not empty
    if (toDo) {
      addToDo(toDo);
      LIST.push()
    }
    input.value = "";
  }
});
// Example usage
addToDo("Coffee", 1, true, false,);