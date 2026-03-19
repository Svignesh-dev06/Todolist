//selecting the all html tags

let input = document.getElementById("input-value")
let btn = document.getElementById("add-btn")
let results = document.getElementById("result")

let store = JSON.parse(localStorage.getItem("stores") || "[]")


store.forEach(function (item) {
    let h1 = document.createElement("h1")
    h1.style.color = "white"
    h1.textContent = item
    h1.style.textDecoration = "underline"
    results.append(h1)
    h1.style.cursor = "pointer"

})
btn.addEventListener("click", function () {

    let value = input.value

    if (value == "") {
        alert("Type Something Bro 😉")
        return
    }
    let h1 = document.createElement("h1")
    h1.style.color = "white"
    h1.textContent = value
    h1.style.textDecoration = "underline"
    h1.style.cursor = "pointer"
    results.append(h1)

    store.push(value)
    localStorage.setItem("stores", JSON.stringify(store))

    input.value = ""
})

results.addEventListener("click",function(){
    results.style.color="red"
})

results.addEventListener("dblclick", function (event) {
    let value = event.target.textContent
    event.target.remove()
    store = store.filter(function (items) {
        return items !== value
    })
    localStorage.setItem("stores", JSON.stringify(store))
})

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        btn.click()
    }
})
