// Sistema de agendamento templates

document.addEventListener('DOMContentLoaded', function () {
    initializePage('Agendamento', [], ['/assets/js/agendamento.js']);

    setTimeout(() => {
        setupAgendamentoPage();
    }, 100);
});

function setupAgendamentoPage() {
    const agendamentoForm = document.getElementById('agendamentoForm');

    if (agendamentoForm) {
        populateCampaignSelect();
        agendamentoForm.addEventListener('submit', handleScheduleAppointment);
    }
}

function populateCampaignSelect() {
    const campaignSelect = document.getElementById('campanha_select');
    if (!campaignSelect) return;

    // Preserva a opção padrão
    const firstOption = campaignSelect.querySelector('option[value=""]');
    campaignSelect.innerHTML = '';
    if (firstOption) {
        campaignSelect.appendChild(firstOption);
    }

    // Adiciona campanhas disponíveis
    mockCampaigns.forEach(campaign => {
        const option = document.createElement('option');
        option.value = campaign.id;
        option.textContent = campaign.name;
        campaignSelect.appendChild(option);
    });
}

function handleScheduleAppointment(event) {
    event.preventDefault();

    // Verificação de autenticação
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showMessage('Você precisa fazer login para agendar uma doação', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }

    const campaignId = document.getElementById('campanha_select').value;
    const date = document.getElementById('data_agendamento').value;
    const time = document.getElementById('hora_agendamento').value;

    if (!campaignId || !date || !time) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Validação da data
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showMessage('Não é possível agendar para datas passadas', 'error');
        return;
    }

    // Verificação de agendamento duplicado
    const existingAppointment = mockAppointments.find(
        app => app.userId === currentUser.id &&
            app.campaignId === parseInt(campaignId) &&
            app.status === 'Confirmado'
    );

    if (existingAppointment) {
        showMessage('Você já tem um agendamento para esta campanha', 'warning');
        return;
    }

    // Criação do novo agendamento
    const newAppointment = {
        id: mockAppointments.length + 1,
        userId: currentUser.id,
        campaignId: parseInt(campaignId),
        date: new Date(date).toLocaleDateString('pt-BR'),
        time: time,
        status: 'Confirmado'
    };

    mockAppointments.push(newAppointment);

    document.getElementById('agendamentoForm').reset();
    showMessage('Agendamento realizado com sucesso!', 'success');

    setTimeout(() => {
        window.location.href = 'painel.html';
    }, 2000);
}

window.handleScheduleAppointment = handleScheduleAppointment;