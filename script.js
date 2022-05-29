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
const $linkDom = document.querySelector('.link-dom')
// ESTILOS Y VARIABLES CSS 65


console.log($linkDom.style.paddingTop)
console.log(getComputedStyle($linkDom).textDecoration)


