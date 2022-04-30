let bg = document.getElementById('profile')
window.addEventListener('scroll',function(){
    bg.style.backgroundSize = 160 - + this.window.pageYOffset/8+'%';
    bg.style.opacity = 1 - + window.pageYOffset / 700 + '';
})