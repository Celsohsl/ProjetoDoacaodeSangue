// home.js - Homepage com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Início', ['/assets/css/home.css'], ['/assets/js/home.js']);
    
    // Aguardar carregamento dos templates e inicializar conteúdo da página
    setTimeout(() => {
        loadFeaturedCampaigns();
        setupSmoothScrolling();
    }, 100);
});

function loadFeaturedCampaigns() {
    const campaignsContainer = document.getElementById('featured-campaigns');
    if (!campaignsContainer) return;
    
    // Mostrar estado de carregamento
    campaignsContainer.innerHTML = getLoadingTemplate('Carregando campanhas em destaque...');
    
    // Simular delay de carregamento
    setTimeout(() => {
        // Obter as 3 primeiras campanhas como destaque
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
    }, 500);
}

function setupSmoothScrolling() {
    // Adicionar rolagem suave para links âncora
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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