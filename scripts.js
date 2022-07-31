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

// SKILLS

// tentar fazer usando parametros ...
let showSkillBar = () => {
  if (scrollY >= 2800) {
    document.getElementById('skill-1').classList.add('full')
    document.getElementById('skill-2').classList.add('full')
    document.getElementById('skill-3').classList.add('full')
    document.getElementById('skill-4').classList.add('full')
  }
}
window.addEventListener('scroll', showSkillBar)

// PORTFOLIO

// const jobsArr = document.querySelectorAll('.project-box')
// let arrayJobsArr = Array.from(jobsArr)

// function filterJobs(selector) {
//   let selectThem = selector.classList[0]

//   let newArr = arrayJobsArr.filter(function(item) {
//     return item.classList[1] == selectThem || item.classList[2] == selectThem
//     })

//   let projects = document.querySelector('#projects')
//   projects.innerHTML = ""
  
//   setTimeout(() => {
//     for (let i = 0; i < newArr.length; ++i) {
//       let item = newArr[i]
//       projects.append(item)
//     }
//   }, 1)
// }



let filterWeb = () => {
  let app = document.getElementsByClassName('app')
    for (i = 0; i <= app.length -1; i++) {
      app[i].classList.add('hide-display')
    }

  let photo = document.getElementsByClassName('photo')
    for (i = 0; i <= photo.length -1; i++) {
      photo[i].classList.add('hide-display')

    }

    let web = document.getElementsByClassName('web')
    for (i = 0; i <= web.length -1; i++) {
      web[i].classList.remove('hide-display')
    }
}

let filterApp = () => {
  let web = document.getElementsByClassName('web')
    for (i = 0; i <= web.length -1; i++) {
      web[i].classList.add('hide-display')
    }

  let photo = document.getElementsByClassName('photo')
    for (i = 0; i <= photo.length -1; i++) {
      photo[i].classList.add('hide-display')
    }

    let app = document.getElementsByClassName('app')
    for (i = 0; i <= app.length -1; i++) {
      app[i].classList.remove('hide-display')
    }
}


let filterPhoto = () => {
  let app = document.getElementsByClassName('app')
    for (i = 0; i <= app.length -1; i++) {
      app[i].classList.add('hide-display')
    }

  let web = document.getElementsByClassName('web')
    for (i = 0; i <= web.length -1; i++) {
      web[i].classList.add('hide-display')
    }

    let photo = document.getElementsByClassName('photo')
    for (i = 0; i <= photo.length -1; i++) {
      photo[i].classList.remove('hide-display')
    }
}

let showAll = () => {
  let app = document.getElementsByClassName('app')
    for (i = 0; i <= app.length -1; i++) {
      app[i].classList.remove('hide-display')
    }

  let web = document.getElementsByClassName('web')
    for (i = 0; i <= web.length -1; i++) {
      web[i].classList.remove('hide-display')
    }

    let photo = document.getElementsByClassName('photo')
    for (i = 0; i <= photo.length -1; i++) {
      photo[i].classList.remove('hide-display')
    }
  }

// contador do count-box
const numberArray = document.querySelectorAll('.count-box h4')

function doThis () {
  if (scrollY >= 2400 && parseInt(numberArray[0].innerHTML) === 0) {
    setInterval0()
    setInterval1()
    setInterval2()
    setInterval3()
  }
}

function setInterval0() {
  let x = parseInt(numberArray[0].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[0].innerHTML = x

     if (x++ === 100) {
         window.clearInterval(intervalo);
     }
  }, 60);
}

function setInterval1() {
  let x = parseInt(numberArray[1].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[1].innerHTML = x

     if (x++ === 50) {
         window.clearInterval(intervalo);
     }
  }, 60);
}

function setInterval2() {
  let x = parseInt(numberArray[2].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[2].innerHTML = x

     if (x++ === 10) {
         window.clearInterval(intervalo);
     }
  }, 60);
}

function setInterval3() {
  let x = parseInt(numberArray[3].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[3].innerHTML = x

     if (x++ === 20) {
         window.clearInterval(intervalo);
     }
  }, 60);
}

window.addEventListener('scroll', doThis)