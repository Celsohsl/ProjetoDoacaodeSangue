// Sistema de gerenciamento de notificações

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa página com templates e estilos
    initializePage('Notificações', ['/assets/css/notificacoes.css'], ['/assets/js/notificacoes.js']);

    setTimeout(() => {
        setupNotificacoesPage();
    }, 100);
});

function setupNotificacoesPage() {
    // Verifica autenticação do usuário
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    loadNotifications();
    setupNotificationInteractions();
}

function loadNotifications() {
    const container = document.getElementById('notificacoes-container');
    if (!container) return;

    // Exibe indicador de carregamento
    container.innerHTML = getLoadingTemplate('Carregando notificações...');

    setTimeout(() => {
        // Dados simulados de notificações
        const notifications = [
            {
                id: 1,
                title: "🩸 Nova Campanha Disponível",
                message: "A Campanha Hospital Central está com estoque crítico de sangue tipo O+. Sua ajuda é essencial!",
                date: "27/06/2025",
                read: false
            },
            {
                id: 2,
                title: "📅 Lembrete de Agendamento",
                message: "Você tem um agendamento confirmado para 05/07/2025 às 14:00 no Hospital Central. Não esqueça!",
                date: "26/06/2025",
                read: false
            },
            {
                id: 3,
                title: "✅ Doação Confirmada",
                message: "Sua doação foi processada com sucesso! Obrigado por salvar vidas. Você pode doar novamente em 90 dias.",
                date: "15/06/2025",
                read: true
            },
            {
                id: 4,
                title: "🎉 Parabéns pela Meta!",
                message: "Você completou 5 doações! Agora você é um Doador Solidário de Nível Ouro.",
                date: "10/06/2025",
                read: true
            },
            {
                id: 5,
                title: "📋 Resultados dos Exames",
                message: "Os resultados dos seus exames estão disponíveis. Todos os valores estão dentro da normalidade.",
                date: "05/06/2025",
                read: true
            }
        ];

        displayNotifications(notifications);
    }, 500);
}

function displayNotifications(notifications) {
    const container = document.getElementById('notificacoes-container');
    if (!container) return;

    // Exibe mensagem quando não há notificações
    if (notifications.length === 0) {
        container.innerHTML = getEmptyStateTemplate(
            'bi-bell-slash',
            'Nenhuma notificação',
            'Você não tem notificações no momento.',
            'Voltar ao painel',
            'painel.html'
        );
        return;
    }

    // Organiza notificações por status de leitura
    const unreadNotifications = notifications.filter(n => !n.read);
    const readNotifications = notifications.filter(n => n.read);

    let html = '';

    // Seção de notificações não lidas
    if (unreadNotifications.length > 0) {
        html += `
            <div class="mb-4">
                <h4 class="text-primary mb-3">
                    <i class="bi bi-bell-fill"></i> Não lidas (${unreadNotifications.length})
                </h4>
                ${unreadNotifications.map(notification => getNotificationTemplate(notification)).join('')}
            </div>
        `;
    }

    // Seção de notificações lidas
    if (readNotifications.length > 0) {
        html += `
            <div class="mb-4">
                <h4 class="text-muted mb-3">
                    <i class="bi bi-check-circle"></i> Lidas
                </h4>
                ${readNotifications.map(notification => getNotificationTemplate(notification)).join('')}
            </div>
        `;
    }

    // Botão para marcar todas como lidas
    if (unreadNotifications.length > 0) {
        html += `
            <div class="text-center mt-4">
                <button class="btn btn-outline-primary" onclick="markAllAsRead()">
                    <i class="bi bi-check-all"></i> Marcar todas como lidas
                </button>
            </div>
        `;
    }

    container.innerHTML = html;
}

function setupNotificationInteractions() {
    // Configura interações com as notificações
    document.addEventListener('click', function (e) {
        // Tratamento de clique em notificação individual
        if (e.target.closest('.notification.unread')) {
            const notification = e.target.closest('.notification');
            markAsRead(notification);
        }

        // Tratamento de ações específicas
        if (e.target.matches('.notification-action')) {
            e.preventDefault();
            const action = e.target.dataset.action;
            const notificationId = e.target.closest('.notification').dataset.id;
            handleNotificationAction(action, notificationId);
        }
    });
}

function markAsRead(notificationElement) {
    notificationElement.classList.remove('unread');

    // Adiciona indicador visual de leitura
    const title = notificationElement.querySelector('.notification-title');
    if (title && !title.innerHTML.includes('✓')) {
        title.innerHTML = title.innerHTML + ' <small class="text-success">✓</small>';
    }

    const notificationId = notificationElement.dataset.id;
    console.log('Notificação marcada como lida:', notificationId);

    showMessage('Notificação marcada como lida', 'success');
}

function markAllAsRead() {
    const unreadNotifications = document.querySelectorAll('.notification.unread');

    unreadNotifications.forEach(notification => {
        markAsRead(notification);
    });

    // Atualiza interface após marcar todas como lidas
    setTimeout(() => {
        loadNotifications();
    }, 1000);

    showMessage(`${unreadNotifications.length} notificações marcadas como lidas`, 'success');
}

function handleNotificationAction(action, notificationId) {
    // Tratamento das ações das notificações
    switch (action) {
        case 'view-campaign':
            window.location.href = 'campanhas.html';
            break;
        case 'view-appointment':
            window.location.href = 'painel.html';
            break;
        case 'view-results':
            showMessage('Redirecionando para resultados...', 'info');
            break;
        default:
            console.log('Ação não reconhecida:', action);
    }
}

// Funções disponíveis globalmente
window.markAllAsRead = markAllAsRead;
window.markAsRead = markAsRead;
window.handleNotificationAction = handleNotificationAction;