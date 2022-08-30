
fetch("https://catfact.ninja/fact")
// Return a promise from the URL
.then(function (response) {
    // the converted data and return as a promise
    return response.json()
}).then(function (result) {
    // Return the javascript object gotten from the response.json
    console.log(result.fact);
})
