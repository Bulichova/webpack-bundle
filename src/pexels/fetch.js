import refs from './refs.js'
const { pexelsForm, galleryId, hiddenButton } = refs
function getFetch() {
  const pexelsKey = '563492ad6f917000010000019b12c0ae48b44b77908448361ebdac71'
  const baseUrl = `https://api.pexels.com/v1/`
  let endPoint = 'search'
  let page = 1
  let search = ''
  let color = ''
  function setPage() {
    page += 1
    console.log(page)
    return page
  }
  function setSearch(value) {
    return (search = value)
  }
  function setColor(value) {
    return (color = value)
  }
  const option = {
    method: 'GET',
    headers: {
      Authorization: pexelsKey,
    },
  }
  let params = `?query=${search}&per_page=2&color=${color}&page=${page}`
  let url = baseUrl + endPoint + params
  function getResult() {
    params = `?query=${search}&per_page=2&color=${color}&page=${page}`
    url = baseUrl + endPoint + params
    console.log('Linked Result', url)
    return fetch(url, option)
      .then((response) => {
        // console.log(response)
        return response.json()
      })
      .then((result) => {
        console.log(result)
        let condition =
          Math.ceil(result.total_results / result.per_page) === result.page
        if (condition) {
          hiddenButton.classList.add('hiddenButton')
        } else {
          hiddenButton.classList.remove('hiddenButton')
        }
        // console.log(condition)
        return result.photos
      })
      .then((data) => {
        // console.log(data)
        const markup = data
          .map((elem) => {
            // console.log(elem)
            const {
              alt,
              src: { tiny },
            } = elem
            return createElement(tiny, alt)
          })
          .join('')
        // console.log(markup)
        innerElement(galleryId, markup)
      })
  }
  return { setPage, getResult, setSearch, setColor }
}
const x = getFetch()
// console.log(x)
pexelsForm.addEventListener('submit', (event) => {
  event.preventDefault()
  galleryId.innerHTML = ''
  let search = event.target.elements.search.value.toLowerCase()
  x.setSearch(search)
  let color = event.target.elements.color.value
  x.setColor(color)
  // console.log(color)
  // console.log(search)
  x.getResult()
  event.target.reset()
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
hiddenButton.addEventListener('click', (event) => {
  // console.log('click')
  x.setPage()
  x.getResult()
})
