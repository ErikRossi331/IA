// Adiciona um evento de clique ao botão de "Enviar" no formulário de contato
document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos do formulário antes de enviar.");
    } else {
      alert("Mensagem enviada com sucesso! Obrigado por entrar em contato, " + nome + ".");
    }
  });
  