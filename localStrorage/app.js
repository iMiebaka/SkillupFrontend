const text = document.querySelector("input")
const add = document.querySelector("button")
const noteZone = document.querySelector("div")

let notes = []

if (localStorage.getItem("test-note") == null) {
    const data = JSON.stringify(notes)
    localStorage.setItem("test-note", data)
    console.log("Works only once");
}
else {
    // Get the notes from storage
    const rawNoteString = localStorage.getItem("test-note")
    // Convert it into javascript literal
    const noteData = JSON.parse(rawNoteString)
    
    // update the array with note from storage
    notes = noteData
    // Loop through the note
    for (let index = 0; index < noteData.length; index++) {

        // Append to the div for every iteration
        const element = document.createElement("p")
        element.innerText = noteData[index];
        noteZone.appendChild(element)
    }
}


add.addEventListener("click", function () {

    // Show it to the user
    const element = document.createElement("p")
    element.innerText = text.value
    noteZone.appendChild(element)


    // Update the array
    notes.push(text.value)

    // Convert it to string
    const data = JSON.stringify(notes)
    // Store it in the local-storage
    localStorage.setItem("test-note", data)

    // Clear the text box
    text.value = ""
})
