document.addEventListener('DOMContentLoaded', () => {
    // Desplazar automáticamente a la sección home al cargar la página
    const homeSection = document.querySelector('#home'); // Seleccionar la sección home
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelectorAll('.scroll-btn').forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            const pizza = document.querySelector('.pizza');

            // Valor para ajustar cuánto sube la pizza
            const pizzaOffset = 250; // Movimiento de la pizza

            // Desplazar la vista suavemente a la sección objetivo
            target.scrollIntoView({ behavior: 'smooth' });

            // Función para ajustar la posición de la pizza
            function adjustPizzaPosition() {
                if (pizza) {
                    // Obtener el rectángulo de la sección objetivo
                    const targetRect = target.getBoundingClientRect();
                    
                    // Obtener la altura de la ventana del navegador
                    const windowHeight = window.innerHeight;

                    // Calcular el centro de la ventana del navegador
                    const centerOfWindow = windowHeight / 2;

                    // Calcular el desplazamiento necesario para mover la pizza a la nueva posición
                    const offset = targetRect.top + window.scrollY - (centerOfWindow - pizza.offsetHeight / 2) + pizzaOffset;

                    // Aplicar el ajuste para mover la pizza
                    pizza.style.transition = 'transform 0.5s ease-in-out'; // Transición suave
                    pizza.style.transform = `translateY(${offset}px)`;
                }
            }

            // Ajustar la pizza cuando se haga clic
            adjustPizzaPosition();

            // Al hacer clic en el botón para volver a la primera sección
            if (this.getAttribute('data-target') === '#home') {
                // Regresar la pizza a su posición original
                if (pizza) {
                    pizza.style.transition = 'transform 0.5s ease-in-out'; // Transición suave
                    pizza.style.transform = 'translateY(0)'; // Regresar a la posición original
                }
            }
        });
    });
});

    // ANIMACION HOME SALIDA
    document.addEventListener('DOMContentLoaded', () => {
        const buttonExit = document.querySelector('.scroll-btn-home'); // Botón para la animación de salida
        const spices = document.querySelectorAll('.spice'); // Seleccionar todos los elementos de especias

        spices.forEach(spice => {
            spice.style.animation = 'fall 1s ease-in-out forwards';
        });


        buttonExit.addEventListener('click', () => {
            spices.forEach(spice => {
                spice.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            });
        });
    });

// ANIMACION TENEDOR
document.addEventListener('DOMContentLoaded', () => {
    const buttonEnter = document.querySelector('.scroll-btn-home');
    const buttonExit = document.querySelector('.scroll-btn-local'); // Botón para la animación de salida
    const tenedor = document.querySelector('.tenedor');
    const imagesContainer = document.querySelector('.local-images');

    buttonEnter.addEventListener('click', () => {
        // Aplicar la animación de entrada
        tenedor.style.animation = 'enter-diagonal-local 1s ease-in-out forwards';
        
        // Mostrar imágenes con animación
        imagesContainer.classList.add('show-images');
    });

    buttonExit.addEventListener('click', () => {
        // Aplicar la animación de salida
        tenedor.style.animation = 'exit-diagonal-local 1s ease-in-out forwards';

        // Ocultar imágenes con animación
        imagesContainer.classList.remove('show-images');
    });
});



// ANIMACION DELIVERY   
document.addEventListener('DOMContentLoaded', () => {
    const buttonEnter = document.querySelector('.scroll-btn-local');
    const buttonExit = document.querySelector('.scroll-btn-delivery');
    const delivery = document.querySelector('.delivery');
    const imagesContainer = document.querySelector('.delivery'); // Asegúrate de que este es el contenedor correcto

    buttonEnter.addEventListener('click', () => {
        // Aplicar la animación de entrada
        delivery.classList.remove('hide-delivery');
        delivery.classList.add('show-delivery');
        
        // Mostrar imágenes con animación
        imagesContainer.classList.add('show-images');
    });

    buttonExit.addEventListener('click', () => {
        // Aplicar la animación de salida
        delivery.classList.remove('show-delivery');
        delivery.classList.add('hide-delivery');

        // Ocultar imágenes con animación
        imagesContainer.classList.remove('show-images');
    });
}); 


// ANIMACION CONTACTO
document.addEventListener('DOMContentLoaded', () => {
    const buttonEnter = document.querySelector('.scroll-btn-delivery');
    const buttonExit = document.querySelector('.scroll-btn-contacto'); // Botón para la animación de salida
    const llamando = document.querySelector('.llamando');

    buttonEnter.addEventListener('click', () => {
        // Aplicar la animación de entrada
        llamando.classList.remove('hide-llamando');
        llamando.classList.add('show-llamando');
    });

    buttonExit.addEventListener('click', () => {
        // Aplicar la animación de salida
        llamando.classList.remove('show-llamando');
        llamando.classList.add('hide-llamando');
    });
});


// ANIMACION HOME ENTRADA
document.addEventListener('DOMContentLoaded', () => {
    const buttonEntet = document.querySelector('.scroll-btn-contacto'); // Botón para la animación de salida
    const spices = document.querySelectorAll('.spice'); // Seleccionar todos los elementos de especias

    buttonEntet.addEventListener('click', () => {
        spices.forEach(spice => {
            spice.style.animation = 'fall 1s ease-in-out forwards';
        });
    });
});

window.onload = function() {
    var pizzaImages = [
        'img/pizza.png',
        'img/pizza2.png',
        'img/pizza3.png',
        'img/pizza4.png'
    ];

    var randomIndex = Math.floor(Math.random() * pizzaImages.length);
    document.getElementById('pizzaImage').src = pizzaImages[randomIndex];
};


// Función para manejar la pantalla de TABLET
function handleTabletScreen(event) {
    if (event.matches) {
      let slideIndex = 0;
      showSlides(".slideshow-inner", 925); // Ancho de la diapositiva para TABLET
    } else {
      // Puedes hacer algo si la media query deja de cumplirse
    }
  }
  
  // Función para manejar la pantalla de CELULAR
  function handleMobileScreen(event) {
    if (event.matches) {
      let slideIndex = 0;
      showSlides(".slideshow-inner", 421); // Ancho de la diapositiva para CELULAR
    } else {
      // Puedes hacer algo si la media query deja de cumplirse
    }
  }
  
  // Función para manejar la pantalla de PC
  function handlePCScreen(event) {
    if (event.matches) {
      let slideIndex = 0;
      showSlides(".slideshow-inner", 840); // Ancho de la diapositiva para PC
    } else {
      // Puedes hacer algo si la media query deja de cumplirse
    }
  }


// Listeners de media query para TABLET, CELULAR y PC
const tabletMediaQuery = window.matchMedia("(min-width: 768px)");
tabletMediaQuery.addListener(handleTabletScreen);
handleTabletScreen(tabletMediaQuery);

const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
mobileMediaQuery.addListener(handleMobileScreen);
handleMobileScreen(mobileMediaQuery);

const pcMediaQuery = window.matchMedia("(min-width: 991px)");
pcMediaQuery.addListener(handlePCScreen);
handlePCScreen(pcMediaQuery);


function changeMantelImage() {
    const img = document.getElementById('mantel-img');

    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletMediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 990px)");

    // Función para manejar la pantalla de CELULAR
    function handleMobileScreen(event) {
        if (event.matches) {
            img.src = 'img/mantel-movil.png';
            showSlides(".slideshow-inner", 421); // Ancho de la diapositiva para CELULAR
        }
    }

    // Función para manejar la pantalla de TABLET
    function handleTabletScreen(event) {
        if (event.matches) {
            img.src = 'img/mantel-tablet.png';
            showSlides(".slideshow-inner", 925); // Ancho de la diapositiva para TABLET
        }
    }

    // Escuchar cambios en las media queries
    mobileMediaQuery.addListener(handleMobileScreen);
    tabletMediaQuery.addListener(handleTabletScreen);

    // Ejecutar al cargar la página
    handleMobileScreen(mobileMediaQuery);
    handleTabletScreen(tabletMediaQuery);
}

// Llama a la función de cambio de imagen al cargar la página
window.addEventListener('load', changeMantelImage);
// Ejemplo de la función showSlides (debes definirla con tu lógica)
function showSlides(containerClass, slideWidth) {
    // Lógica para mostrar las diapositivas según el contenedor y el ancho especificado
    console.log(`Mostrando diapositivas en ${containerClass} con ancho ${slideWidth}px`);
}