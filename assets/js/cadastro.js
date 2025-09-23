// cadastro.js - Página de cadastro com sistema de templates (Atualizado)

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar página com templates
    initializePage('Cadastro', [], ['/assets/js/cadastro.js']);
    
    // Aguardar carregamento dos templates e configurar funcionalidade
    setTimeout(() => {
        // Verificar se usuário já está logado
        if (isUserLoggedIn()) {
            window.location.href = 'painel.html';
            return;
        }
        
        // Configurar manipulador do formulário
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
        bloodType: document.getElementById('tipo_sanguineo').value,
        city: document.getElementById('cidade').value,
        state: document.getElementById('estado').value
    };

    // Validação básica
    if (!formData.name || !formData.email || !formData.password ||
        !formData.bloodType || !formData.city || !formData.state) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Verificar se email já existe
    const existingUser = mockUsers.find(u => u.email === formData.email);
    if (existingUser) {
        showMessage('Este email já está cadastrado', 'error');
        return;
    }

    // Criar novo usuário
    const newUser = {
        id: mockUsers.length + 1,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bloodType: formData.bloodType,
        city: formData.city,
        state: formData.state,
        donations: 0,
        joinDate: new Date().toLocaleDateString('pt-BR')
    };

    mockUsers.push(newUser);

    showMessage('Cadastro realizado com sucesso! Faça login para continuar.', 'success');
    
    // Limpar formulário
    document.getElementById('cadastroForm').reset();
    
    // Redirecionar para página de login
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Exportar funções para uso global
window.handleRegister = handleRegister;