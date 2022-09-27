const img = document.querySelector("img")

// fetch("https://dog.ceo/api/breeds/image/random")
// // Return a promise from the URL
// .then(function(response){
//     return response.json()
// })
// .then(function(result){
//     console.log(result);
// })



// async function getDogs () {

// }

const getDogs = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    return result
}

setInterval(() => {
    getDogs("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        img.src = res.message
        console.log(res);
    })
}, 5000)
