// Adiciona um evento de clique ao botão de "Enviar" no formulário de contato
document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "" || assunto === "") {
      alert("Fill all the text-boxes before sending the message.");
    } else {
      alert("Success, thanks for your message, " + nome + ".");
    }
  });

  // Select the navbar links
const navLinks = document.querySelectorAll('.nav-link');

// Add an event listener to each navbar link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element from the link's href attribute
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target element
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  