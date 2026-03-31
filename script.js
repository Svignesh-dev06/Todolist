// Selecting the HTML elements
let input = document.getElementById("input-value");
let btn = document.getElementById("add-btn");
let results = document.getElementById("result");
let emptyState = document.getElementById("empty-state");

let store = JSON.parse(localStorage.getItem("stores") || "[]");

// display the todo items
function renderTodos() {
    results.innerHTML = "";
    
    store.forEach(function (item) {
        let todoItem = document.createElement("div");
        todoItem.className = "todo-item";
        
        let textSpan = document.createElement("span");
        textSpan.className = "todo-text";
        textSpan.textContent = item;
        
        let deleteBtn = document.createElement("span");
        deleteBtn.className = "todo-delete";
        deleteBtn.textContent = "✕";
        
        todoItem.appendChild(textSpan);
        todoItem.appendChild(deleteBtn);
        
        results.appendChild(todoItem);
    });
    
    // empty show or hide 
    if (store.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}


renderTodos();
//Add button click event
btn.addEventListener("click", function () {
    let value = input.value.trim();

    if (value === "") {
        alert("Please type something! 😊");
        return;
    }
    
    store.push(value);
    localStorage.setItem("stores", JSON.stringify(store));
    renderTodos();
    input.value = "";
    input.focus();
});

// Delete button click event
results.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo-delete")) {
        let value = event.target.parentElement.querySelector(".todo-text").textContent;
        store = store.filter(function (items) {
            return items !== value;
        });
        localStorage.setItem("stores", JSON.stringify(store));
        renderTodos();
    }
});


//enter key press event
input.addEventListener("keypress" , (e) =>{
    if(e.key === "Enter"){
        btn.click();
    }
})
