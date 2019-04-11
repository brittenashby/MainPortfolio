import { anaheimDucks } from '../anaheimDucks.js'

const mainContainer = document.querySelector('.container')

function cardFront(duckData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')
  
    caption.textContent = duckData.Name
    if (duckData.id !== 0) {
      image.src = `../players/${duckData.imageName}@2x.jpg`
    } else {
      image.src = `ducksLogo.gif`
    }
  
    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
  }
  
  function cardBackInfo(duckData) {
    let infoDiv = document.createElement('div')
    infoDiv.className = 'infoDiv'
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')
    moveOne.textContent = duckData.Age
    moveTwo.textContent = duckData.Height
    moveThree.textContent = duckData.Weight
    moveFour.textContent = duckData.Born
    infoDiv.appendChild(moveOne)
    infoDiv.appendChild(moveTwo)
    infoDiv.appendChild(moveThree)
    infoDiv.appendChild(moveFour)
    return infoDiv
  }
  
  function cardBack(duckData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = `ducksLogo.gif`
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    cardBack.appendChild(cardBackInfo(duckData))
    return cardBack
  }
  
  function createDuckCard(duckData) {
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'
  
    card.appendChild(cardFront(duckData))
    card.appendChild(cardBack(duckData))
  
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped')
    })
  
    scene.appendChild(card)
    mainContainer.appendChild(scene)
  }

  function matchIdToImage(aDuck) {
    let lowerCaseName = aDuck.Name.toLowerCase()
    aDuck.imageName = lowerCaseName.replace(" ", "_") 
    return aDuck
  }

  anaheimDucks.forEach(duck => {
      createDuckCard(matchIdToImage(duck))
  })

  // Put the Duck class here with a new Duck constructor function


const newDuckButton = document.querySelector('.button')
  
newDuckButton.addEventListener('click', function () {
  console.log("Thanks for clicking!")
    //createPokeCard(matchIdToImage(new Pokemon('Thoremon')))
  })