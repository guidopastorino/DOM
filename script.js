// DOM

// Tipos de selectores

/* 
- Diferencia entre HTMLCollection y NodeList:
    - HTMLCollection: Es un tipo de lista DINÁMICA, es decir, que al establecer la lista y en un futuro la modifiquemos, esta se modificará.
    - NodeList: Es un tipo de lista ESTÁTICA, es decir, que al establecer la lista y en un futuro la modifiquemos, esta NO modificará su valor inicial.
*/

// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('article'))
// console.log(document.getElementsByName('parra'))
// console.log(document.getElementById('img'))
// console.log(document.querySelector('#img'))
// console.log(document.querySelector('.article'))
// console.log(document.querySelectorAll('.article'))
// console.log(document.querySelectorAll('li'))

// Explicacion con los li y p:

// const listElements = document.getElementsByTagName('li')
// const pElements = document.querySelectorAll('p')

// console.log(listElements)
// console.log(pElements)

// Y luego al eliminar un elemento de la lista e imrimirlos de nuevo, la lista de los <li> se modificará y la de los <p> no

// ------------------------------------------

// ATRIBUTOS

// obtener
// console.log(document.querySelector('.link').getAttribute('href'))
// console.log(document.querySelector('.link').href)
// console.log(document.querySelector('#section-1').getAttribute('id'))
// console.log(document.querySelector('#img').getAttribute('src'))


// establecer nuevo atributo
// const $img = document.querySelector('#img');
// $img.setAttribute('class', 'img-shadow')

// comprobar
// console.log($img.hasAttribute('src'))

// remover
// $img.removeAttribute('src')

// dataatributes
// console.log(document.querySelector('.link').dataset)
// console.log(document.querySelector('.link').getAttribute('data-desc'))



// ------------------------------------------
// ESTILOS Y VARIABLES CSS 65
// const $linkDom = document.querySelector('.link-dom')

// console.log($linkDom.style)
// console.log($linkDom.getAttribute('style'))
// console.log($linkDom.style.backgroundColor)
// console.log(getComputedStyle($linkDom).getPropertyValue('color'))

// $linkDom.style.background = 'red'
// $linkDom.style.fontWeight = 'bold'
// $linkDom.style.setProperty('color', 'black')
// $linkDom.style.removeProperty('color', 'black')

// CSS Custom Properties
// Las propiedades computadas del html element se encuentran en sus estilos computados
// <html> > computed > select all > se encuentran abajo del todo

// const $html = document.documentElement
// const $body = document.body

// let fbBgColor = getComputedStyle($html).getPropertyValue('--fb-color')
// let pinkTextColor = getComputedStyle($html).getPropertyValue('--pink-color')

// $body.style.background = fbBgColor
// $body.style.color = pinkTextColor

// $html.style.setProperty('--fb-color', 'green')
// fbBgColor = getComputedStyle($html).getPropertyValue('--fb-color')

// $html.style.setProperty('--pink-color', 'yellow')
// pinkTextColor = getComputedStyle($html).getPropertyValue('--pink-color')

// $body.style.background = fbBgColor
// $body.style.color = pinkTextColor



// ------------------------------------------
// CLASES CSS

const $card = document.querySelector('.card')
console.log($card)

console.log($card.className)
console.log($card.classList)

console.log($card.classList.contains('rotate-45')) // verifica si contiene esa clase o no devolviendo un boolean

$card.classList.add('rotate-45')

$card.classList.remove('rotate-45')
console.log($card.classList)

$card.classList.toggle('rotate-45') // si la tiene se la quita y si no la tiene se la agrega

console.log($card.classList)

$card.classList.replace('rotate-45', 'rotate-135') // va la clase a reemplazar y luego la clase que se agrega

console.log($card.classList.item(1)) // devuelve en cadena de texto el nombre de la clase que se encuentra en esa posición





// ------------------------------------------
// ETIQUETAS Y TEXTO HTML
const $content = document.querySelector('.content')

// Introduce unicamente texto
$content.textContent = 'Holaaaaa'

// Introduce etiquetas HTML dentro del elemento seleccionado
$content.innerHTML = `
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
</ul>
`

// Reemplaza el elemento seleccionado por el contenido establecido
$content.outerHTML = `
<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
`



// ------------------------------------------
// DOM TRAVERSING (Recorrriendo el DOM)

const $cards = document.querySelector('.cards')

console.log($cards.childElementCount) // Devuelve un numero de cuantos elementos hijos tiene
console.log($cards.children) // Devuelve los elementos hijos que tiene
console.log($cards.children[1]) // Devuelve un elemento hijo en especifico
console.log($cards.firstElementChild) // Devuelve el primer hijo 
console.log($cards.lastElementChild) // Devuelve el ultimo hijo 
console.log($cards.parentElement) // Devuelve el elemento padre
console.log($cards.nextElementSibling) // Devuelve el siguiente elemento hermano 
console.log($cards.previousElementSibling) // Devuelve el anterior elemento hermano 
console.log($cards.closest('#main')) // Verifica si tiene un ansestro (padre) con el elemento que le especifiquemos más cercano






// ------------------------------------------
const $sectionParent = document.querySelector('#section-1') // Elemento de donde van a colgar todas las targetas 
// CREAR ELEMENTOS Y FRAGMENTOS EN EL DOM

// Node.removeChild
// Node.replaceChild
// Node.insertBefore
// Node.hasChildNodes
// ParentNode.append()

// CREAR UN ELEMENTO
// Se crea todo desde el documento

// createElement: Crea un nuevo elemento
const $figure = document.createElement('figure')
const $img = document.createElement('img')
const $figcaption = document.createElement('figcaption')


// createTextNode: Crea un texto
const $figcaptionText = document.createTextNode('My Pet :)')


// Se le agrega un hijo
$sectionParent.appendChild($figure)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptionText)


$figure.classList.add('card')
$img.setAttribute('src', 'https://placeimg.com/300/300/animals')
$img.setAttribute('alt', 'animals')



// OTRAS FORMAS DE INSERTAR ITERANDO

let programLangs = ['Java', 'Python', 'C#', 'Kotlin', 'PHP', 'Javascript']

const $ul = document.createElement('ul')
document.body.appendChild($ul)

programLangs.forEach(lang => {
    const $li = document.createElement('li')
    $li.textContent = lang
    $ul.appendChild($li)
});



// OTRAS FORMAS DE INSERTAR CREANDO FRAGMENTOS

document.write(`<h1>Fragmentos</h1>`)

let programLangs = ['Java', 'Python', 'C#', 'Kotlin', 'PHP', 'Javascript']

const $ul = document.createElement('ul')
document.body.appendChild($ul)

const $fragment = document.createDocumentFragment();

programLangs.forEach(lang => {
    const $li = document.createElement('li')
    $li.textContent = lang
    $fragment.appendChild($li)
});

$ul.appendChild($fragment)
