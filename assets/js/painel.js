// painel.js - Dashboard com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Painel', ['/assets/css/painel.css'], ['/assets/js/painel.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        setupPainelPage();
    }, 100);
});

function setupPainelPage() {
    // Verificar se usuário está logado
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    updateUserDashboard(currentUser);
    updateAppointmentsTable(currentUser);
    updateUserStats(currentUser);
    updateUserAchievement(currentUser);
}

function updateUserDashboard(user) {
    const userInfoCard = document.getElementById('user-info-card');
    if (userInfoCard) {
        userInfoCard.innerHTML = getUserInfoCardTemplate(user);
    }
}

function updateAppointmentsTable(user) {
    const tableBody = document.getElementById('agendamentosTable');
    if (!tableBody) return;

    const userAppointments = mockAppointments.filter(app => app.userId === user.id);

    if (userAppointments.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-4">
                    <div class="text-muted">
                        <i class="bi bi-calendar-x" style="font-size: 2rem;"></i>
                        <p class="mt-2 mb-0">Nenhum agendamento encontrado</p>
                        <a href="agendamento.html" class="btn btn-sm btn-custom-danger mt-2">
                            Agendar Doação
                        </a>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = userAppointments.map(appointment => {
        const campaign = mockCampaigns.find(c => c.id === appointment.campaignId);
        const statusClass = appointment.status === 'Confirmado' ? 'bg-success' : 
                           appointment.status === 'Pendente' ? 'bg-warning' : 'bg-secondary';

        return `
            <tr>
                <td>${campaign ? campaign.name : 'Campanha não encontrada'}</td>
                <td>${appointment.date} - ${appointment.time}</td>
                <td>${campaign ? campaign.location : 'Local não encontrado'}</td>
                <td><span class="badge ${statusClass}">${appointment.status}</span></td>
            </tr>
        `;
    }).join('');
}

function updateUserStats(user) {
    const statsContainer = document.getElementById('user-stats');
    if (statsContainer) {
        statsContainer.innerHTML = getUserStatsTemplate(user);
    }
}

function updateUserAchievement(user) {
    const achievementContainer = document.getElementById('user-achievement');
    if (!achievementContainer) return;
    
    let achievementLevel = '';
    let achievementIcon = '';
    
    if (user.donations === 0) {
        achievementLevel = 'Novo Doador';
        achievementIcon = '🌟';
    } else if (user.donations < 3) {
        achievementLevel = 'Doador Iniciante';
        achievementIcon = '🥉';
    } else if (user.donations < 5) {
        achievementLevel = 'Doador Comprometido';
        achievementIcon = '🥈';
    } else if (user.donations < 10) {
        achievementLevel = 'Doador Solidário de Nível Ouro';
        achievementIcon = '🏆';
    } else {
        achievementLevel = 'Doador Herói';
        achievementIcon = '👑';
    }
    
    achievementContainer.innerHTML = `${achievementIcon} Parabéns! Você é um ${achievementLevel}!`;
}

// Exportar funções para uso global
window.updateUserDashboard = updateUserDashboard;
window.updateAppointmentsTable = updateAppointmentsTable;
window.updateUserStats = updateUserStats;