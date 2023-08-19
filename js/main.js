/* ===== SHOW MENU ===== */

// Creamos una función con dos parámtetros de entrada que serán los id de los elementos a usar
const showMenu = (toggleId, navId) => {
    // Creamos dos variables y las vinculamos a los elementos del html respectivos
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Creamos un condicional donde sí el elemento toggle recibe un evento click ejecute una función que
    // realice una acción tipo toggle (alternar) a la clase show-menu en el elemento nav
    if (toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}
// Invocamos la función y le indicamos los id de los dos elementos con los que trabajaremos
showMenu('nav-toggle', 'nav-menu');

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ===== SCROLL SECTION ACTIVE LINK ===== */

// Sacamos una lista de los elementos de section que contengan un id
const sections = document.querySelectorAll('section[id]')

// Creamos una función evalúa la posición del scroll y revisa en que section se encuentra para ir
// colocando o quitano la clase active en cada uno de los elementos del menú de navegación correspondiente
// con la section donde esta el scroll, de manera que activa y desactiva los estilos de la clase "active" 
function scrollActive() {
    // Asignamos el desplazamiento vertical del documento (window) y los asignamos a la constante scrolly
    const scrollY = window.pageYOffset

    // Recorremos la lista de los elementos section y para cada uno realizamos la operación de revisar
    // en que section nos ubica el desplazamiento del documento
    sections.forEach(current => {
        // Asignamos la altura de la section actual
        const sectionHeight = current.offsetHeight
        // Asignamos la distacia que hay desde el top del elemento padre hasta el top del section actual
        // y decontamos 50 px que es más o menos la barra de menú
        const sectionTop = current.offsetTop - 200;
        // asignamos el id de la section actual a una variable
        sectionId = current.getAttribute('id')

        console.log(scrollY);

        // Ejecutamos un condicional sí, el desplazamiento del documento es mayor a la distancia donde
        // inicia cada section (ya entramos a la sección) y si el desplazamiento del documento es menor
        // a la distancia donde finaliza cada section (no hemos salido de la sección)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Si estamos dentro de una sección asignamos la clase active al elemento a que referencia a esa section
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
// Invocamos la función cuando se detecte desplazamiento en el documento (la ventana)
window.addEventListener('scroll', scrollActive)

/* ===== SCROLL REVEAL ANIMATION ===== */

// Usamos la api de ScrollReveal invocada mediante el respectivo script en el HTML

// Personalizamos algunas opciones según nuestras necesidades, las opciones por default están en la página de ScrollReveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

// Aplicamos el ScrollReveal a los elementos identificandolos por su clase y si es necesario
// ajustamos de nuevo opciones según sea el caso
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__info, .skills__img', { delay: 400});
sr.reveal('.home__social-icon, .skills__data, .work__img, .contact__input', { interval: 200});




/* ===== TESTING ===== */

// const scrollY = window.pageYOffset
// const home = document.getElementById('home');
// const skills = document.getElementById('skills');
// const work = document.getElementById('work');
// const contact = document.getElementById('contact');
// const about = document.getElementById('about');

// console.log('Scrolly ' + scrollY)
// console.log('home: ' + home.offsetTop + ' ' + home.offsetHeight);
// console.log('about: ' + about.offsetTop + ' ' + about.offsetHeight)
// console.log('skills: ' + skills.offsetTop + ' ' + skills.offsetHeight)
// console.log('work: ' + work.offsetTop + ' ' + work.offsetHeight)
// console.log('contact: ' + contact.offsetTop + ' ' + contact.offsetHeight)