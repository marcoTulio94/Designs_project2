

//navbar menu
const toggleButton = document.getElementsByClassName('toggle__button')[0];
const navbarLink = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    navbarLink.classList.toggle('active');
})