const form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filterBar = document.querySelector("#filter");

// Form submit event

form.addEventListener("submit", addItem);
// console.log(itemList);

// Remove item event

itemList.addEventListener("click",removeItem);
filterBar.addEventListener("keyup",filterItems)
// itemList.addEventListener("click",tagForDone);


function hide(element){
    element.style = "display:none;";
    
}

function addItem(e)
{   
    // preventing the events default behaviour (submit).
    e.preventDefault();
    var formInput = document.querySelector("#formInput");

    // Append items to itemList
    
    if (formInput.value === "") 
    {
        // Warning if input is empty.

        // Dont forget to add smoothness !!

        const main = document.querySelector("#main");

        // creating warning element.
        let warning = document.createElement("h6");
        warning.id = "warning";
        warning.className = "text-danger";
        warning.innerHTML = "Please enter item name.";
        setTimeout(function(){hide(warning)}, 1000);
        main.insertBefore(warning,form);

        
    }
    else
    {

        // creating li element
        let li = document.createElement("li");
        li.className = "list-group-item";


        // alternative way.

        // newItem.innerHTML = (formInput.value + " <button class='btn btn-danger btn-sm float-end'>X</button>"); 
        // itemList.insertBefore(newItem,itemList.children[-1]);

        li.appendChild(document.createTextNode(formInput.value));
        itemList.appendChild(li);

        // Creating the button for removing items
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm float-end delete";
        deleteBtn.appendChild(document.createTextNode("X"));
        li.appendChild(deleteBtn);

        // Done Btn
        // let doneBtn = document.createElement("button"); 
        // doneBtn.className = "btn btn-success btn-sm float-end done mr-4"
        // doneBtn.appendChild(document.createTextNode("D"));
        // li.appendChild(doneBtn);
    }
    formInput.value = "";
   
}


function removeItem(e){

    // target gives us the location of event and if location's classlist contains "delete" that means we are clicking the button. 

    if(e.target.classList.contains("delete"))
    { 
        itemList.removeChild(e.target.parentElement);

        // if(confirm("Are you sure ? ")){
        //     itemList.removeChild(e.target.parentElement);
        // }
        // console.log(1)
    }
}


function filterItems(e){
    let filterBarInput = filterBar.value.toLowerCase();
    let items = document.getElementsByTagName("li");
    
    for(i=0; i<items.length; i++){

        textofItem = items[i].textContent || items[i].innerText;
        if(textofItem.toLowerCase().indexOf(filterBarInput) > -1){
            items[i].style.display="";
        }else{
            items[i].style.display="none";
        }

    }
}




// function tagForDone(e){
//     if(e.target.classList.contains("done"))
//     { 
//         e.target.parentElement.style.textDecoration = "line-through"        
//     }

// }