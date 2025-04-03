document.addEventListener('DOMContentLoaded', () => {
    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Navigation Toggle ---
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const headerNav = document.querySelector('.header__nav');

    if (mobileToggle && headerNav) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = headerNav.classList.toggle('is-mobile-menu-open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    // Select all elements with the data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');

    if (scrollElements.length > 0) {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.dataset.delay || '0'; // Get delay from data-delay attribute or default to 0

                    // Apply delay using style property
                    element.style.transitionDelay = `${parseInt(delay, 10)}ms`;

                    element.classList.add('is-visible');
                    observer.unobserve(element); // Stop observing once visible
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

        // Observe each scroll element
        scrollElements.forEach(el => {
            intersectionObserver.observe(el);
        });
    }

    // --- Add CSS View Transition logic later if needed ---
    // ... (placeholder as before)

}); // End DOMContentLoaded