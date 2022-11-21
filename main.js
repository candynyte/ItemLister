const form = document.querySelector("#addForm");
const main = document.querySelector("#main");
let itemList = document.querySelector("#items");
let filterBar = document.querySelector("#filter");

// Form submit event
form.addEventListener("submit", addItem);

// Remove item event
itemList.addEventListener("click",removeItem);

// Filtering item event
filterBar.addEventListener("keyup",filterItems)

function hide(element){
    element.style = "display:none;";
    
}

function addItem(e)
{   
    // preventing the events default behaviour(submit).
    e.preventDefault();

    var formInput = document.querySelector("#formInput");

    // Append items to itemList
    
    // Checking if item input is empty. 
    if (formInput.value === "") 
    {
        // Throwing a warning if input is empty.

        // Dont forget to add smoothness !!
        
        // Creating warning element.
        let warning = document.createElement("h6");
        warning.id = "warning";
        warning.className = "text-danger";
        warning.innerHTML = "Please enter item name.";
        // Making warning disappear after a certain miliseconds
        setTimeout(function(){hide(warning)}, 1000);
        main.insertBefore(warning,form);

        
    }
    else
    {
        // Creating li element
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(formInput.value));
        itemList.appendChild(li);

        // Creating the button for removing items.
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm float-end delete";
        deleteBtn.appendChild(document.createTextNode("X"));
        li.appendChild(deleteBtn);

        // Alternate way.

        // newItem.innerHTML = (formInput.value + " <button class='btn btn-danger btn-sm float-end'>X</button>"); 
        // itemList.insertBefore(newItem,itemList.children[-1]);

        // Done Btn
        // let doneBtn = document.createElement("button"); 
        // doneBtn.className = "btn btn-success btn-sm float-end done"
        // doneBtn.appendChild(document.createTextNode("D"));
        // li.appendChild(doneBtn);
    }
    // Reset the input value.
    formInput.value = "";
   
}


function removeItem(e){

    // e.target gives us the location of event and if location's classlist contains "delete" that means we are clicking the button! 

    if(e.target.classList.contains("delete"))
    { 
        itemList.removeChild(e.target.parentElement);
    }
}


function filterItems(e){
    let filterBarInput = e.target.value.toLowerCase();
    let items = document.getElementsByTagName("li");
    
    Array.from(items).forEach(function(item){
        let textofItem = item.firstChild.textContent;
        if(textofItem.toLowerCase().indexOf(filterBarInput) != -1){
            item.style.display = "block";
        }else{
            item.style.display="none";
        }    });

    // Alternate way

    // for(i=0; i<items.length; i++){
    //     textofItem = items[i].textContent || items[i].innerText;
    //     if(textofItem.toLowerCase().indexOf(filterBarInput) > -1){
    //         items[i].style.display="block";
    //     }else{
    //         items[i].style.display="none";
    //     }

    // }
}
