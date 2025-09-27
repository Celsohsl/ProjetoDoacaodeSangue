// campanhas.js - Página de campanhas com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function () {
    // Carrega os componentes da página
    initializePage('Campanhas', [], ['/assets/js/campanhas.js']);

    // Inicializa o conteúdo após carregar os componentes
    setTimeout(() => {
        loadCampaigns();
        setupCampaignFilters();
    }, 100);
});

function loadCampaigns() {
    const campaignsContainer = document.getElementById('campanhas-container');
    const loadingContainer = document.getElementById('loading-campanhas');

    if (!campaignsContainer) return;

    // Exibe indicador de carregamento
    if (loadingContainer) {
        loadingContainer.innerHTML = getLoadingTemplate('Carregando campanhas...');
    }

    // Limpa indicador de carregamento
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
}

function setupCampaignFilters() {
    // Configuração dos filtros de campanhas
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('Filtro selecionado:', this.textContent);
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

// Disponibiliza função de filtro globalmente
window.filterCampaignsByBloodType = filterCampaignsByBloodType;