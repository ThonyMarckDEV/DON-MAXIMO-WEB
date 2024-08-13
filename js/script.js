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

document.addEventListener('DOMContentLoaded', function () {
    const deliverySection = document.querySelector('#delivery');
    const deliveryMessage = document.querySelector('.delivery-message');

    const deliveryObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                deliveryMessage.classList.add('visible'); // Añade la clase para mostrar el mensaje
            } else {
                deliveryMessage.classList.remove('visible'); // Quita la clase para ocultar el mensaje
            }
        });
    }, {
        threshold: 0.7 // Activar mensaje
    });

    deliveryObserver.observe(deliverySection);
});

document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.querySelector('#home');
    const spices = document.querySelectorAll('.spice');

    const homeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spices.forEach(spice => {
                    // Reinicia la animación
                    spice.classList.remove('hidden'); // Quita la clase 'hidden'
                    void spice.offsetWidth; // Fuerza reflujo para reiniciar la animación
                    spice.style.animation = 'fall 1s ease-in-out forwards'; // Aplica la animación de aparición
                });
            } else {
                spices.forEach(spice => {
                    spice.style.animation = 'fadeOut 1s ease-in-out forwards'; // Aplica la animación de desaparición
                    setTimeout(() => {
                        spice.classList.add('hidden'); // Oculta las especias después de la animación
                    }, 1000); // La duración debe coincidir con la duración de la animación de desaparición
                });
            }
        });
    }, {
        threshold: 0.7 // Se activa cuando el 100% de la sección 'home' está visible
    });

    homeObserver.observe(homeSection);
});

document.addEventListener('DOMContentLoaded', function () {
    const localSection = document.querySelector('#local');
    const tenedor = document.querySelector('.tenedor');

    const localObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia la animación de entrada en diagonal
                tenedor.classList.remove('hidden');
                void tenedor.offsetWidth; // Fuerza reflujo para reiniciar la animación
                tenedor.style.animation = 'enter-diagonal 1s ease-in-out forwards';
            } else {
                // Aplica la animación de salida en diagonal
                tenedor.style.animation = 'exit-diagonal 1s ease-in-out forwards';
                setTimeout(() => {
                    tenedor.classList.add('hidden'); // Oculta la imagen después de la animación
                }, 1000); // La duración debe coincidir con la duración de la animación de salida
            }
        });
    }, {
        threshold: 0.7 // Se activa cuando el 100% de la sección 'local' está visible
    });

    localObserver.observe(localSection);
});

document.addEventListener('DOMContentLoaded', function () {
    const deliverySection = document.querySelector('#delivery');
    const deliveryTenedor = document.querySelector('.delivery');

    const deliveryObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia la animación de entrada en diagonal
                deliveryTenedor.classList.remove('hidden');
                void deliveryTenedor.offsetWidth; // Fuerza reflujo para reiniciar la animación
                deliveryTenedor.style.animation = 'enter-diagonal-deli 1s ease-in-out forwards';
            } else {
                // Aplica la animación de salida en diagonal
                deliveryTenedor.style.animation = 'exit-diagonal-deli 1s ease-in-out forwards';
                setTimeout(() => {
                    deliveryTenedor.classList.add('hidden'); // Oculta la imagen después de la animación
                }, 1000); // La duración debe coincidir con la duración de la animación de salida
            }
        });
    }, {
        threshold: 0.7 // Se activa cuando el 100% de la sección 'delivery' está visible
    });

    deliveryObserver.observe(deliverySection);
});

document.addEventListener('DOMContentLoaded', function () {
    const contactoSection = document.querySelector('#contacto');
    const contactoTenedor = document.querySelector('.llamando');

    const contactoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia la animación de entrada en diagonal
                contactoTenedor.classList.remove('hidden');
                void contactoTenedor.offsetWidth; // Fuerza reflujo para reiniciar la animación
                contactoTenedor.style.animation = 'enter-diagonal-persona 1s ease-in-out forwards';
            } else {
                // Aplica la animación de salida en diagonal
                contactoTenedor.style.animation = 'exit-diagonal-persona 1s ease-in-out forwards';
                setTimeout(() => {
                    contactoTenedor.classList.add('hidden'); // Oculta la imagen después de la animación
                }, 1000); // La duración debe coincidir con la duración de la animación de salida
            }
        });
    }, {
        threshold: 0.7 // Se activa cuando el 100% de la sección 'contacto' está visible
    });

    contactoObserver.observe(contactoSection);
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
    const pcMediaQuery = window.matchMedia("(min-width: 991px)");

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

    // Función para manejar la pantalla de PC
    function handlePCScreen(event) {
        if (event.matches) {
            img.src = 'img/mantel-pc.png';
            showSlides(".slideshow-inner", 840); // Ancho de la diapositiva para PC
        }
    }

    // Escuchar cambios en las media queries
    mobileMediaQuery.addListener(handleMobileScreen);
    tabletMediaQuery.addListener(handleTabletScreen);
    pcMediaQuery.addListener(handlePCScreen);

    // Ejecutar al cargar la página
    handleMobileScreen(mobileMediaQuery);
    handleTabletScreen(tabletMediaQuery);
    handlePCScreen(pcMediaQuery);
}

// Llama a la función de cambio de imagen al cargar la página
window.addEventListener('load', changeMantelImage);

// Ejemplo de la función showSlides (debes definirla con tu lógica)
function showSlides(containerClass, slideWidth) {
    // Lógica para mostrar las diapositivas según el contenedor y el ancho especificado
    console.log(`Mostrando diapositivas en ${containerClass} con ancho ${slideWidth}px`);
}