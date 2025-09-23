// historico.js - Histórico de doações com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Histórico', [], ['/assets/js/historico.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        setupHistoricoPage();
    }, 100);
});

function setupHistoricoPage() {
    // Verificar se usuário está logado
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    updateHistoryTable(currentUser);
}

function updateHistoryTable(user) {
    const historyTableBody = document.getElementById('historicoTable');
    if (!historyTableBody) return;

    // Mostrar estado de carregamento
    historyTableBody.innerHTML = `
        <tr>
            <td colspan="4" class="text-center py-4">
                <div class="spinner-border spinner-border-sm text-primary" role="status">
                    <span class="visually-hidden">Carregando...</span>
                </div>
                <p class="mt-2 mb-0">Carregando histórico...</p>
            </td>
        </tr>
    `;

    // Simular delay de carregamento
    setTimeout(() => {
        // Simular histórico baseado no número de doações
        const historyData = [];
        for (let i = 0; i < user.donations; i++) {
            const date = new Date();
            date.setMonth(date.getMonth() - (i + 1) * 2); // Espaçar doações a cada 2 meses

            historyData.push({
                campaign: mockCampaigns[i % mockCampaigns.length].name,
                date: date.toLocaleDateString('pt-BR'),
                location: mockCampaigns[i % mockCampaigns.length].location,
                status: 'Concluída'
            });
        }

        if (historyData.length === 0) {
            historyTableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="text-center py-5">
                        <div class="text-muted">
                            <i class="bi bi-clock-history" style="font-size: 3rem;"></i>
                            <h4 class="mt-3">Nenhuma doação realizada ainda</h4>
                            <p>Quando você fizer sua primeira doação, ela aparecerá aqui.</p>
                            <a href="campanhas.html" class="btn btn-custom-danger mt-2">
                                <i class="bi bi-droplet-half"></i> Ver Campanhas
                            </a>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        // Ordenar por data (mais recente primeiro)
        historyData.sort((a, b) => new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-')));

        historyTableBody.innerHTML = historyData.map((item, index) => `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <i class="bi bi-droplet-fill text-danger me-2"></i>
                        ${item.campaign}
                    </div>
                </td>
                <td>${item.date}</td>
                <td>
                    <small class="text-muted">
                        <i class="bi bi-geo-alt"></i> ${item.location}
                    </small>
                </td>
                <td>
                    <span class="badge bg-success">
                        <i class="bi bi-check-circle"></i> ${item.status}
                    </span>
                </td>
            </tr>
        `).join('');

        // Adicionar linha de resumo
        historyTableBody.innerHTML += `
            <tr class="table-info">
                <td colspan="4" class="text-center fw-bold">
                    <i class="bi bi-heart-fill text-danger"></i> 
                    Total: ${historyData.length} doações realizadas
                    <small class="text-muted ms-2">
                        (~${(historyData.length * 4)} vidas salvas)
                    </small>
                </td>
            </tr>
        `;
    }, 800);
}