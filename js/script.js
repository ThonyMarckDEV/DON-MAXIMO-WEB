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

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                deliveryMessage.classList.add('visible'); // Añade la clase para mostrar el mensaje
            } else {
                deliveryMessage.classList.remove('visible'); // Quita la clase para ocultar el mensaje
            }
        });
    }, {
        threshold: 0.5 // Activar mensaje
    });

    observer.observe(deliverySection);
});

document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.querySelector('#home');
    const spices = document.querySelectorAll('.spice');

    const observer = new IntersectionObserver(entries => {
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
        threshold: 0.5 // Se activa cuando el 50% de la sección 'home' está visible
    });

    observer.observe(homeSection);
});
