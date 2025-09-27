// Página de autenticação com sistema de templates

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a página com os templates necessários
    initializePage('Login', [], ['/assets/js/login.js']);

    // Verifica se o usuário já está logado
    if (isUserLoggedIn()) {
        window.location.href = 'painel.html';
        return;
    }

    // Configura o manipulador do formulário
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    // Log de depuração - verifica usuários cadastrados
    console.log('Usuários disponíveis:', mockUsers);
    console.log('Tentativa de login com:', { email, password });

    // Busca usuário no sistema
    const user = mockUsers.find(u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    // Log de depuração - verifica se encontrou o usuário
    console.log('Usuário encontrado:', user);

    if (user) {
        // Login bem sucedido
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMessage('Login realizado com sucesso!', 'success');

        setTimeout(() => {
            window.location.href = 'painel.html';
        }, 1000);
    } else {
        // Falha no login
        showMessage('Email ou senha inválidos', 'error');
    }
}

// Disponibiliza função de login globalmente
window.handleLogin = handleLogin;