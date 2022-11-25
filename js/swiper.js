const swiperButtons = document.querySelectorAll('#swiper .swiper-slide button')
const imgOpenContainer = document.querySelector('#imgOpen')
const imgOpenBg = document.querySelector('#imgOpen .bg')
const imgOpenImg = document.querySelector('#imgOpen img')
console.log(imgOpenBg);

swiperButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const src = btn.dataset.src
        handleCLick(src)
        imgOpenContainer.classList.add('active')
    })
})

imgOpenBg.addEventListener('click', () => {
    console.log('click');
    imgOpenContainer.classList.remove('active')
})

const handleCLick = (src) => {
    imgOpenImg.src = src
}

