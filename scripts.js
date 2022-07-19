// Criar uma função para adicionar e retirar as classes menu-closed e menu-opened
const header = document.querySelector('#home header')
const open_Menu = document.querySelector('#open-menu')
const close_Menu = document.querySelector('#close-menu')
const menu = document.querySelector('#menu')
const html = document.querySelector('html')
const body = document.querySelector('body')

function openMenu() {
  if (scrollY >= 100) {
    header.classList.add('t-none')
  }
  header.classList.add('menu-opened')
  open_Menu.classList.add('menu-opened')
  menu.classList.add('menu-opened')
  close_Menu.classList.remove('menu-closed')
  html.classList.add('overflow-hidden')
  body.classList.add('overflow-hidden')
}

function closeMenu() {
  if (scrollY >= 100) {
    header.classList.add('t-none')
  } else {
    header.classList.remove('menu-opened')
  }
  open_Menu.classList.remove('menu-opened')
  menu.classList.remove('menu-opened')
  close_Menu.classList.add('menu-closed')
  html.classList.remove('overflow-hidden')
  body.classList.remove('overflow-hidden')

}
document.addEventListener('scroll', changeHeader)
document.addEventListener('scroll', changeHeaderBack)

function changeHeader() {
  if (scrollY >= 100) {
    header.classList.add('menu-opened')
  }
}

function changeHeaderBack() {
  if (scrollY < 100) {
    header.classList.remove('menu-opened')
  }
}