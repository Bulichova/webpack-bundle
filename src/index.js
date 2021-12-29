function firstWorld() {
  const word = 'hello world'
  const text = document.createElement('p')
  text.textContent = word
  return text
}
const first = firstWorld()
console.log(first)
document.querySelector('body').append(first)
