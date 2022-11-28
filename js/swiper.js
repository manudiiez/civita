const swiperButtons = document.querySelectorAll('#swiper .swiper-slide button')
const imgOpenContainer = document.querySelector('#imgOpen')
const imgOpenBg = document.querySelector('#imgOpen .bg')
const imgOpenImg = document.querySelector('#imgOpen img')

swiperButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const src = btn.dataset.src
        handleCLick(src)
        imgOpenContainer.classList.add('active')
    })
})

imgOpenContainer.addEventListener('click', () => {
    imgOpenContainer.classList.remove('active')
})

const handleCLick = (src) => {
    imgOpenImg.src = src
}

