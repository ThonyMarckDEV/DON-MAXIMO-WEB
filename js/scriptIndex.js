// Función para desplazar a la sección home
function scrollToHome() {
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Espera a que se cargue la ventana
window.addEventListener('load', () => {
    // Desplazar automáticamente a la sección home al cargar la página
    scrollToHome();

    document.querySelectorAll('.scroll-btn').forEach(button => {
        button.addEventListener('click', function () {
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

    // Función genérica para aplicar animaciones
    function applyAnimation(buttonSelector, elementsSelector, animations = null, addClass = null, removeClass = null) {
        const button = document.querySelector(buttonSelector);
        const elements = document.querySelectorAll(elementsSelector);

        if (button) {
            button.addEventListener('click', () => {
                elements.forEach(element => {
                    if (animations) {
                        Object.keys(animations).forEach(animation => {
                            element.style.animation = animations[animation];
                        });
                    }
                    if (addClass) {
                        element.classList.add(...addClass.split(' '));
                    }
                    if (removeClass) {
                        element.classList.remove(...removeClass.split(' '));
                    }
                });
            });
        }
    }

    // Función para manejar los clics en la navbar
    function handleNavbarClick(navLinksSelector) {
        const navLinks = document.querySelectorAll(navLinksSelector);

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement && currentSection) {
                    // Aplica la animación de salida a la sección actual
                    applyExitAnimation(currentSection);

                    // Desplazar a la nueva sección inmediatamente
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Aplica la animación de entrada a la nueva sección sin esperar a que termine la salida
                    applyEntryAnimation(targetElement);

                    // Actualiza la sección actual inmediatamente
                    currentSection = targetElement;
                }
            });
        });
    }

    // Función para aplicar animaciones de salida
    function applyExitAnimation(section) {
        if (!section) return;

        console.log('Sección actual:', section.id);
        if (section.id === 'home') {
            console.log('Aplicando animación de salida a la sección home');
            document.querySelectorAll('.spice').forEach(spice => {
                spice.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            });
        }
        if (section.id === 'local') {
            console.log('Aplicando animación de salida a la sección local');
            document.querySelector('.tenedor').style.animation = 'exit-diagonal-local 1s ease-in-out forwards';
            document.querySelector('.local-images').classList.remove('show-images');
        }
        if (section.id === 'delivery') {
            console.log('Aplicando animación de salida a la sección delivery');
            document.querySelector('.delivery').classList.add('hide-delivery');
            document.querySelector('.delivery').classList.remove('show-delivery');
        }
        if (section.id === 'contacto') {
            console.log('Aplicando animación de salida a la sección contacto');
            document.querySelector('.llamando').classList.add('hide-llamando');
            document.querySelector('.llamando').classList.remove('show-llamando');
        }
    }

    // Función para aplicar animaciones de entrada
    function applyEntryAnimation(section) {
        console.log('Sección destino:', section.id);
        if (section.id === 'home') {
            console.log('Aplicando animación de entrada a la sección home');
            document.querySelectorAll('.spice').forEach(spice => {
                spice.style.animation = 'fall 1s ease-in-out forwards';
            });
        }
        if (section.id === 'local') {
            console.log('Aplicando animación de entrada a la sección local');
            document.querySelector('.tenedor').style.animation = 'enter-diagonal-local 1s ease-in-out forwards';
            document.querySelector('.local-images').classList.add('show-images');
        }
        if (section.id === 'delivery') {
            console.log('Aplicando animación de entrada a la sección delivery');
            document.querySelector('.delivery').classList.add('show-delivery');
            document.querySelector('.delivery').classList.remove('hide-delivery');

            
        }
        if (section.id === 'contacto') {
            console.log('Aplicando animación de entrada a la sección contacto');
            document.querySelector('.llamando').classList.remove('hide-llamando');
            document.querySelector('.llamando').classList.add('show-llamando');
        }
    }

    // Actualiza la sección actual en función de la visibilidad
    let currentSection = null;
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection = entry.target;
                console.log('Sección visible:', currentSection.id);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Llamar a la función con el selector de enlaces de la navbar
    handleNavbarClick('.navbar a');

    // Aplicar animaciones a los botones de desplazamiento
    applyAnimation('.scroll-btn-home', '.spice', { 'fall': 'fall 1s ease-in-out forwards' });
    applyAnimation('.scroll-btn-home', '.spice', { 'fadeOut': 'fadeOut 0.5s ease-in-out forwards' });
    applyAnimation('.scroll-btn-home', '.tenedor', { 'enter-diagonal-local': 'enter-diagonal-local 1s ease-in-out forwards' }, 'show-images', null);
    applyAnimation('.scroll-btn-local', '.tenedor', { 'exit-diagonal-local': 'exit-diagonal-local 1s ease-in-out forwards' }, null, 'show-images');
    applyAnimation('.scroll-btn-local', '.delivery', null, 'show-delivery', 'hide-delivery');
    applyAnimation('.scroll-btn-delivery', '.delivery', null, 'hide-delivery', 'show-delivery');
    applyAnimation('.scroll-btn-local', '.delivery', null, 'show-images', null);
    applyAnimation('.scroll-btn-delivery', '.delivery', null, null, 'show-images');
    applyAnimation('.scroll-btn-delivery', '.llamando', null, 'show-llamando', 'hide-llamando');
    applyAnimation('.scroll-btn-contacto', '.llamando', null, 'hide-llamando', 'show-llamando');
    applyAnimation('.scroll-btn-contacto', '.spice', { 'fall': 'fall 1s ease-in-out forwards' });

    // Observador para mostrar mensaje en delivery
    const deliverySection = document.querySelector('#delivery');
    const deliveryMessageLeft = document.querySelector('.delivery-message-left');
    const deliveryMessageRight = document.querySelector('.delivery-message-right');

    if (deliverySection) {
        const deliveryObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    deliveryMessageLeft.classList.add('visible');
                    deliveryMessageRight.classList.add('visible');
                } else {
                    deliveryMessageLeft.classList.remove('visible');
                    deliveryMessageRight.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5
        });

        deliveryObserver.observe(deliverySection);
    }

    // Carga aleatoria de imagen de pizza
    const pizzaImages = [
        'img/pizza.png',
        'img/pizza2.png',
        'img/pizza3.png',
        'img/pizza4.png'
    ];

    const randomIndex = Math.floor(Math.random() * pizzaImages.length);
    document.getElementById('pizzaImage').src = pizzaImages[randomIndex];
});

