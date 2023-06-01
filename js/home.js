function togglemode() {
if (document.body.classList.contains('dark-mode')){
    enableLightMode();
    preferredMode = 'light-mode'
}
else{
    enableDarkMode();
    preferredMode = 'dark-mode' 
}
localStorage.setItem('preferredMode', preferredMode)
}