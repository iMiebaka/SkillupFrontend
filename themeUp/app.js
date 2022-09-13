const div = document.querySelector("div")
const button = document.querySelector("button")


let themeState = true

if (localStorage.getItem("themeState") == null) {
    console.log("Does not exist");

    const data = JSON.stringify(themeState)
    localStorage.setItem("themeState", data)
    console.log("Database created 🛢️");
}
else {
    // Get what is in local storage
    const rawLocalstorage = localStorage.getItem("themeState")
    // convert local storage to object
    const data = JSON.parse(rawLocalstorage);
    // Update to sync local storage and note array
    themeState = data
}


button.addEventListener("click", switchUp)



function switchUp() {
    if (themeState) {
        div.classList.remove("theme-up")
        button.innerText = "Dark"
    }

    else {
        div.classList.add("theme-up")
        button.innerText = "Light"
    }
    themeState = !themeState
    const data = JSON.stringify(themeState)
    localStorage.setItem("themeState", data)
}


if (themeState) {
    div.classList.add("theme-up")
}

else {
    div.classList.remove("theme-up")
}