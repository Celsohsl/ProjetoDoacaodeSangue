// common.js - Funções compartilhadas e utilitários (Atualizado para Sistema de Templates)

// Dados mock para a aplicação
const mockUsers = [
    {
        id: 1,
        name: "João Silva",
        email: "joao@exemplo.com",
        password: "123456",
        phone: "(11) 99999-9999",
        bloodType: "A+",
        city: "São Paulo",
        state: "SP",
        donations: 5,
        joinDate: "15/03/2025"
    }
];

const mockCampaigns = [
    {
        id: 1,
        name: "Campanha Hospital Central",
        location: "Hospital Central - Centro",
        startDate: "01/07/2025",
        endDate: "15/07/2025",
        hours: "8h às 17h",
        description: "Precisamos urgentemente de doadores tipo O+ e AB-. Ajude-nos a salvar vidas!",
        bloodTypes: ["O+", "AB-"],
        icon: "🏥"
    },
    {
        id: 2,
        name: "Campanha Hemocentro Regional",
        location: "Hemocentro Regional - Zona Sul",
        startDate: "28/06/2025",
        endDate: "10/07/2025",
        hours: "7h às 18h",
        description: "Estoque baixo de sangue tipo A+ e O-. Sua doação é essencial!",
        bloodTypes: ["A+", "O-"],
        icon: "🩸"
    },
    {
        id: 3,
        name: "Campanha Móvel Shopping",
        location: "Shopping Center - Praça Central",
        startDate: "29/06/2025",
        endDate: "29/06/2025",
        hours: "10h às 16h",
        description: "Unidade móvel de coleta. Doe sangue de forma prática e rápida!",
        bloodTypes: ["A+", "B+", "O+", "AB+"],
        icon: "🚐"
    },
    // {
    //     id: 4,
    //     name: "Campanha Hospital da Criança",
    //     location: "Hospital da Criança - Zona Norte",
    //     startDate: "02/07/2025",
    //     endDate: "20/07/2025",
    //     hours: "8h às 16h",
    //     description: "Campanha especial para atendimento pediátrico. Necessidade de todos os tipos sanguíneos.",
    //     bloodTypes: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    //     icon: "🏥"
    // },
    // {
    //     id: 5,
    //     name: "Campanha Hospital Universitário",
    //     location: "Hospital Universitário - Centro",
    //     startDate: "05/07/2025",
    //     endDate: "25/07/2025",
    //     hours: "7h às 18h",
    //     description: "Campanha para reposição geral de estoque. Atendimento estendido nos finais de semana.",
    //     bloodTypes: ["A+", "B+", "O+", "AB+"],
    //     icon: "🏥"
    // },
    // {
    //     id: 6,
    //     name: "Campanha Móvel Universidade",
    //     location: "Universidade Federal - Campus Central",
    //     startDate: "03/07/2025",
    //     endDate: "03/07/2025",
    //     hours: "9h às 16h",
    //     description: "Unidade móvel especial para estudantes e funcionários universitários. Campanha de um dia.",
    //     bloodTypes: ["A+", "B+", "O+"],
    //     icon: "🚐"
    // }
];

const mockAppointments = [
    {
        id: 1,
        userId: 1,
        campaignId: 1,
        date: "05/07/2025",
        time: "14:00",
        status: "Confirmado"
    }
];

// Estado da aplicação
let currentUser = null;
let isLoggedIn = false;

// Funções utilitárias
function showMessage(message, type = 'info') {
    // Remove mensagens existentes
    const existingMessages = document.querySelectorAll('.toast-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `toast-message alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    messageDiv.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
    `;
    
    messageDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(messageDiv);

    // Remove automaticamente após 5 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.classList.remove('show');
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Funções de validação de formulários
function validateField(field) {
    const value = field.value.trim();
    
    // Limpa erros anteriores
    clearFieldError(field);

    // Validação de campo obrigatório
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    }

    // Validação de email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Por favor, insira um email válido');
            return false;
        }
    }

    // Validação de senha
    if (field.type === 'password' && value) {
        if (value.length < 6) {
            showFieldError(field, 'A senha deve ter pelo menos 6 caracteres');
            return false;
        }
    }

    return true;
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');

    // Remove erro anterior se existir
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }

    // Adiciona nova mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;

    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
    
    const errorMessage = field.parentNode.querySelector('.invalid-feedback');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Funções de gerenciamento de usuário
function getCurrentUser() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        try {
            return JSON.parse(savedUser);
        } catch (e) {
            localStorage.removeItem('currentUser');
        }
    }
    return null;
}

function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

function logout() {
    localStorage.removeItem('currentUser');
    showMessage('Logout realizado com sucesso!', 'success');
    
    // Redireciona para a página inicial
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Funções de configuração de formulários
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => validateField(e.target));
            input.addEventListener('input', (e) => clearFieldError(e.target));
        });
    });
}

function setupDateInputs() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        const today = new Date().toISOString().split('T')[0];
        input.setAttribute('min', today);
    });
}

// Manipulador de colapso da navbar
function setupNavbarCollapse() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        navbarCollapse.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    }
}

// Inicializa funcionalidades comuns
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza estado global do usuário
    currentUser = getCurrentUser();
    isLoggedIn = currentUser !== null;
    
    // Configura funcionalidades comuns após carregamento dos templates
    setTimeout(() => {
        setupFormValidation();
        setupDateInputs();
        setupNavbarCollapse();
    }, 100);
});

// Exporta funções para uso global
window.showMessage = showMessage;
window.getCurrentUser = getCurrentUser;
window.isUserLoggedIn = isUserLoggedIn;
window.logout = logout;
window.validateField = validateField;
window.showFieldError = showFieldError;
window.clearFieldError = clearFieldError;
window.mockUsers = mockUsers;
window.mockCampaigns = mockCampaigns;
window.mockAppointments = mockAppointments;