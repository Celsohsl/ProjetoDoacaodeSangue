// informativos.js - Informativos com sistema de templates (Atualizado)

// Dados mock para preview dos informativos
const informativosPreview = [
    {
        id: 1,
        title: 'Por que doar sangue é importante?',
        date: '25/06/2025',
        icon: '📋',
        preview: 'Doar sangue regularmente é um ato de solidariedade que desempenha um papel vital na manutenção dos estoques. A doação de sangue é um ato voluntário que pode salvar até quatro vidas...'
    },
    {
        id: 2,
        title: 'Quem pode doar sangue?',
        date: '20/06/2025',
        icon: '🩺',
        preview: 'Para ser um doador de sangue, é necessário atender alguns critérios básicos de saúde e segurança. Confira se você está apto para essa importante missão...'
    },
    // {
    //     id: 3,
    //     title: 'Tipos sanguíneos e compatibilidade',
    //     date: '15/06/2025',
    //     icon: '🔬',
    //     preview: 'Entenda como funciona a compatibilidade entre os diferentes tipos sanguíneos e por que alguns são considerados doadores universais...'
    // },
    // {
    //     id: 4,
    //     title: 'Cuidados pós-doação',
    //     date: '10/06/2025',
    //     icon: '💊',
    //     preview: 'Saiba quais cuidados tomar após a doação de sangue para garantir uma recuperação rápida e segura. Dicas importantes para doadores...'
    // },
    {
        id: 3,
        title: 'Mitos e verdades sobre doação',
        date: '05/06/2025',
        icon: '⚡',
        preview: 'Esclareça as principais dúvidas e mitos que cercam a doação de sangue. Informação baseada em evidências científicas...'
    },
    // {
    //     id: 6,
    //     title: 'Processo de doação passo a passo',
    //     date: '01/06/2025',
    //     icon: '🏥',
    //     preview: 'Conheça todo o processo de doação desde a chegada ao hemocentro até a finalização. Tire suas dúvidas sobre o procedimento...'
    // }
];

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Informativos', [], ['/assets/js/informativos.js']);
    
    // Aguardar carregamento dos templates e inicializar conteúdo da página
    setTimeout(() => {
        loadInformativos();
        setupArticleLinks();
    }, 100);
});

function loadInformativos() {
    const informativosContainer = document.getElementById('informativos-container');
    if (!informativosContainer) return;
    
    // Mostrar estado de carregamento
    informativosContainer.innerHTML = getLoadingTemplate('Carregando informativos...');
    
    // Simular delay de carregamento
    setTimeout(() => {
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
    }, 500);
}

function setupArticleLinks() {
    // Esta função executa após os artigos serem carregados
    setTimeout(() => {
        const readMoreLinks = document.querySelectorAll('a[href*="informativo-detalhes.html"]');
        
        readMoreLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Links já têm href correto com parâmetro ID
                console.log('Navegando para artigo:', this.href);
            });
        });
    }, 600);
}

// Exportar funções para uso global
window.informativosPreview = informativosPreview;