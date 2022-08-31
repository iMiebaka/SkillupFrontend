// const img = document.querySelector("img")

fetch("https://dog.ceo/api/breeds/image/random")
// Return a promise from the URL
.then(function(response){
    return response.json()
})
.then(function(result){
    console.log(result);
})
