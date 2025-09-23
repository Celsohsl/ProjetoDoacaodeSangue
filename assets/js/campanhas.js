// campanhas.js - Página de campanhas com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Campanhas', [], ['/assets/js/campanhas.js']);
    
    // Aguardar carregamento dos templates e inicializar conteúdo da página
    setTimeout(() => {
        loadCampaigns();
        setupCampaignFilters();
    }, 100);
});

function loadCampaigns() {
    const campaignsContainer = document.getElementById('campanhas-container');
    const loadingContainer = document.getElementById('loading-campanhas');
    
    if (!campaignsContainer) return;
    
    // Mostrar estado de carregamento
    if (loadingContainer) {
        loadingContainer.innerHTML = getLoadingTemplate('Carregando campanhas...');
    }
    
    // Simular delay de carregamento
    setTimeout(() => {
        // Limpar carregamento
        if (loadingContainer) {
            loadingContainer.innerHTML = '';
        }
        
        if (mockCampaigns.length === 0) {
            campaignsContainer.innerHTML = getEmptyStateTemplate(
                'bi-droplet-slash',
                'Nenhuma campanha disponível',
                'No momento não há campanhas ativas.',
                'Voltar ao início',
                'index.html'
            );
            return;
        }
        
        campaignsContainer.innerHTML = mockCampaigns.map(campaign => 
            getCampaignCardTemplate(campaign)
        ).join('');
    }, 500);
}

function setupCampaignFilters() {
    // Implementação futura para filtrar campanhas por tipo sanguíneo, localização, etc.
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Lógica de filtro seria implementada aqui
            console.log('Filtro clicado:', this.textContent);
        });
    });
}

function filterCampaignsByBloodType(bloodType) {
    const campaignsContainer = document.getElementById('campanhas-container');
    if (!campaignsContainer) return;
    
    let filteredCampaigns = mockCampaigns;
    
    if (bloodType && bloodType !== 'all') {
        filteredCampaigns = mockCampaigns.filter(campaign => 
            campaign.bloodTypes.includes(bloodType)
        );
    }
    
    if (filteredCampaigns.length === 0) {
        campaignsContainer.innerHTML = getEmptyStateTemplate(
            'bi-search',
            'Nenhuma campanha encontrada',
            `Não há campanhas disponíveis para o tipo sanguíneo ${bloodType}.`,
            'Ver todas as campanhas',
            'campanhas.html'
        );
        return;
    }
    
    campaignsContainer.innerHTML = filteredCampaigns.map(campaign => 
        getCampaignCardTemplate(campaign)
    ).join('');
}

// Exportar funções para uso global
window.filterCampaignsByBloodType = filterCampaignsByBloodType;