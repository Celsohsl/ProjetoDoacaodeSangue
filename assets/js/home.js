// Página inicial do sistema de doação de sangue

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa página com templates necessários
    initializePage('Início', ['/assets/css/home.css'], ['/assets/js/home.js']);

    loadFeaturedCampaigns();
    setupSmoothScrolling();
});

function loadFeaturedCampaigns() {
    const campaignsContainer = document.getElementById('featured-campaigns');
    if (!campaignsContainer) return;

    // Obtém as 3 primeiras campanhas em destaque
    const featuredCampaigns = mockCampaigns.slice(0, 3);

    if (featuredCampaigns.length === 0) {
        campaignsContainer.innerHTML = getEmptyStateTemplate(
            'bi-droplet-slash',
            'Nenhuma campanha disponível',
            'No momento não há campanhas em destaque.',
            'Ver todas as campanhas',
            'campanhas.html'
        );
        return;
    }

    campaignsContainer.innerHTML = featuredCampaigns.map(campaign =>
        getCampaignCardTemplate(campaign)
    ).join('');
}

function setupSmoothScrolling() {
    // Configura rolagem suave para links internos
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}