var count = 1
var countElement = document.querySelector("#count")
function add1(){
    count++;
    countElement.innerText="The count is:" + count
    
}
function subtract1(){
    count--;
    countElement.innerText="The count is:" + count
    
}