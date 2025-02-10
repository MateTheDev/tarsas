const headerRight = document.querySelector('.header-right')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    headerRight.style.display = 'flex';
    headerRight.style.top = '0';
}

function close() {
    headerRight.style.top = '-110vh';
}