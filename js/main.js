// NutriVida - Scripts Principales
document.addEventListener('DOMContentLoaded', () => {
    console.log('NutriVida cargado correctamente.');

    // Filtros de Servicios
    const filterButtons = document.querySelectorAll('.btn-filtro');
    const serviceCards = document.querySelectorAll('#grid-servicios .card-service');

    if (filterButtons.length > 0 && serviceCards.length > 0) {
        filterButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Actualizar estado activo de los botones
                filterButtons.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');

                const selectedCategory = btn.id;

                // Filtrar tarjetas
                serviceCards.forEach((card) => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedCategory === 'todos' || cardCategory === selectedCategory) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
