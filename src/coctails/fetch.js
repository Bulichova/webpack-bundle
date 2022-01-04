export function getFetch(coctail) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`
  return fetch(url)
    .then((response) => {
    //   console.log(response)
      return response.json()
    })
    .then((data) => {
    //   console.log(data)
      return data
    })
}
