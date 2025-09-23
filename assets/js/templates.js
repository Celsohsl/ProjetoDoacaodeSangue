// templates.js - Sistema de templates reutilizáveis (Atualizado)

// Template do Header/Navbar
function getHeaderTemplate(currentPage = '') {
    const currentUser = getCurrentUser();
    const isLoggedIn = currentUser !== null;
    
    let navigation = '';
    
    if (isLoggedIn) {
        navigation = `
            <a class="btn btn-outline-light me-2 mb-2" href="index.html">🏠 Início</a>
            <a class="btn btn-outline-light me-2 mb-2" href="painel.html">👤 Painel</a>
            <a class="btn btn-outline-light me-2 mb-2" href="campanhas.html">
                <i class="bi bi-droplet-half"></i> Campanhas
            </a>
            <a class="btn btn-outline-light me-2 mb-2" href="agendamento.html">📅 Agendar</a>
            <a class="btn btn-outline-light me-2 mb-2" href="historico.html">📋 Histórico</a>
            <a class="btn btn-outline-light me-2 mb-2" href="notificacoes.html">🔔 Notificações</a>
            <a class="btn btn-outline-light me-2 mb-2" href="informativos.html">📋 Informativos</a>
            <a class="btn btn-outline-light me-2 mb-2" href="#" onclick="logout()">🚪 Sair</a>
        `;
    } else {
        navigation = `
            <a class="btn btn-outline-light me-2 mb-2" href="index.html">🏠 Início</a>
            <a class="btn btn-outline-light me-2 mb-2" href="campanhas.html">
                <i class="bi bi-droplet-half"></i> Campanhas
            </a>
            <a class="btn btn-outline-light me-2 mb-2" href="informativos.html">📋 Informativos</a>
            <a class="btn btn-outline-light me-2 mb-2" href="login.html">🔑 Login</a>
            <a class="btn btn-outline-light me-2 mb-2" href="cadastro.html">👤 Cadastrar</a>
        `;
    }
    
    return `
        <nav class="navbar navbar-expand-lg custom-header fixed-top">
            <div class="container">
                <a class="navbar-brand text-white" href="index.html">
                    <img src="/assets/images/doacao-de-sangue.png" alt="imagem da logo" width="50" height="50">
                    <span class="logo-text">Doação de Sangue Solidária</span>
                </a>

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ms-auto">
                        ${navigation}
                    </div>
                </div>
            </div>
        </nav>
    `;
}

// Template do Footer
function getFooterTemplate() {
    return `
        <footer class="custom-footer text-center py-4 mt-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4 mb-3">
                        <h5 class="mb-2">Sala de Doação de Sangue</h5>
                        <address class="mb-0">
                            <strong>Takasaki Harmony</strong><br>
                            <i class="bi bi-geo-alt" aria-hidden="true"></i>
                            〒370-0849 Gunma-ken Takasaki-shi 222 Yashima-cho,
                            JR Takasaki Estação East Exit 3F E-site
                            <br>
                            <p class="mb-2">
                                <i class="bi bi-telephone-fill" aria-hidden="true"></i>
                                Telefone: 0120-805-870
                            </p>
                        </address>
                    </div>

                    <nav class="col-md-4 mb-3">
                        <h5>Links Rápidos</h5>
                        <ul class="mb-0 list-unstyled">
                            <li><a href="index.html">Início</a></li>
                            <li><a href="campanhas.html">Campanhas</a></li>
                            <li><a href="informativos.html">Informativos</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="cadastro.html">Cadastre-se</a></li>
                        </ul>
                    </nav>
                    <div class="col-md-4 mb-3">
                        <h5 class="mb-2">Horário de Funcionamento</h5>
                        <p class="mb-1">Todos os dias da semana</p>
                        <p class="mb-1">Das: 10h às 13h, das 14h às 17h30</p>
                        <p class="mb-0">Folgas: 31 de Dezembro, 1 de Janeiro</p>
                    </div>
                </div>

                <hr class="mt-0 mb-2">

                <div class="text-center copyright">
                    <div class="row align-items-center">
                        <div class="col-md-8 text-center text-md-start mb-2 mb-md-0">
                            <p class="mb-0">
                                © 2025 Doação de Sangue Solidária.
                                Todos Direitos Reservados.
                            </p>
                        </div>
                        <div class="col-md-4 text-center text-md-end">
                            <p class="mb-2">
                                Desenvolvido por Celso
                                <a href="https://www.linkedin.com/in/celso-henrique-da-silva-lacerda-front-end/"
                                    class="fs-4 mx-1" aria-label="Linkedin"><i class="bi bi-linkedin"></i></a>
                                <a href="https://github.com/Celsohsl" class="fs-4" aria-label="github"><i
                                        class="bi bi-github"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

// Template do Head HTML
function getHeadTemplate(pageTitle, specificCSS = []) {
    const cssFiles = [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css',
        '/assets/css/style.css',
        ...specificCSS
    ];
    
    const cssLinks = cssFiles.map(css => `<link href="${css}" rel="stylesheet">`).join('\n        ');
    
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageTitle} - Doação de Sangue Solidária</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="/assets/images/favicon_io/site.webmanifest">

        <!-- Arquivos CSS -->
        ${cssLinks}
    `;
}

// Template dos Scripts
function getScriptsTemplate(specificJS = []) {
    const jsFiles = [
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js',
        '/assets/js/common.js',
        '/assets/js/templates.js',
        ...specificJS
    ];
    
    const scriptTags = jsFiles.map(js => `<script src="${js}"></script>`).join('\n        ');
    
    return scriptTags;
}

// Template para Card de Campanha
function getCampaignCardTemplate(campaign) {
    return `
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 campaign-card">
                <div class="card-body">
                    <h3 class="card-title">${campaign.icon || '🏥'} ${campaign.name}</h3>
                    <p class="mb-2"><strong>Local:</strong> ${campaign.location}</p>
                    <p class="mb-2"><strong>Período:</strong> ${campaign.startDate} a ${campaign.endDate}</p>
                    <p class="mb-2"><strong>Horário:</strong> ${campaign.hours}</p>
                    <p class="campaign-description mb-3">${campaign.description}</p>
                    <a href="agendamento.html" class="btn btn-custom-danger">Agendar Agora</a>
                </div>
            </div>
        </div>
    `;
}

// Template para Card de Informativo
function getInformativoCardTemplate(informativo) {
    return `
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 campaign-card">
                <div class="card-body">
                    <h3 class="card-title">${informativo.icon || '📋'} ${informativo.title}</h3>
                    <p class="mb-2"><strong>Data de Publicação:</strong> ${informativo.date}</p>
                    <p class="campaign-description mb-3">${informativo.preview}</p>
                    <a href="informativo-detalhes.html?id=${informativo.id}" class="btn btn-primary">Ler mais</a>
                </div>
            </div>
        </div>
    `;
}

// Template para Notificação
function getNotificationTemplate(notification) {
    return `
        <div class="notification p-3 mb-3 ${!notification.read ? 'unread' : ''}" data-id="${notification.id}">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="notification-title">${notification.title}</span>
                <span class="notification-date">${notification.date}</span>
            </div>
            <p class="mb-0">${notification.message}</p>
        </div>
    `;
}

// Template para Card de Informações do Usuário
function getUserInfoCardTemplate(user) {
    return `
        <h2 class="mb-4">Bem-vindo, ${user.name}! 👋</h2>
        <div class="row g-3">
            <div class="col-6 col-md-3">
                <div class="user-detail text-center p-3">
                    <strong>🩸 ${user.bloodType}</strong>
                    <span>Tipo Sanguíneo</span>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="user-detail text-center p-3">
                    <strong>📍 ${user.city}, ${user.state}</strong>
                    <span>Localização</span>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="user-detail text-center p-3">
                    <strong>📅 ${user.joinDate}</strong>
                    <span>Cadastrado em</span>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="user-detail text-center p-3">
                    <strong>${user.donations} Doações</strong>
                    <span>Total Realizado</span>
                </div>
            </div>
        </div>
    `;
}

// Template para Estatísticas do Usuário
function getUserStatsTemplate(user) {
    const nextDonation = user.donations > 0 ? '90 dias' : 'Disponível';
    
    return `
        <div class="col-6 col-md-3">
            <div class="stat-item text-center p-3">
                <strong>${user.donations}</strong>
                <br><span>Total de Doações</span>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-item text-center p-3">
                <strong>${user.donations * 4}</strong>
                <br><span>Vidas Salvas</span>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-item text-center p-3">
                <strong>${(user.donations * 0.5).toFixed(1)}L</strong>
                <br><span>Sangue Doado</span>
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="stat-item text-center p-3">
                <strong>${nextDonation}</strong>
                <br><span>Próxima Doação</span>
            </div>
        </div>
    `;
}

// Template para Estado de Carregamento
function getLoadingTemplate(message = 'Carregando...') {
    return `
        <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-3">${message}</p>
        </div>
    `;
}

// Template para Estado de Erro
function getErrorTemplate(title, message, buttonText = 'Voltar', buttonLink = 'index.html') {
    return `
        <div class="error-state text-center py-5">
            <div class="error-icon">
                <i class="bi bi-exclamation-circle text-danger" style="font-size: 3rem;"></i>
            </div>
            <h3 class="mt-3">${title}</h3>
            <p class="text-muted mb-4">${message}</p>
            <a href="${buttonLink}" class="btn btn-primary">
                <i class="bi bi-arrow-left"></i> ${buttonText}
            </a>
        </div>
    `;
}

// Template para Estado Vazio
function getEmptyStateTemplate(icon, title, message, buttonText = '', buttonLink = '') {
    const button = buttonText ? `<a href="${buttonLink}" class="btn btn-primary mt-3">${buttonText}</a>` : '';
    
    return `
        <div class="empty-state text-center py-5">
            <i class="bi ${icon} text-muted" style="font-size: 3rem;"></i>
            <h4 class="mt-3">${title}</h4>
            <p class="text-muted">${message}</p>
            ${button}
        </div>
    `;
}

// Função para renderizar templates em elementos específicos
function renderTemplate(elementId, templateFunction, ...args) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = templateFunction(...args);
    }
}

// Função para inicializar header e footer automaticamente
function initializeTemplates(pageTitle = '') {
    // Renderizar header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = getHeaderTemplate();
    }
    
    // Renderizar footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = getFooterTemplate();
    }
    
    // Atualizar título da página se fornecido
    if (pageTitle) {
        document.title = `${pageTitle} - Doação de Sangue Solidária`;
    }
}

// Função para inicializar página completa
function initializePage(pageTitle, specificCSS = [], specificJS = []) {
    // Configurar head
    const headContainer = document.getElementById('head-container');
    if (headContainer) {
        headContainer.innerHTML = getHeadTemplate(pageTitle, specificCSS);
    }
    
    // Configurar templates básicos
    initializeTemplates(pageTitle);
    
    // Configurar scripts
    const scriptsContainer = document.getElementById('scripts-container');
    if (scriptsContainer) {
        scriptsContainer.innerHTML = getScriptsTemplate(specificJS);
    }
}

// Exportar funções para uso global
window.getHeaderTemplate = getHeaderTemplate;
window.getFooterTemplate = getFooterTemplate;
window.getHeadTemplate = getHeadTemplate;
window.getScriptsTemplate = getScriptsTemplate;
window.getCampaignCardTemplate = getCampaignCardTemplate;
window.getInformativoCardTemplate = getInformativoCardTemplate;
window.getNotificationTemplate = getNotificationTemplate;
window.getUserInfoCardTemplate = getUserInfoCardTemplate;
window.getUserStatsTemplate = getUserStatsTemplate;
window.getLoadingTemplate = getLoadingTemplate;
window.getErrorTemplate = getErrorTemplate;
window.getEmptyStateTemplate = getEmptyStateTemplate;
window.renderTemplate = renderTemplate;
window.initializeTemplates = initializeTemplates;
window.initializePage = initializePage;