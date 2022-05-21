import './css/reset.css'
import './css/index.css'
import galleryImg from './assets/gallery.png'
import searchImg from './assets/search.png'
import shareImg from './assets/share.png'
import libraryImg from './assets/library.png'

const navBar = (() => {
    const navImageElements = []
    const navElements = []

    function resetSelected() {
        navImageElements.forEach((imageElement) => {
            imageElement.classList.remove('selected')
        })
    }

    function selectButton(imgElement, backgroundElement) {
        resetSelected()
        imgElement.classList.add('selected')

        // eslint-disable-next-line no-param-reassign
        backgroundElement.style.display = 'block'
        setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            backgroundElement.style.display = 'none'
        }, 390)
    }

    function getNavElement([
        { icon0, text0 },
        { icon1, text1 },
        { icon2, text2 },
        { icon3, text3 },
    ]) {
        const nav = document.createElement('div')
        nav.classList.add('nav')
        for (let i = 0; i < 4; i += 1) {
            const elem = document.createElement('div')
            elem.classList.add('nav-item')
            navElements.push(elem)
        }

        navElements.forEach((item, i) => {
            let backgroundImg = ''
            let textContent = ''
            if (i === 0) {
                backgroundImg = icon0
                textContent = text0
            } else if (i === 1) {
                backgroundImg = icon1
                textContent = text1
            } else if (i === 2) {
                backgroundImg = icon2
                textContent = text2
            } else if (i === 3) {
                backgroundImg = icon3
                textContent = text3
            }

            const imgElement = document.createElement('img')
            // First element is selected by default
            if (i === 0) imgElement.classList.add('selected')
            imgElement.src = backgroundImg
            item.appendChild(imgElement)
            navImageElements.push(imgElement)

            const textELement = document.createElement('p')
            textELement.textContent = textContent
            item.appendChild(textELement)

            const backgroundElement = document.createElement('div')
            backgroundElement.classList.add('animation')
            item.appendChild(backgroundElement)

            item.addEventListener('click', () => {
                selectButton(imgElement, backgroundElement)
            })
        })
        navElements.forEach((elem) => {
            nav.appendChild(elem)
        })
        return nav
    }

    return { getNavElement }
})()

Testing
const bar = navBar.getNavElement([
    { icon0: galleryImg, text0: 'Photos' },
    { icon1: searchImg, text1: 'Search' },
    { icon2: shareImg, text2: 'Share' },
    { icon3: libraryImg, text3: 'Library' },
])
document.body.appendChild(bar)

export default navBar
