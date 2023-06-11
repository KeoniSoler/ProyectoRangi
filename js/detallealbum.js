
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(info) {
    console.log(info);
    let album = document.querySelector(".album");
    let albumInfo = `
      <article>
        <img src="${info.picture_medium}" alt="" />
        <p>${info.title}</p>
      </article>
    `;
    album.innerHTML = albumInfo;
  })
  .catch(function(error) {
    console.log(error);
  });


   /* modo noche */
let checkbox = document.getElementById('dark-mode-checkbox');
let body = document.body;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
 /* modo noche */
