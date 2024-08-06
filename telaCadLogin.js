// Função para recuperar senha
function recoverPassword() {
    var email = prompt("Digite seu e-mail para recuperação de senha:");
    if (email) {
      // Simulação do envio de e-mail de recuperação de senha
      alert("Um e-mail foi enviado para " + email + " com instruções para recuperar sua senha.");
    }
  }
  
  // Função para exibir o formulário de cadastro e ocultar o de login
  function mostrarCadastro() {
    var cadastro = document.getElementById("cadastro");
    var login = document.getElementById("login");
    cadastro.style.display = "block";
    login.style.display = "none";
  }
  
  // Função para exibir o formulário de login e ocultar o de cadastro
  function mostrarLogin() {
    var cadastro = document.getElementById("cadastro");
    var login = document.getElementById("login");
    cadastro.style.display = "none";
    login.style.display = "block";
  }
  
  // Função para cadastro de usuário
  function cadastrarUsuario(event) {
    event.preventDefault(); // Impede que o formulário seja enviado
  
    // Obtém os valores dos campos de entrada
    var nome = document.getElementById("nome_cad").value;
    var email = document.getElementById("email_cad").value;
    var senha = document.getElementById("senha_cad").value;
  
  
    // Exemplo de exibição dos dados cadastrados
    alert("Usuário cadastrado com sucesso!\n\nNome: " + nome + "\nE-mail: " + email);
    return false;
  }
  
  // Função para login de usuário
  function fazerLogin() {
    window.location.href="telaGruposMusculares.html"
    
// Impede que o formulário seja enviado
    event.preventDefault(); 
  
    // Obtém os valores dos campos de entrada
    var email = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;
  
    // Exemplo de exibição do login bem-sucedido
    alert("Login realizado com sucesso!\n\nE-mail: " + email);

    return false;
  }
  
  // Adiciona um evento de envio para o formulário de cadastro
  document.getElementById("cadastro").addEventListener(cadastrarUsuario);

  // Adiciona um evento de envio para o formulário de login
  document.getElementById("login").addEventListener( fazerLogin);
  