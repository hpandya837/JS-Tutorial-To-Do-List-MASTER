// CODE EXPLAINED channel
//select the elements

// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
// Classes names
const LINE_THROUGH = "lineThrough";
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Get item from local storage
let data = localStorage.getItem("TODO");

//Check if data is not empty

//Add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));


//show todays date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = newDate();
//Variables
let LIST, id;
let LIST = []
,id = 0;

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

dateElement.innerHtml = today.toLocalDateString("en-US", options);
// Add to do function
function addToDo(toDo, id, done, trash) {
    if(trash){return;}
    addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false

      });
      id++;
//Add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));


      id++;
      //Load items to the user's interface
      function loadList(array){
          array.forEach(function(item){
              addToDo(item.name, item.id, item.done, item.trash);
          })
      }
      //clear the local storage
      clear.addEventListener("click", function(){
          localStorage.clear();
          location.reload();
      })
    }

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
//Complete the to-do function
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    LIST[element.id].done = LIST[element.id].done ? false:true;
}

if(data){
    LIST = JSON.parse(data);
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST); //load the list to the user interface
}else{ 
    //if data is not empty
    LIST = [];
    id = 0;
}
LIST[element.id].done = LIST[element.id].done ? false:true;
}
//Remove the to-do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;

    //Target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; //returns the clicked element inside list
    const elementJob = element.attributes.job.value //complete or delete

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "remove"){
        removeToDo(element);
    }
})
 //Add item to local storage
 localStorage.setItem("TODO", JSON.stringify(LIST));
})
}