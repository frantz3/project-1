const highlight = document.querySelector('#header')
const content = document.querySelector('#content')

const h1 = document.createElement('h1')
h1.className = 'header'
const h12 = document.createElement('h1')
h12.className = 'title'

// h1.textContent = 'Header'
h12.textContent = 'Breaking Bad Characters'



highlight.append(h1)
highlight.append(h12)

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
    
    const div = document.createElement('div')
    div.className = 'card'
    content.append(div)
    
    
    const h2 = document.createElement('h2')
    h2.className = 'text'

    const name = character.name
    h2.innerText = character.name
    div.append(h2)
    
    const imgVar = character.img
    const img = document.createElement('img')
    img.src = character.img
    img.className = 'picture'
    img.width = 300
    div.append(img)
    
    const occupation = character.occupation
    const actor = character.portrayed
    const nickname = character.nickname
    const status = character.status
    
    const dataObj = {
        imgVar,
        name,
        nickname,
        occupation,
        actor,
        status,
    }    

    img.addEventListener('click', (e) => {
        e.preventDefault()
         makeCharacterInfoPage(dataObj)
         
    })

    
}


createHomeHighlight()
