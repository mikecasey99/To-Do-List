//  Referencing this video: https://www.youtube.com/watch?v=-pRg_daFjfk 
//  Doing this project purely for practice. 
let addButton = document.getElementById("add");
let toDoContainer = document.getElementById("todocontainer");
let inputField = document.getElementById("field")

addButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })
})
