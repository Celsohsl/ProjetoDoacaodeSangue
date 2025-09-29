// Detalhes dos artigos com sistema de templates

const informativosData = [
    {
        id: 1,
        title: 'Por que doar sangue é importante?',
        date: '25/07/2025',
        readTime: '5 min',
        category: 'Conscientização',
        fullText: `
            <h2>A importância da doação de sangue regular</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 25/07/2025</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 5 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Conscientização</span>
            </div>
            
            <p>Doar sangue regularmente é um ato de solidariedade que desempenha um papel vital na manutenção dos estoques dos bancos de sangue, garantindo que haja suprimento suficiente para atender a emergências médicas, cirurgias complexas e tratamentos de doenças crônicas.</p>
            
            <div class="info-highlight">
                <h4>Fato Importante</h4>
                <p>Cada doação pode salvar até quatro vidas, pois o sangue é separado em diferentes componentes (hemácias, plaquetas e plasma), que podem ser utilizados para tratar pacientes com necessidades distintas.</p>
            </div>
            
            <p>O processo é rápido, seguro e supervisionado por profissionais de saúde. Além de ajudar o próximo, o doador também recebe uma avaliação de sua saúde, incluindo verificação de pressão arterial, pulso e níveis de hemoglobina.</p>
            
            <h3>Benefícios da doação regular</h3>
            <ul>
                <li>Contribui para salvar vidas em situações de emergência</li>
                <li>Ajuda pacientes com doenças crônicas como anemia falciforme e talassemia</li>
                <li>Essencial para cirurgias e tratamentos de câncer</li>
                <li>Permite check-up gratuito da sua saúde</li>
                <li>Estimula a produção de novas células sanguíneas</li>
            </ul>
            
            <p>Em muitos casos, a transfusão de sangue é a única esperança de vida para os pacientes. Seu gesto solidário pode fazer a diferença entre a vida e a morte para alguém que precisa.</p>
            
            <div class="success-box">
                <h4>Lembre-se</h4>
                <p>A doação de sangue é um ato voluntário, seguro e que traz benefícios tanto para quem recebe quanto para quem doa. Seja um herói anônimo e salve vidas!</p>
            </div>
        `
    },
    {
        id: 2,
        title: 'Quem pode doar sangue?',
        date: '20/07/2025',
        readTime: '7 min',
        category: 'Requisitos',
        fullText: `
            <h2>Quem pode doar sangue?</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 20/07/2025</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 7 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Requisitos</span>
            </div>
            
            <p>Para ser um doador de sangue, é preciso atender a alguns critérios básicos para garantir a segurança tanto do doador quanto do receptor.</p>
            
            <h3>Critérios básicos para doação</h3>
            <ul>
                <li>Ter entre 16 e 69 anos (menores de 18 precisam de autorização dos pais)</li>
                <li>Pesar no mínimo 50 kg</li>
                <li>Estar em boas condições de saúde</li>
                <li>Apresentar documento de identificação com foto</li>
                <li>Não estar em jejum (evitar apenas alimentos gordurosos antes da doação)</li>
            </ul>
            
            <h3>Intervalos entre doações</h3>
            <div class="info-highlight">
                <p><strong>Homens:</strong> podem doar a cada 2 meses (máximo 4 doações por ano)</p>
                <p><strong>Mulheres:</strong> podem doar a cada 3 meses (máximo 3 doações por ano)</p>
            </div>
            
            <h3>Situações que impedem a doação temporariamente</h3>
            <ul>
                <li>Gripe, resfriado ou febre nos últimos 7 dias</li>
                <li>Uso de medicamentos (consultar orientação médica)</li>
                <li>Consumo de bebidas alcoólicas nas últimas 12 horas</li>
                <li>Tatuagem ou piercing feitos nos últimos 12 meses</li>
                <li>Gravidez ou amamentação</li>
                <li>Viagem para áreas de risco epidemiológico</li>
            </ul>
            
            <h3>Impedimentos definitivos</h3>
            <div class="warning-box">
                <ul>
                    <li>Ter tido hepatite após os 11 anos de idade</li>
                    <li>Evidência clínica ou laboratorial de doenças como HIV, hepatites B e C, doença de Chagas</li>
                    <li>Uso de drogas ilícitas injetáveis</li>
                    <li>Malária</li>
                </ul>
            </div>
            
            <p>Antes de doar, você passará por uma triagem clínica onde um profissional de saúde avaliará se você está apto para a doação. Este processo é importante para garantir a segurança de todos os envolvidos.</p>
        `
    },
    {
        id: 3,
        title: 'Mitos e verdades sobre doação',
        date: '05/07/2025',
        readTime: '8 min',
        category: 'Esclarecimentos',
        fullText: `
            <h2>Mitos e verdades sobre doação de sangue</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 05/07/2025</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 8 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Esclarecimentos</span>
            </div>
            
            <p>Existem muitos mitos sobre a doação de sangue que afastam potenciais doadores. Vamos esclarecer as principais dúvidas com base em evidências científicas.</p>
            
            <h3>MITO: Doar sangue engorda</h3>
            <div class="success-box">
                <h4>VERDADE</h4>
                <p>A doação de sangue não causa ganho de peso. O que pode acontecer é um pequeno aumento temporário do apetite devido à reposição de líquidos e nutrientes, mas isso não resulta em ganho de peso permanente.</p>
            </div>
            
            <h3>MITO: Doar sangue vicia</h3>
            <div class="success-box">
                <h4>VERDADE</h4>
                <p>Não existe dependência física da doação de sangue. O que acontece é que muitas pessoas se sentem bem ao ajudar outros, criando uma motivação positiva para doar regularmente, o que é totalmente diferente de vício.</p>
            </div>
            
            <h3>MITO: Posso pegar doenças doando sangue</h3>
            <div class="success-box">
                <h4>VERDADE</h4>
                <p>É impossível contrair doenças durante a doação. Todo material utilizado é descartável e esterilizado. O risco zero é garantido pelos protocolos de segurança rigorosos.</p>
            </div>
            
            <h3>MITO: Pessoas com tatuagem nunca podem doar</h3>
            <div class="info-highlight">
                <h4>VERDADE</h4>
                <p>Pessoas com tatuagem podem doar, mas devem aguardar 12 meses após a realização da tatuagem. Este prazo garante que possíveis infecções sejam detectadas.</p>
            </div>
            
            <h3>MITO: A doação enfraquece o organismo</h3>
            <div class="success-box">
                <h4>VERDADE</h4>
                <p>O volume doado (450ml) representa apenas 8% do sangue total do corpo. O organismo repõe rapidamente este volume sem causar prejuízos à saúde.</p>
            </div>
            
            <h3>MITO: Mulheres menstruadas não podem doar</h3>
            <div class="info-highlight">
                <h4>VERDADE</h4>
                <p>Mulheres podem doar sangue durante a menstruação, desde que não apresentem sintomas como cólicas intensas, fraqueza ou mal-estar. A menstruação por si só não é impedimento para a doação.</p>
            </div>
            
            <h3>MITO: Doar sangue dói muito</h3>
            <div class="success-box">
                <h4>VERDADE</h4>
                <p>A dor é mínima e similar à de um exame de sangue comum. A picada da agulha dura apenas alguns segundos e o restante do processo é indolor.</p>
            </div>
            
            <h3>MITO: Preciso estar em jejum para doar</h3>
            <div class="info-highlight">
                <h4>VERDADE</h4>
                <p>Não é necessário jejum. Na verdade, é recomendado que o doador se alimente normalmente, evitando apenas alimentos muito gordurosos nas 3 horas que antecedem a doação.</p>
            </div>
            
            <div class="success-box">
                <h4>Conclusão</h4>
                <p>A informação correta é fundamental para desmistificar a doação de sangue. Converse com profissionais de saúde, esclareça suas dúvidas e considere ser um doador. Sua atitude pode salvar vidas!</p>
            </div>
        `
    },

];

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar página com templates
    initializePage('Detalhes do Informativo', ['/assets/css/informativo-detalhes.css'], ['/assets/js/informativo-detalhes.js']);

    // Carregar conteúdo do artigo
    loadArticleContent();
});

function loadArticleContent() {
    // Obtém o ID do artigo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    const contentDiv = document.getElementById('informativo-content');

    // Verifica se o ID é válido
    if (!articleId || isNaN(articleId)) {
        showErrorState(contentDiv, 'Artigo não encontrado');
        return;
    }

    // Busca o artigo pelo ID
    const article = informativosData.find(info => info.id === articleId);

    // Exibe o conteúdo do artigo ou mensagem de erro
    if (article) {
        contentDiv.innerHTML = article.fullText;
        updatePageTitle(article.title);
    } else {
        showErrorState(contentDiv, 'Artigo não encontrado');
    }
}

function showErrorState(contentDiv, message) {
    // Exibe mensagem de erro quando artigo não é encontrado
    contentDiv.innerHTML = getErrorTemplate(
        message,
        'O artigo que você está procurando não foi encontrado ou não existe mais.',
        'Voltar para Informativos',
        'informativos.html'
    );
}

function updatePageTitle(articleTitle) {
    // Atualiza o título da página com o título do artigo
    document.title = `${articleTitle} - Doação de Sangue Solidária`;
}

// Exportar funções para uso global
window.loadArticleContent = loadArticleContent;
window.informativosData = informativosData;