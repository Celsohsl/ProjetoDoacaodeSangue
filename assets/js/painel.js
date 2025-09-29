// Painel de controle do usuário com sistema de templates

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a página com templates e estilos
    initializePage('Painel', ['/assets/css/painel.css'], ['/assets/js/painel.js']);

    // Aguarda carregamento dos templates e configura funcionalidades
    setTimeout(() => {
        setupPainelPage();
    }, 100);
});

function setupPainelPage() {
    // Verifica autenticação do usuário
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

    // Exibe mensagem quando não há agendamentos
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

    // Preenche tabela com agendamentos do usuário
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

    // Define nível e ícone com base no número de doações
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

// Funções disponíveis globalmente
window.updateUserDashboard = updateUserDashboard;
window.updateAppointmentsTable = updateAppointmentsTable;
window.updateUserStats = updateUserStats;