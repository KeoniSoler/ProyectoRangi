let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info.data)
    let genero = document.querySelector (".genero")
    let todoslosgeneros = []
    for (let i = 1; i < info.data.length; i++){
        todoslosgeneros +=
        `<article>
        <img src= "${info.data[i].picture_medium}" alt="" />
        <p> ${info.data[i].name}  </p>
        </article>`
    }
    genero.innerHTML= todoslosgeneros
    console.log(todoslosgeneros);
})
.catch (function (error){
    alert (error)
})