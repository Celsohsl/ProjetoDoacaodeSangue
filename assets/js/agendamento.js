// agendamento.js - Agendamento com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Agendamento', [], ['/assets/js/agendamento.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        setupAgendamentoPage();
    }, 100);
});

function setupAgendamentoPage() {
    const agendamentoForm = document.getElementById('agendamentoForm');
    
    if (agendamentoForm) {
        // Popular dropdown de campanhas
        populateCampaignSelect();
        
        // Configurar manipulador do formulário
        agendamentoForm.addEventListener('submit', handleScheduleAppointment);
    }
}

function populateCampaignSelect() {
    const campaignSelect = document.getElementById('campanha_select');
    if (!campaignSelect) return;
    
    // Limpar opções existentes exceto a primeira
    const firstOption = campaignSelect.querySelector('option[value=""]');
    campaignSelect.innerHTML = '';
    if (firstOption) {
        campaignSelect.appendChild(firstOption);
    }
    
    // Adicionar opções de campanhas
    mockCampaigns.forEach(campaign => {
        const option = document.createElement('option');
        option.value = campaign.id;
        option.textContent = campaign.name;
        campaignSelect.appendChild(option);
    });
}

function handleScheduleAppointment(event) {
    event.preventDefault();
    
    // Verificar se usuário está logado
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

    // Verificar se a data não está no passado
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showMessage('Não é possível agendar para datas passadas', 'error');
        return;
    }

    // Verificar se usuário já tem agendamento para a mesma campanha
    const existingAppointment = mockAppointments.find(
        app => app.userId === currentUser.id && 
               app.campaignId === parseInt(campaignId) && 
               app.status === 'Confirmado'
    );

    if (existingAppointment) {
        showMessage('Você já tem um agendamento para esta campanha', 'warning');
        return;
    }

    // Simular criação do agendamento
    const newAppointment = {
        id: mockAppointments.length + 1,
        userId: currentUser.id,
        campaignId: parseInt(campaignId),
        date: new Date(date).toLocaleDateString('pt-BR'),
        time: time,
        status: 'Confirmado'
    };

    mockAppointments.push(newAppointment);

    // Limpar formulário
    document.getElementById('agendamentoForm').reset();

    showMessage('Agendamento realizado com sucesso!', 'success');
    
    // Redirecionar para dashboard
    setTimeout(() => {
        window.location.href = 'painel.html';
    }, 2000);
}

// Exportar funções para uso global
window.handleScheduleAppointment = handleScheduleAppointment;