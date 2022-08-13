function makeCharacterInfoPage(dataObj) {
   
   characterPage(dataObj)
}

function characterPage(character) {
    content.innerHTML = ''
    renderCharacter(character)
}

function renderCharacter(character) {
    const container = document.createElement('div')
    container.className = 'allText'

    const img = document.createElement('img')
    img.className = 'oneImg' 
    img.src = character.imgVar
    
    
    const h3 = document.createElement('h3')
    h3.textContent = character.name
    h3.className = 'clickedText'
    

    const nickname = document.createElement('div')
    nickname.innerText = character.nickname
    nickname.className = 'clickedText'
   
    

    const occupation = document.createElement('div')
    occupation.innerText = character.occupation
    occupation.className = 'clickedText'
    

    const actor = document.createElement('div')
    actor.innerText = character.actor
    actor.className = 'clickedText'
    

    const status = document.createElement('div')
    status.innerText = character.status
    status.className = 'clickedText'
   

    content.append(container)
    container.append(img, h3, nickname, occupation,actor, status)

    h12.innerHTML = ''
 
}
