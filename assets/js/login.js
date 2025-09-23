// login.js - Página de login com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Login', [], ['/assets/js/login.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        // Verificar se usuário já está logado
        if (isUserLoggedIn()) {
            window.location.href = 'painel.html';
            return;
        }
        
        // Configurar manipulador do formulário
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
    }, 100);
});

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (!email || !password) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Simular login com dados mock
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMessage('Login realizado com sucesso!', 'success');
        
        // Redirecionar para dashboard
        setTimeout(() => {
            window.location.href = 'painel.html';
        }, 1000);
    } else {
        showMessage('Email ou senha incorretos', 'error');
    }
}

// Exportar funções para uso global
window.handleLogin = handleLogin;