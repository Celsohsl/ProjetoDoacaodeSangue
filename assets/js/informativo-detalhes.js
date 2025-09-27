// informativo-detalhes.js - Detalhes dos artigos com sistema de templates (Atualizado)

// Dados mock para artigos (6 artigos completos)
const informativosData = [
    {
        id: 1,
        title: 'Por que doar sangue é importante?',
        date: '25/06/2025',
        author: 'Equipe Médica',
        readTime: '5 min',
        category: 'Conscientização',
        fullText: `
            <h2>A importância da doação de sangue regular</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 25/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Equipe Médica</span>
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
        date: '20/06/2025',
        author: 'Dr. Maria Santos',
        readTime: '7 min',
        category: 'Requisitos',
        fullText: `
            <h2>Quem pode doar sangue?</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 20/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Dr. Maria Santos</span>
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
        title: 'Tipos sanguíneos e compatibilidade',
        date: '15/06/2025',
        author: 'Dr. João Oliveira',
        readTime: '6 min',
        category: 'Educação',
        fullText: `
            <h2>Tipos sanguíneos e compatibilidade</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 15/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Dr. João Oliveira</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 6 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Educação</span>
            </div>
            
            <p>Entender a compatibilidade entre os tipos sanguíneos é crucial para a segurança das transfusões. O sistema ABO, descoberto em 1900, classifica o sangue em diferentes tipos baseados na presença de antígenos.</p>
            
            <h3>Sistema ABO e Fator Rh</h3>
            <p>Existem 8 tipos principais de sangue, determinados pela presença ou ausência dos antígenos A, B e do fator Rh:</p>
            <ul>
                <li><strong>A+</strong> e <strong>A-</strong> (presença do antígeno A)</li>
                <li><strong>B+</strong> e <strong>B-</strong> (presença do antígeno B)</li>
                <li><strong>AB+</strong> e <strong>AB-</strong> (presença dos antígenos A e B)</li>
                <li><strong>O+</strong> e <strong>O-</strong> (ausência dos antígenos A e B)</li>
            </ul>
            
            <div class="info-highlight">
                <h4>Doador Universal</h4>
                <p>O tipo <strong>O-</strong> pode doar glóbulos vermelhos para todos os outros tipos, pois suas hemácias não possuem antígenos A, B ou Rh que possam causar reações.</p>
            </div>
            
            <div class="success-box">
                <h4>Receptor Universal</h4>
                <p>O tipo <strong>AB+</strong> pode receber glóbulos vermelhos de todos os outros tipos, pois já possui todos os antígenos.</p>
            </div>
            
            <h3>Regras de Compatibilidade</h3>
            <ul>
                <li><strong>Tipo A:</strong> pode doar para A e AB / pode receber de A e O</li>
                <li><strong>Tipo B:</strong> pode doar para B e AB / pode receber de B e O</li>
                <li><strong>Tipo AB:</strong> pode doar apenas para AB / pode receber de todos</li>
                <li><strong>Tipo O:</strong> pode doar para todos / pode receber apenas de O</li>
            </ul>
            
            <h3>Fator Rh</h3>
            <p>O fator Rh adiciona uma camada extra de compatibilidade:</p>
            <ul>
                <li><strong>Rh positivo (+):</strong> pode receber de Rh+ e Rh-</li>
                <li><strong>Rh negativo (-):</strong> só pode receber de Rh-</li>
            </ul>
            
            <div class="warning-box">
                <h4>Importante</h4>
                <p>Estas regras se aplicam principalmente aos glóbulos vermelhos. Para plasma e plaquetas, as regras podem ser diferentes. Por isso, sempre é feita uma prova cruzada antes da transfusão.</p>
            </div>
            
            <p>Conhecer seu tipo sanguíneo é importante não apenas para doação, mas também para sua própria saúde em caso de emergências médicas.</p>
        `
    },
    {
        id: 4,
        title: 'Cuidados pós-doação',
        date: '10/06/2025',
        author: 'Enfª Ana Costa',
        readTime: '4 min',
        category: 'Cuidados',
        fullText: `
            <h2>Cuidados pós-doação</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 10/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Enfª Ana Costa</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 4 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Cuidados</span>
            </div>
            
            <p>Após a doação de sangue, é importante seguir algumas orientações para garantir uma recuperação rápida e segura.</p>
            
            <h3>Imediatamente após a doação</h3>
            <ul>
                <li>Permaneça no local por pelo menos 15 minutos para observação</li>
                <li>Ingira os líquidos oferecidos (suco, água, café)</li>
                <li>Evite se levantar bruscamente</li>
                <li>Mantenha o curativo por pelo menos 4 horas</li>
            </ul>
            
            <h3>Nas primeiras 24 horas</h3>
            <div class="info-highlight">
                <ul>
                    <li>Beba bastante líquido (água, sucos naturais)</li>
                    <li>Alimente-se normalmente, dando preferência a alimentos ricos em ferro</li>
                    <li>Evite esforços físicos intensos</li>
                    <li>Não pratique esportes ou exercícios pesados</li>
                    <li>Evite bebidas alcoólicas</li>
                    <li>Não fume por pelo menos 2 horas</li>
                </ul>
            </div>
            
            <h3>Cuidados com o braço</h3>
            <ul>
                <li>Não carregue peso com o braço da punção</li>
                <li>Se aparecer um hematoma, aplique gelo nas primeiras 24h</li>
                <li>Após 24h, se o hematoma persistir, aplique compressas mornas</li>
                <li>Mantenha o curativo limpo e seco</li>
            </ul>
            
            <h3>Sinais de alerta</h3>
            <div class="warning-box">
                <p>Procure atendimento médico se apresentar:</p>
                <ul>
                    <li>Tontura intensa ou desmaio</li>
                    <li>Sangramento no local da punção</li>
                    <li>Dor intensa no braço</li>
                    <li>Febre</li>
                    <li>Hematoma muito grande ou que aumenta de tamanho</li>
                </ul>
            </div>
            
            <h3>Recuperação do volume sanguíneo</h3>
            <p>Seu organismo é muito eficiente na recuperação:</p>
            <ul>
                <li><strong>Líquidos:</strong> repostos em 24 horas</li>
                <li><strong>Glóbulos vermelhos:</strong> renovados em 4-6 semanas</li>
                <li><strong>Ferro:</strong> reposto em 6-8 semanas</li>
            </ul>
            
            <div class="success-box">
                <h4>Lembre-se</h4>
                <p>A doação de sangue é um procedimento seguro. Seguindo estas orientações simples, você terá uma recuperação tranquila e poderá doar novamente quando estiver apto.</p>
            </div>
        `
    },
    {
        id: 5,
        title: 'Mitos e verdades sobre doação',
        date: '05/06/2025',
        author: 'Dr. Carlos Mendes',
        readTime: '8 min',
        category: 'Esclarecimentos',
        fullText: `
            <h2>Mitos e verdades sobre doação de sangue</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 05/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Dr. Carlos Mendes</span>
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
    {
        id: 6,
        title: 'Processo de doação passo a passo',
        date: '01/06/2025',
        author: 'Equipe Hemocentro',
        readTime: '6 min',
        category: 'Processo',
        fullText: `
            <h2>Processo de doação passo a passo</h2>
            <div class="article-meta">
                <span class="meta-item"><i class="bi bi-calendar"></i> 01/06/2025</span>
                <span class="meta-item"><i class="bi bi-person"></i> Equipe Hemocentro</span>
                <span class="meta-item"><i class="bi bi-clock"></i> 6 min de leitura</span>
                <span class="meta-item"><i class="bi bi-tag"></i> Processo</span>
            </div>
            
            <p>Conhecer todo o processo de doação ajuda a reduzir a ansiedade e torna a experiência mais tranquila. Veja como funciona desde a chegada até a saída do hemocentro.</p>
            
            <h3>1. Cadastro e Documentação (10 minutos)</h3>
            <ul>
                <li>Apresentação de documento oficial com foto</li>
                <li>Preenchimento da ficha de cadastro</li>
                <li>Informações pessoais e de saúde</li>
                <li>Primeira visita: cadastro mais detalhado</li>
            </ul>
            
            <h3>2. Pré-triagem (15 minutos)</h3>
            <div class="info-highlight">
                <p>Verificação dos sinais vitais:</p>
                <ul>
                    <li>Peso e altura</li>
                    <li>Pressão arterial</li>
                    <li>Temperatura corporal</li>
                    <li>Frequência cardíaca</li>
                    <li>Teste de anemia (hemoglobina)</li>
                </ul>
            </div>
            
            <h3>3. Triagem Clínica (15-20 minutos)</h3>
            <p>Entrevista individual e confidencial com profissional de saúde:</p>
            <ul>
                <li>Avaliação do estado de saúde atual</li>
                <li>Histórico médico e medicamentos</li>
                <li>Comportamentos de risco</li>
                <li>Viagens recentes</li>
                <li>Procedimentos médicos recentes</li>
            </ul>
            
            <div class="success-box">
                <h4>Importante</h4>
                <p>Seja sempre sincero durante a triagem. As informações são confidenciais e fundamentais para garantir a segurança do sangue doado.</p>
            </div>
            
            <h3>4. Coleta do Sangue (8-12 minutos)</h3>
            <ul>
                <li>Assepsia rigorosa do local da punção</li>
                <li>Punção venosa com material estéril e descartável</li>
                <li>Coleta de 450ml de sangue (volume padrão)</li>
                <li>Coleta de amostras para testes laboratoriais</li>
                <li>Monitoramento constante durante todo processo</li>
            </ul>
            
            <h3>5. Lanche e Observação (15 minutos)</h3>
            <div class="info-highlight">
                <ul>
                    <li>Lanche oferecido pelo hemocentro</li>
                    <li>Hidratação com líquidos</li>
                    <li>Período de observação obrigatório</li>
                    <li>Orientações pós-doação</li>
                    <li>Agendamento da próxima doação</li>
                </ul>
            </div>
            
            <h3>6. Processamento e Testes</h3>
            <p>Após sua saída, o sangue doado passa por várias etapas:</p>
            <ul>
                <li>Separação em componentes (hemácias, plasma, plaquetas)</li>
                <li>Testes para doenças transmissíveis</li>
                <li>Tipagem sanguínea confirmada</li>
                <li>Armazenamento adequado</li>
                <li>Liberação para uso clínico</li>
            </ul>
            
            <div class="warning-box">
                <h4>Tempo total no hemocentro</h4>
                <p>Todo o processo dura aproximadamente 1 hora, sendo que apenas 8-12 minutos são da coleta propriamente dita.</p>
            </div>
            
            <h3>Resultados dos Exames</h3>
            <p>Você receberá os resultados dos exames realizados em seu sangue:</p>
            <ul>
                <li>Por correspondência (endereço cadastrado)</li>
                <li>Portal online do hemocentro</li>
                <li>Em caso de alteração, contato telefônico</li>
            </ul>
            
            <div class="success-box">
                <h4>Parabéns!</h4>
                <p>Ao completar este processo, você se tornará um doador de sangue e poderá orgulhar-se de ter ajudado a salvar vidas. A cada doação, até 4 pessoas podem ser beneficiadas!</p>
            </div>
        `
    }
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