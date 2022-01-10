import refs from './refs.js'
const { pexelsForm, galleryId } = refs
function getFetch(search) {
  const pexelsKey = '563492ad6f917000010000019b12c0ae48b44b77908448361ebdac71'
  const baseUrl = `https://api.pexels.com/v1/`
  let endPoint = 'search'
  let color = 'red'
  //   let search = 'dog'
  const params = `?query=${search}&per_page=3&color=${color}`
  let url = baseUrl + endPoint + params
  const option = {
    method: 'GET',
    headers: {
      Authorization: pexelsKey,
    },
  }
  fetch(url, option)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((result) => {
      console.log(result)
      return result.photos
    })
    .then((data) => {
      console.log(data)
      const markup = data
        .map((elem) => {
          console.log(elem)
          const {
            alt,
            src: { tiny },
          } = elem
          return createElement(tiny, alt)
        })
        .join('')
      console.log(markup)
      innerElement(galleryId, markup)
    })
}
console.log(pexelsForm)
pexelsForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let search = event.target.elements.search.value.toLowerCase()
  console.log(search)
  getFetch(search)
})
//функция создание элемента

function createElement(src, alt) {
  return `<li><img src="${src}" alt="${alt}"/></li>`
}
// функция встраивания элемента
function innerElement(place, element) {
  if (typeof element === 'string') {
    place.insertAdjacentHTML('afterbegin', element)
  } else if (!element) {
    place.insertAdjacentHTML('afterbegin', '<p>нечего отрисовать</p>')
  } else {
    place.insertAdjacentElement('afterbegin', element)
  }
}
