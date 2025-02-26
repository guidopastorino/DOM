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






// ------------------------------------------
// TEMPLATES
<template>
    /* contenido a clonar */
</template>


const $section = document.querySelector('#section-1')
const $cardTemplate = document.querySelector('#card-template').content // el .content hace referencia al contenido
const $fragmento = document.createDocumentFragment()

let cardsCategories = [
    {title: 'Mi Mascota 1 :)', img: 'https://placeimg.com/300/300/animals'},
    {title: 'Mi Mascota 2 :)', img: 'https://placeimg.com/300/300/animals'},
    {title: 'Mi Mascota 3 :)', img: 'https://placeimg.com/300/300/animals'},
    {title: 'Mi Mascota 4 :)', img: 'https://placeimg.com/300/300/animals'},
    {title: 'Mi Mascota 5 :)', img: 'https://placeimg.com/300/300/animals'},
]

cardsCategories.forEach(element => {
    $cardTemplate.querySelector('img').setAttribute('src', element.img)
    $cardTemplate.querySelector('img').setAttribute('alt', element.title)
    $cardTemplate.querySelector('figcaption').textContent = element.title

    // se utiliza este metodo para que cada objeto tenga su propia targeta
    let $clon = document.importNode($cardTemplate, true) // true clona su contenido false solo la etiqueta

    $fragmento.appendChild($clon)
});

$section.appendChild($fragmento)







// ------------------------------------------
// MODIFICAR ELEMENTOS

const $section = document.querySelector('#section-1')
const $figure = document.createElement('figure')

// para clonar un elemento y su contenido
const $sectionClone = $section.cloneNode(true)
document.body.appendChild($sectionClone)

$figure.classList.add('card')

$figure.innerHTML = `
    <img
    id="img"
    src="https://placeimg.com/300/300/any"
    alt="any"
    />
    <figcaption>ANY</figcaption>
`

// replaceChild(nuevoNodo, nodoReemplazar)
$section.replaceChild($figure, $section.firstElementChild)

// removeChild(hijoEliminar)
$section.removeChild($section.lastElementChild)

// insertBefore(nodoInsertar, nodoReferenciaPosicion)
$section.insertBefore($figure, $section.children[0])







// ------------------------------------------
// MODIFICAR ELEMENTOS v.2

// Métodos del elemento (insertarElemento)
    // - Insertar contenido HTML dentro de un elemento: insertAdjacentHTML('posición', HTML)
    // - Insertar un elemento dentro de un elemento: insertAdjacentElement('posición', elemento)
    // - Insertar texto dentro de un elemento: insertAdjacentText('posición', texto)

// Valores de posiciones (Posicion)
    // - beforebegin: Hermano anterior
    // - afterbegin: Primer hijo
    // - beforeend: Ultimo hijo
    // - afterend: Hermano posterior


// ELEMENTO OBJETIVO: section-1
const $section = document.querySelector('#section-1')
const $newCard = document.createElement('figure')
const $newCardContent = `
    <img
    id="img"
    src="https://placeimg.com/300/300/animals"
    alt="animals"
    />
    <figcaption></figcaption>
`

$newCard.classList.add('card')
$newCard.insertAdjacentHTML('afterbegin', $newCardContent)

// adding text to figcaption
$newCard.querySelector('figcaption').insertAdjacentText('beforeend','Nuevo elemento')

$section.insertAdjacentElement('afterbegin', $newCard)


// ===============
// Opciones extra (jQuery version)
// Sería una forma más reducida de las versiones de posiciones e insert anteriores

// prepend: Antes del primer hijo
// append: Despues del ultimo hijo
// before: Hermano anterior
// after: Hermano posterior

$section.prepend($newCard)
$section.append($newCard)
$section.before($newCard)
$section.after($newCard)

// adding text to figcaption with short method
$newCard.querySelector('figcaption').prepend('Nuevo elemento')










// ------------------------------------------

// EVENTOS

// Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios y definir un comportamiento de la página cuando se produzcan. Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript podemos definir qué queremos que ocurra cuando se produzcan los eventos.

// Conceptos básicos de los eventos:
  // - Evento: Es el evento que ocurrirá cuando el usuario haga la acción que nosotros indiquemos e interactúe con la web
  // - Tipo de evento: Es el tipo de evento ejecutado, ej, si el usuario dió click, el tipo de evento será "click" 
  // - Manejador: Es el comportamiento que nosotros pondemos asignar como respuesta a un evento.


// Existen 3 fases que ocurren al invocar un evento:
  // - Fase de Captura: El evento se dirige al elemento para capturarlo
  // - Fase de Objetivo (target): El evento localizó al elemento disparador del evento
  // - Fase de burbujeo o propagación (bubbling - propagation): El evento se propaga (o expande) hasta el elemento padre



const btnAumentar = document.querySelector('#btn-aumentar')
const btnDisminuir = document.querySelector('#btn-disminuir')
const spanContador = document.querySelector('#contador')

let num = 0

// AÑADIR EVENTOS MANUALMENTE (A CADA BOTÓN)
btnAumentar.addEventListener('click', () => {
    num++    
    spanContador.textContent = num
})

btnDisminuir.addEventListener('click', () => {
    num--    
    spanContador.textContent = num
})




// EVENT DELEGATION 
// La delegacion de eventos consiste en declarar un evento en el contenedor padre para, que a través de comprovaciones, capturarlo en un elemnto hijo y que se ejecute
// El elemento container va a recibir como parametro el evento en si, que se declara con la "e"

const $container = document.querySelector('#container')

// declarando evento a contenedor padre
$container.addEventListener('click', (e) => {
    // comprobando si el elemento que le damos click sean los botones que cumplan la condicion
    // la condicion puede ser de atributos, clases, tagName, etc...
    if(e.target.getAttribute('id') == 'btn-aumentar'){
        num++
        spanContador.textContent = num
    }

    if(e.target.getAttribute('id') == 'btn-disminuir'){
        num--
        spanContador.textContent = num
    }
})




// stopPropagation
// Evita que el evento se propague y cancela las fases de captura y burbuja del evento, haciendo que se ejecute en ese mismo elemento

const $padre = document.querySelector('.padre')
const $hijo = document.querySelector('.hijo')

$padre.addEventListener('click', (e) => {
  console.log(`Estás en el contenedor ${e.target.classList[0]}`)
})
$hijo.addEventListener('click', (e) => {
  console.log(`Estás en el contenedor ${e.target.classList[0]}`)
  e.stopPropagation()
})


// Otra forma llamando funciones como parametros de eventos:

function sendEventInfo(e){
  console.log(`Estás en el contenedor ${e.target.classList[0]}`)
  e.stopPropagation()
}

$padre.addEventListener('click', sendEventInfo)
$hijo.addEventListener('click', sendEventInfo)




// preventDefault
// Elimina el comportamiento por defecto que realiza el navegador al hacer x accion en un elemento
const $form = document.querySelector('form')

$form.addEventListener('submit', (e) => {
  console.log(`Su nombre es: ${$form.querySelector('input').value}`)
  $form.querySelector('button').setAttribute('disabled', '')
  alert('Se han enviado exitosamente los datos!')
  $form.reset()
  e.preventDefault()
})

// Pero esto ocasiona que al no poderse recargar la página devuelta no se van a poder enviar más datos a la base de datos, por lo cual habrá que recargar la página










// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// BOM
// Browser Object Model
// Cada uno tiene sus propios métodos

// URL, Historial, Navegador
// Location, History, Navigator

// Location
console.log(location)


// History
console.log(history)


// Navigator
console.log(navigator)











