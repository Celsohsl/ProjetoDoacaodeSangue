// Funções compartilhadas e utilitários

// Dados mock para a aplicação
const mockCampaigns = [

    {
        id: 1,
        name: "Campanha Hemocentro Takasaki",
        location: "Hemocentro Regional - Takasaki Harmony",
        date: "30/09/2025",
        hours: "14hs às 17hs",
        description: "Necessitamos de qualquer tipo sanguíneo. Sua doação é essencial!",
        bloodTypes: ["A+", "O-"],
        icon: "🩸"
    },

    {
        id: 2,
        name: "Campanha Móvel",
        location: "Corpo de Bombeiros - Takasaki",
        date: "07/10/2025",
        hours: "9:15hs às 11:15hs",
        description: "Unidade móvel de coleta. Ajude-nos a salvar vidas!",
        bloodTypes: ["O+", "AB-"],
        icon: "🏥"
    },

    {
        id: 3,
        name: "Campanha Móvel Shopping",
        location: "Shopping Center - AEON MALL Takasaki",
        date: "13/10/2025",
        hours: "10hs às 12hs - 13:30hs às 16hs",
        description: "Unidade móvel de coleta. Doe sangue de forma prática e rápida!",
        bloodTypes: ["A+", "B+", "O+", "AB+"],
        icon: "🚐"
    },

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

// Configuração inicial do armazenamento local
if (!localStorage.getItem('mockUsers')) {
    localStorage.setItem('mockUsers', JSON.stringify([]));
}

let mockUsers = JSON.parse(localStorage.getItem('mockUsers')) || [];

function updateMockUsers() {
    localStorage.setItem('mockUsers', JSON.stringify(mockUsers));
}

function addUser(user) {
    mockUsers.push(user);
    updateMockUsers();
}

function isUserLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function showMessage(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    toast.style.zIndex = '1000';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

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
    return localStorage.getItem('currentUser') !== null;
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
        navbarCollapse.addEventListener('click', function (e) {
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
document.addEventListener('DOMContentLoaded', function () {
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
window.updateMockUsers = updateMockUsers;
window.addUser = addUser;