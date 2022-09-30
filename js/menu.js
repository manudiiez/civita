const menu = document.getElementById('menu')
const button__open__menu = document.getElementById('button__bars')
const button__close__menu = document.getElementById('button__xmark')
const button__bg__menu = document.getElementById('bg__click')

button__open__menu.addEventListener('click', () => {
    menu.classList.add('active')
})
button__close__menu.addEventListener('click', () => {
    menu.classList.remove('active')
})
button__bg__menu.addEventListener('click', () => {
    menu.classList.remove('active')
})


window.addEventListener('scroll', function(){
    menu.classList.toggle('bg__dark', window.scrollY>380)
})