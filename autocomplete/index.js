const input = document.querySelector(".input")

input.addEventListener("keyup", function (e) {

    if (input.value.length > 0) {
        if (input.value.length == 3 || input.value.length == 8 || input.value.length == 14) {
            const photoCopy = input.value + " "
            input.value = photoCopy
        }

    }

})


input.focus()
