const menu = document.getElementById('menu')
const button__open__menu = document.getElementById('button__bars')
const button__close__menu = document.getElementById('button__xmark')
const button__bg__menu = document.getElementById('bg__click')
const links = document.querySelectorAll('.link__button')

button__open__menu.addEventListener('click', () => {
    menu.classList.add('active')
})
button__close__menu.addEventListener('click', () => {
    menu.classList.remove('active')
})
button__bg__menu.addEventListener('click', () => {
    menu.classList.remove('active')
})
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')

    })
})
window.addEventListener('scroll', function(){
    menu.classList.toggle('bg__dark', window.scrollY>380)

})

const media__container = document.getElementById('media')
const media__open__button = document.getElementById('fixed__media')
const media__close__button = document.getElementById('media__close')
const media__bg = media__container.querySelector('.bg')

media__open__button.addEventListener('click', () => {
    media__container.classList.add('active')
})
media__bg.addEventListener('click', () => {
    media__container.classList.remove('active')
    console.log('remove')
})
media__close__button.addEventListener('click', () => {
    media__container.classList.remove('active')
    console.log('remove')
})
