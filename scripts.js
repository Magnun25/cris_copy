// Criar uma função para adicionar e retirar as classes menu-closed e menu-opened

window.addEventListener('scroll', onScroll)


function onScroll () {
  changeHeader()
  changeHeaderBack()
  showSkillBar()
  showBtnToTop()
  // activeMenuAtCurrentSection(home)
  // activeMenuAtCurrentSection(about)
  // activeMenuAtCurrentSection(services)
  // activeMenuAtCurrentSection(skills)
  // activeMenuAtCurrentSection(portfolio)
  // activeMenuAtCurrentSection(experience)
  // activeMenuAtCurrentSection(testimonials)
  // activeMenuAtCurrentSection(contact)
}
const btnToTop = document.querySelector('#btn-to-top')
function showBtnToTop() {
  if (scrollY > 715) {
    btnToTop.style.opacity = "1"
    btnToTop.style.visibility = "visible"
  } else if (scrollY <= 715 ) {
    btnToTop.style.opacity = "0"
    btnToTop.style.visibility = "hidden"
  }
}


function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBounderies = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  // continuar depois que fizer o site para pc


}




const header = document.querySelector('#header header')
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

function changeHeader() {
  if (scrollY >= 100) {
    header.classList.add('menu-opened')

    document.querySelectorAll('#menu a').forEach((item)=>{
      item.classList.remove('colorMenu')
    })
  }
}

function changeHeaderBack() {
  if (scrollY < 100) {
    header.classList.remove('menu-opened')
    document.querySelectorAll('#menu a').forEach((item)=>{
      item.classList.add('colorMenu')
    })
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
  if (scrollY >= 2400 && parseInt(numberArray[0].innerHTML) == 0) {
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
  }, 100);
}

function setInterval1() {
  let x = parseInt(numberArray[1].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[1].innerHTML = x

     if (x++ === 50) {
         window.clearInterval(intervalo);
     }
  }, 100);
}

function setInterval2() {
  let x = parseInt(numberArray[2].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[2].innerHTML = x

     if (x++ === 10) {
         window.clearInterval(intervalo);
     }
  }, 100);
}

function setInterval3() {
  let x = parseInt(numberArray[3].innerHTML)
  var intervalo = window.setInterval(function () {

     numberArray[3].innerHTML = x

     if (x++ === 20) {
         window.clearInterval(intervalo);
     }
  }, 100);
}

window.addEventListener('scroll', doThis)

// ----------- TESTIMONIAL -----------------

const next = document.querySelectorAll('.next-testimonial')
const boxes = document.querySelectorAll('.testimonial-box')

next[0].addEventListener('click', ()=>{
  boxes[0].style.display = "block"
  boxes[1].style.display = "none"
  boxes[2].style.display = "none"
  boxes[3].style.display = "none"
})
next[1].addEventListener('click', ()=>{
  boxes[0].style.display = "none"
  boxes[1].style.display = "block"
  boxes[2].style.display = "none"
  boxes[3].style.display = "none"
})
next[2].addEventListener('click', ()=>{
  boxes[0].style.display = "none"
  boxes[1].style.display = "none"
  boxes[2].style.display = "block"
  boxes[3].style.display = "none"
})
next[3].addEventListener('click', ()=>{
  boxes[0].style.display = "none"
  boxes[1].style.display = "none"
  boxes[2].style.display = "none"
  boxes[3].style.display = "block"
})

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#header, 
#home, 
#about, 
#services,
#skills,
#portifolio,
#experience,
#testimonials,,
#contact,
footer
`);