import { getFetch } from './fetch.js'
import createCoctails from '../templates/coctails.hbs'
document.getElementById('coctailForm').addEventListener('submit', (event) => {
  // Останавливаем дефолтное событие браузера 
  event.preventDefault()
  // Получаем значение из input form
  let coctail = event.target.elements.search.value
  console.log(coctail)
  // Делаем запрос и передаем в него значение из input
  getFetch(coctail).then((data) => {
    console.log(data)
    // Получили данные из запроса и передали их в фунцию-шаблонизатор
    let markup = createCoctails(data.drinks)
    //   console.log(markup)
    // встраиваем, созданную шаблонизатором, разметку
    document.getElementById('coctails').insertAdjacentHTML('afterbegin', markup)
  })
})
// console.log(createCoctails);
