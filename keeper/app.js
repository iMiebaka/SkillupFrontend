const keeper = document.getElementById("text-area")
const form = document.querySelector("form")
const noteArea = document.getElementById("note-area")

if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", "")
}
else{
    const data =  JSON.parse(localStorage.getItem("notes"))
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const p = document.createElement("p")
        p.classList.add("single-note")
        p.innerText = element
        noteArea.appendChild(p)
    }
}
let notes = []


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const p = document.createElement("p")
    p.classList.add("single-note")
    p.innerText = keeper.value
    noteArea.appendChild(p)

    notes.push(keeper.value)
    const datbaseObj = JSON.stringify(notes)
    localStorage.setItem("notes", datbaseObj)
    keeper.value = ""
})





// noteArea.append(`<p class="single-note"> 
// ${keeper.value} </p>`)