import itemTemplate from './templates/item.hbs'
import generalItem from './templates/generalItem.hbs'
import './coctails/createMarkup.js'
import './css/style.scss'
function firstWorld() {
  const word = 'hello world'
  const text = document.createElement('p')
  text.textContent = word
  return text
}
const first = firstWorld()
// console.log(first)
document.querySelector('body').append(first)
// console.log(itemTemplate)
const data1 = {
  title: 'title1',
  text:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, nemo.',
}
const data2 = {
  title: 'title2',
  text:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, nemo.',
}
const template1 = itemTemplate(data1)
// console.log(template1)
const template2 = itemTemplate(data2)
// console.log(template2)
const array = [data1, data2]
// console.log(array)
const template3 = generalItem(array)
// console.log(template3);
