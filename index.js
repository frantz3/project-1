// const api_url = 'https://www.breakingbadapi.com/api/characters'

// fetch('https://www.breakingbadapi.com/api/characters')
// .then( (r) => r.json())
// .then((data) => console.log(data))

const home = document.querySelectorAll('a')[0]
const characterInfo = document.querySelectorAll('a')[1]

home.addEventListener('click', (e) => {
    e.preventDefault()
    const main = document.querySelector('main')
    content.innerHTML = ''
    createHomeHighlight()
})

// characterInfo.addEventListener('click', (e) => {
//     e.preventDefault()
//     const main = document.querySelector('main')
//     main.innerHTML = ''
//     main.innerHTML = '<h1>Character Info</h1>'
// })
function getCharacterInfo(){
// fetch(api_url)
// .then( (r) => r.json())
// .then((data) => console.log(data))
}