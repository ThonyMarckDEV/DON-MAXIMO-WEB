document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        { id: '#delivery', class: '.delivery', enterAnimation: 'enter-diagonal-deli', exitAnimation: 'exit-diagonal-deli' },
        { id: '#local', class: '.tenedor', enterAnimation: 'enter-diagonal', exitAnimation: 'exit-diagonal' },
        { id: '#contact', class: '.llamando', enterAnimation: 'enter-diagonal-persona', exitAnimation: 'exit-diagonal-persona' },
        { id: '#home', class: '.spices-container', enterAnimation: 'fall', exitAnimation: 'fadeOut' }
    ];

    let currentTarget = '';

    // Actualizar el currentTarget al hacer clic en un botón de desplazamiento o enlace de la barra de navegación
    function updateCurrentTarget(target) {
        currentTarget = target;
    }

    document.querySelectorAll('.scroll-btn, .navbar a').forEach(button => {
        button.addEventListener('click', function(e) {
            const target = this.getAttribute('href') || this.getAttribute('data-target');
            updateCurrentTarget(target);

            // Desactivar animaciones de entrada para todas las secciones no relacionadas
            sections.forEach(section => {
                const element = document.querySelector(section.class);
                if (section.id !== target) {
                    element.style.animation = 'none'; // Desactivar animación de entrada
                }
            });

            // Forzar la animación de entrada en la sección de destino
            const targetSection = sections.find(section => section.id === target);
            if (targetSection) {
                const targetElement = document.querySelector(targetSection.class);
                setTimeout(() => {
                    targetElement.classList.remove('hidden');
                    void targetElement.offsetWidth; // Forzar reflujo para reiniciar la animación
                    targetElement.style.animation = `${targetSection.enterAnimation} 1s ease-in-out forwards`;
                }, 500); // Retardo para permitir la animación de salida de la sección anterior
            }

            // Desplazar la vista suavemente a la sección objetivo
            const targetElement = document.querySelector(target);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        });
    });

    sections.forEach(section => {
        const sectionElement = document.querySelector(section.id);
        const element = document.querySelector(section.class);

        if (sectionElement && element) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (section.id === currentTarget) {
                            // Reinicia la animación de entrada en la sección objetivo
                            element.classList.remove('hidden');
                            void element.offsetWidth; // Fuerza reflujo para reiniciar la animación
                            element.style.animation = `${section.enterAnimation} 1s ease-in-out forwards`;
                        }
                    } else {
                        // Aplica siempre la animación de salida
                        element.style.animation = `${section.exitAnimation} 1s ease-in-out forwards`;
                        setTimeout(() => {
                            element.classList.add('hidden'); // Oculta la imagen después de la animación
                        }, 1000); // La duración debe coincidir con la duración de la animación de salida
                    }
                });
            }, {
                threshold: 0.5 // Se activa cuando el 50% de la sección está visible
            });

            observer.observe(sectionElement);
        }
    });
    
    // Código para el scroll y la pizza
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

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        });
    });
});
