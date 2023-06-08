let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info)
    let genero = document.querySelector (".genero")
    let todoslosgeneros = []
    for (let i = 1; i < info.data.length; i++){
        todoslosgeneros +=
        `<article>
        <img src= "${info.data[i].picture}" alt="" />
        <p>Name:  ${info.data[i].name}  </p>
        </article>`
    }
    genero.innerHTML= todoslosgeneros
    console.log(todoslosgeneros);
})
.catch (function (error){
    alert (error)
})