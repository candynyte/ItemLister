const form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");

// Form submit event

form.addEventListener("submit", addItem);
console.log(itemList);

function addItem(e)
{
    e.preventDefault();
    const formInput = document.querySelector("#formInput");

    // Append to list
    
    if (formInput.value === "") 
    {
        // Warning if input is empty.

        // const main = document.querySelector("#main");
        // const warning = document.createElement("h6");
        // warning.className = "text-danger";
        // warning.innerHTML = "Please enter item name.";

        // setTimeout(warning.setAttribute("style","display:none;"), 5000);
        // main.insertBefore(warning,form);  
    }
    else
    {
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.innerHTML = (formInput.value + " <button class='btn btn-danger btn-sm float-end'>X</button>"); 
    itemList.insertBefore(newItem,itemList.children[-1]);
    }
    formInput.value = "";
   
}
