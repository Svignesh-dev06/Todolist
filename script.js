// Selecting the HTML elements
let input = document.getElementById("input-value");
let btn = document.getElementById("add-btn");
let results = document.getElementById("result");
let emptyState = document.getElementById("empty-state");

let store = JSON.parse(localStorage.getItem("stores") || "[]");

// Function to render todos
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
    
    // Show/hide empty state
    if (store.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}

// Render initial todos
renderTodos();

// Add button click event
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

// Delete todo on click
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

// Enter key to add
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        btn.click();
    }
});
