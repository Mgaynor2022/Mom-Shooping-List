const form = document.addItem;
const input = document.getElementById("title");
const message = document.createElement("li")

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const message = document.createElement("li")
    message.textContent = input.value;

    const list = document.getElementById("list")
    list.prepend(message);


    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    message.appendChild(deleteBtn)
    
    deleteBtn.addEventListener("click", function(){
        message.remove();
    })
    console.log(input.value)
    input.value =""
   
});
 