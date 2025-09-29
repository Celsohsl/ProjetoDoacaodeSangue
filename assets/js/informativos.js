// Dados dos informativos para exibição
const informativosPreview = [
    {
        id: 1,
        title: 'Por que doar sangue é importante?',
        date: '25/07/2025',
        icon: '📋',
        preview: 'Doar sangue regularmente é um ato de solidariedade que desempenha um papel vital na manutenção dos estoques. A doação de sangue é um ato voluntário que pode salvar até quatro vidas...'
    },
    {
        id: 2,
        title: 'Quem pode doar sangue?',
        date: '20/07/2025',
        icon: '🩺',
        preview: 'Para ser um doador de sangue, é necessário atender alguns critérios básicos de saúde e segurança. Confira se você está apto para essa importante missão...'
    },
    {
        id: 3,
        title: 'Mitos e verdades sobre doação',
        date: '05/07/2025',
        icon: '⚡',
        preview: 'Esclareça as principais dúvidas e mitos que cercam a doação de sangue. Informação baseada em evidências científicas...'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa página com templates necessários
    initializePage('Informativos', [], ['/assets/js/informativos.js']);

    loadInformativos();
    setupArticleLinks();
});

function loadInformativos() {
    const informativosContainer = document.getElementById('informativos-container');
    if (!informativosContainer) return;

    if (informativosPreview.length === 0) {
        informativosContainer.innerHTML = getEmptyStateTemplate(
            'bi-journal-text',
            'Nenhum informativo disponível',
            'No momento não há informativos publicados.',
            'Voltar ao início',
            'index.html'
        );
        return;
    }

    informativosContainer.innerHTML = informativosPreview.map(informativo =>
        getInformativoCardTemplate(informativo)
    ).join('');
}

function setupArticleLinks() {
    // Configura os links para os artigos completos
    const readMoreLinks = document.querySelectorAll('a[href*="informativo-detalhes.html"]');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            console.log('Navegando para artigo:', this.href);
        });
    });
}

// Disponibiliza dados dos informativos globalmente
window.informativosPreview = informativosPreview;