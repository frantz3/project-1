const highlight = document.querySelector('#header')
const content = document.querySelector('#content')

const h1 = document.createElement('h1')
const h12 = document.createElement('h1')

h1.textContent = 'Header'
h12.textContent = 'Content'

highlight.append(h1)
content.append(h12)

function createHomeHighlight () {

        fetch(api_url)
        .then( (r) => r.json())
        .then((data) => getHomeData(data))
}

function getHomeData(characterData) {
    console.log(characterData)
    characterData.forEach( character => makeOneCard(character))
}

function makeOneCard(character) {
    console.log(character)

    const div = document.createElement('div')
    div.className = 'card'
    content.append(div)

    const h2 = document.createElement('h2')
    h2.innerText = character.name
    div.append(h2)

    
    const img = document.createElement('img')
    img.src = character.img
    img.width = 150
    div.append(img)
}

createHomeHighlight()
