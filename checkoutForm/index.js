const cardNumber = document.querySelector(".card-number")
const expirationDate = document.querySelector(".expiration-date")
const cvcNumber = document.querySelector(".cvc-number")
const model = document.querySelector(".card-modal")
const isLoadingBtn = document.querySelector(".isloading-btn")
const staticBtn = document.querySelector(".static-btn")
const cardContainer = document.querySelector(".card-container")

let isPaying = false

if (isPaying) {
    isLoadingBtn.style.display = "block"
    staticBtn.style.display = "none"
}
else {
    isLoadingBtn.style.display = "none"
    staticBtn.style.display = "flex"
}


cardContainer.addEventListener("submit", function (e) {
    e.preventDefault()

    isPaying = true
    isLoadingBtn.style.display = "block"
    staticBtn.style.display = "none"
})

cardNumber.addEventListener("keydown", function (obj) {
    let value = cardNumber.value
    if (value.length > 0) {
        if (obj.key == "Backspace") {
            if (value.length == 6 || value.length == 11 || value.length == 16)
                cardNumber.value = value.slice(0, value.length - 1)
        }
        else if (obj.key == "Delete") {
            console.log(value.length);
            if (value.length == 5 || value.length == 10 || value.length == 15)
                cardNumber.value = value.slice(0, value.length - 1)

        }
        else {
            if (value.length == 4 || value.length == 9 || value.length == 14) {
                cardNumber.value = value + " "
            }
            if (value.length == 19) {
                expirationDate.focus()
            }
        }
    }
})

expirationDate.addEventListener("keydown", function (obj) {
    let value = expirationDate.value
    if (value.length > 0) {
        if (obj.key == "Backspace") {
            if (value.length == 4) {
                expirationDate.value = value.slice(0, value.length - 1)
            }
        }
        else if (obj.key == "Delete") {

        }

        else {
            if (obj.key != "/" && value.length == 2) {
                expirationDate.value = value + "/"
            }
            if (value.length == 5) {
                cvcNumber.focus()
            }
        }
    }
})

model.addEventListener("click", function (obj) {
    console.log("Check");

})
