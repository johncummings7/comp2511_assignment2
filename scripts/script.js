const dropdown = document.getElementsByClassName('dropdown')[0]
const navItems = document.getElementsByClassName('nav-items')[0]

dropdown.addEventListener('click', () => {
    navItems.classList.toggle('active')
})