const API_URL = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
    return fetch(API_URL)
          .then(res => {
            console.log('response',res)
            return res.json()})
          .then(json => {
            console.log(json)
          renderBooks(json)
          return json
          })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  .then(json => console.log('outside of fetchbooks',json))
  
})
