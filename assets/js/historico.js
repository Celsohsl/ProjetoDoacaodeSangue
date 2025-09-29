// Página de histórico de doações de sangue

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a página com os componentes necessários
    initializePage('Histórico', [], ['/assets/js/historico.js']);

    setTimeout(() => {
        setupHistoricoPage();
    }, 100);
});

function setupHistoricoPage() {
    // Verifica autenticação do usuário
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

    // Exibe indicador de carregamento
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

    setTimeout(() => {
        // Cria histórico com base no número de doações do usuário
        const historyData = [];
        for (let i = 0; i < user.donations; i++) {
            const date = new Date();
            date.setMonth(date.getMonth() - (i + 1) * 2); // Intervalo de 2 meses entre doações

            historyData.push({
                campaign: mockCampaigns[i % mockCampaigns.length].name,
                date: date.toLocaleDateString('pt-BR'),
                location: mockCampaigns[i % mockCampaigns.length].location,
                status: 'Concluída'
            });
        }

        // Exibe mensagem quando não há doações
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

        // Ordena doações por data mais recente
        historyData.sort((a, b) => new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-')));

        // Preenche a tabela com o histórico de doações
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

        // Adiciona resumo das doações
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