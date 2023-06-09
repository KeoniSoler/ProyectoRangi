fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (info){
    console.log(info)
    let genero = document.querySelector (".genero")
    let listageneros = []
    for (let i = 1; i < info.data.length; i++){
        listageneros +=
        `<article>
        <img src= "${info.data[i].picture}" alt="" />
        <p>Name:  ${info.data[i].name}  </p>
        </article>`
    }
    genero.innerHTML= listageneros
    console.log(listageneros);
})
.catch (function (error){
    alert (error);
    console.log('Error:', error);
})

const checkbox = document.getElementById('dark-mode-checkbox');
const body = document.body;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});