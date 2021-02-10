//Product swatch selector (toggles between different colors + images on a product card)
function swatchSwitcher(e) {
    const swatch = e.dataset.id
    const card = e.parentNode.parentNode.parentNode
    const image = card.querySelector('.product-card--image[data-id="' + swatch + '"]')
    const images = card.querySelectorAll('.product-card--image')
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    image.style.display = 'block'
}

//Sticky Header
const header = document.querySelector('.header')
const headerHeight = header.scrollHeight
let lastScrollPos = 0

window.addEventListener('scroll', function (e) {
    stickyHeader()
})

document.addEventListener('DOMContentLoaded', function () {
    stickyHeader()
})

function stickyHeader() {
    let offsetTop = window.pageYOffset

    if (offsetTop < headerHeight) {
        header.classList.remove('header-sticky')
    }

    if (offsetTop >= lastScrollPos && offsetTop > headerHeight) {
        header.classList.add('header-unsticky')
        header.classList.remove('header-sticky')
    }

    if (offsetTop < lastScrollPos && offsetTop > headerHeight) {
        header.classList.add('header-sticky')
        header.classList.remove('header-unsticky')
    }

    lastScrollPos = offsetTop
}

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function () {
        if (this.elem) {
            this.elem.addEventListener('change', function (e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            })
        }
    },
}.init()

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>')

//Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordion = document.querySelectorAll('.accordion-title')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            let panel = this.nextElementSibling

            if (panel.style.maxHeight) {
                this.classList.remove('open')
                panel.style.maxHeight = null
                panel.setAttribute('aria-hidden', true)
                panel.setAttribute('aria-expanded', false)
            } else {
                this.classList.add('open')
                panel.style.maxHeight = panel.scrollHeight + 'px'
                panel.setAttribute('aria-hidden', false)
                panel.setAttribute('aria-expanded', true)
            }
        })
    }
})

//Flickity Carousel
$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
})

$('.slideshow .container').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
})

$('.product-slider').flickity({
    cellSelector: '.product-card',
    wrapAround: false,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
    groupCells: 3,
})

//Universal Tables
$('table').wrap("<div class='universal-table'></div>")

//PDO Page loader
document.addEventListener('DOMContentLoaded', function () {
    let pdoElement = document.getElementById('pdopage')
    if (pdoElement) {
        let loadState = document.createElement('div')
        loadState.classList.add('pdo-loader')
        loadState.setAttribute('aria-hidden', true)
        //loadState.textContent = 'Loading';

        pdoElement.appendChild(loadState)

        if (pdoPage) {
            pdoPage.callbacks['before'] = function (config) {
                document.querySelector('.pdo-loader').classList.add('pdo-loading')
            }
            pdoPage.callbacks['after'] = function (config) {
                document.querySelector('.pdo-loader').classList.remove('pdo-loading')
            }
        }
    }
})
