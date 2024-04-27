const searchIcon = document.getElementById('searchIcon')

searchIcon.addEventListener('click', ()=> {
    console.log('search icon is Clicked !')
} )



const searchEngine = document.getElementById('searchEngine')

searchEngine.addEventListener('click', ()=> {
    searchEngine.classList.toggle('active')
} )