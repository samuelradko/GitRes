import './style.css'
import mainPage from './Modules/Main-Page.js'
import Animes from './Modules/Animes.js'
import Animeinfo from './Modules/Animeinfo.js'
import KamiTach from './Modules/KamiTachi'





document.querySelector('#app').innerHTML = mainPage.outerHTML


let animes = document.querySelector('#Animes2211')
animes.addEventListener('click' , () => {
  document.querySelector('#app').innerHTML = Animes.outerHTML
  animes = document.querySelector('#Episode1')
  animes.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = KamiTach.outerHTML
  })
})

let home = document.querySelector('#Home')
home.addEventListener('click', () => {
  document.querySelector('#app').innerHTML = mainPage.outerHTML
})

let AnimeInfo = document.querySelector('#info')
AnimeInfo.addEventListener('click', () => {
  document.querySelector('#app').innerHTML = Animeinfo.outerHTML
})