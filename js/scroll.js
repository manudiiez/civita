const sr = ScrollReveal()
// NOSOTROS

sr.reveal('.animation__reveal__left', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
})


sr.reveal('.animation__reveal__right', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
})

sr.reveal('.animation__reveal__top', {
    duration: 3000,
    origin: 'top',
    distance: '100px'
})

sr.reveal('.animation__reveal__bottom', {
    duration: 3000,
    origin: 'bottom',
    distance: '80px'
})

sr.reveal('.animation__reveal', {
    duration: 3000
})

sr.reveal('.animation__scale', {
    duration: 3000,
    scale: 0.85
})