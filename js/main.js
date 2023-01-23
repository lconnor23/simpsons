// //Example fetch using pokemonapi.co
document.querySelector('#random').addEventListener('click', getRandom)
// document.querySelector('#character').addEventListener('click', getCharacter)

function getRandom(){
  const inputCharacter = document.querySelector('input').value
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${inputCharacter}`

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data[0].character
    document.querySelector('#characterImg').src = data[0].image
    document.querySelector('h3').innerText = data[0].quote
  })
  reset()
}
function reset(){
  document.querySelector('input').value = ""
}
