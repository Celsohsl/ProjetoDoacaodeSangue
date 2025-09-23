// notificacoes.js - Notificações com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Notificações', ['/assets/css/notificacoes.css'], ['/assets/js/notificacoes.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        setupNotificacoesPage();
    }, 100);
});

function setupNotificacoesPage() {
    // Verificar se usuário está logado
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
    
    // Mostrar estado de carregamento
    container.innerHTML = getLoadingTemplate('Carregando notificações...');
    
    // Simular delay de carregamento
    setTimeout(() => {
        // Dados mock de notificações (poderiam ser obtidos de uma API)
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
    
    // Separar notificações lidas e não lidas
    const unreadNotifications = notifications.filter(n => !n.read);
    const readNotifications = notifications.filter(n => n.read);
    
    let html = '';
    
    // Adicionar seção de não lidas se existirem
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
    
    // Adicionar seção de lidas se existirem
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
    
    // Adicionar botão para marcar todas como lidas se existirem não lidas
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
    // Adicionar manipuladores de clique para notificações (delegação de eventos)
    document.addEventListener('click', function(e) {
        // Manipular clique individual na notificação
        if (e.target.closest('.notification.unread')) {
            const notification = e.target.closest('.notification');
            markAsRead(notification);
        }
        
        // Manipular botões de ação das notificações se houver
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
    
    // Adicionar feedback visual
    const title = notificationElement.querySelector('.notification-title');
    if (title && !title.innerHTML.includes('✓')) {
        title.innerHTML = title.innerHTML + ' <small class="text-success">✓</small>';
    }
    
    // Em uma aplicação real, seria enviado para o servidor
    const notificationId = notificationElement.dataset.id;
    console.log('Marcando notificação como lida:', notificationId);
    
    showMessage('Notificação marcada como lida', 'success');
}

function markAllAsRead() {
    const unreadNotifications = document.querySelectorAll('.notification.unread');
    
    unreadNotifications.forEach(notification => {
        markAsRead(notification);
    });
    
    // Atualizar a exibição após um pequeno delay
    setTimeout(() => {
        loadNotifications(); // Recarregar para atualizar as seções
    }, 1000);
    
    showMessage(`${unreadNotifications.length} notificações marcadas como lidas`, 'success');
}

function handleNotificationAction(action, notificationId) {
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
            console.log('Ação desconhecida:', action);
    }
}

// Exportar funções para uso global
window.markAllAsRead = markAllAsRead;
window.markAsRead = markAsRead;
window.handleNotificationAction = handleNotificationAction;