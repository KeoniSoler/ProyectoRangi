

function cambiarModo() {
if (document.body.classList.contains('dark-mode')){
    modoClaro();
    preferredMode = 'light-mode'
}
else{
    modoOscuro();
    preferredMode = 'dark-mode' 
}
localStorage.setItem('preferredMode', preferredMode)
}