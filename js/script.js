document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar')
    const burger = document.querySelector('.fa-bars')
    const navbarLinks = document.querySelector('.navbar-collapse')
    const currentDate = document.querySelector('.current-date')

    const removeShowClass = () => {
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show')
        }
    }

    const addShadow = () => {
        if (window.innerWidth > 922) {
            if (window.scrollY >= 180) {
                navbar.classList.add('shadow-bg')
            } else {
                navbar.classList.remove('shadow-bg')
            }
        } else {
            if (window.screenY >= 0) {
                navbar.classList.add('shadow-bg')
            }
        }
    }

    const currentYear = () => {
        const date = new Date().getFullYear()
        currentDate.textContent = date
    }

    currentYear()

    navbarLinks.addEventListener('click', removeShowClass)
    burger.addEventListener('click', () => {
        if (!navbar.classList.contains('shadow-bg'))
            navbar.classList.add('shadow-bg')
    })
    window.addEventListener('scroll', addShadow)
})