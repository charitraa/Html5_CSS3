// const titleelement = document.getElementById('title')
// let title = titleelement.textContent
// let gukha = (title.textContent = 'hiiiiiiiiii')
// console.log(gukha)

// const element = document.getElementsByClassName('content')
// console.log(element)

// const ListItemElement = document.getElementsByTagName('li')
// console.log(ListItemElement.length)

const elementss = document.querySelector('.content')
elementss.innerHTML = 'THIS IS A <strong>modified</strong> paragraph'

var inputElement = document.getElementById('myinput')
console.log(inputElement.type)
console.log(inputElement.value)
let ne = (inputElement.value = 'This is a <strong>modified</strong> paragraph')
console.log(ne)
inputElement.setAttribute('value', 'new value')
console.log(inputElement.getAttribute('value'))

var element = document.getElementById('myinput')
if (element.hasAttribute('aria-control')) {
  element.removeAttribute('aria-control')
} else {
  element.setAttribute('aria-control', 'true')
}

const newElement = document.createElement('div')
newElement.textContent = 'newly created element'

const bodyElement = document.body

bodyElement.appendChild(newElement)
