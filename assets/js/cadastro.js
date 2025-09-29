// Página de registro com sistema de templates

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a página com os templates
    initializePage('Cadastro', [], ['/assets/js/cadastro.js']);

    // Aguarda o carregamento dos templates e configura as funcionalidades
    setTimeout(() => {
        // Verifica se o usuário já está logado
        if (isUserLoggedIn()) {
            window.location.href = 'painel.html';
            return;
        }

        // Configura o manipulador do formulário
        const cadastroForm = document.getElementById('cadastroForm');
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', handleRegister);
        }
    }, 100);
});

function handleRegister(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email_cadastro').value,
        password: document.getElementById('senha_cadastro').value,
        bloodType: document.getElementById('tipo_sanguineo').value
    };

    // Validação dos campos do formulário
    if (!formData.name || !formData.email || !formData.password || !formData.bloodType) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Verifica se o email já está cadastrado
    const existingUser = mockUsers.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
    if (existingUser) {
        showMessage('Este email já está cadastrado', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email.toLowerCase(),
        password: formData.password,
        bloodType: formData.bloodType,
        donations: 0,
        joinDate: new Date().toLocaleDateString('pt-BR')
    };

    addUser(newUser);
    document.getElementById('cadastroForm').reset();
    showMessage('Cadastro realizado com sucesso! Redirecionando...', 'success');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Exporta as funções para uso global
window.handleRegister = handleRegister;