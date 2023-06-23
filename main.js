const toggleButton = document.getElementById('mode-icon-sun');
const logoElement = document.getElementById('logo');
const backgroundElement = document.getElementById('header__menu');
const textElements = document.getElementsByClassName('banner__list__link');
const menuElements = document.getElementsByClassName('open__menu__link');

// Verifica o modo atual ao carregar a página
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.src = './assets/moon.svg'; 
  logoElement.src = './assets/logo-white.svg';
  backgroundElement.style.backgroundImage = 'url("./assets/menu-purple.svg")';
  Array.from(textElements).forEach(element => {
    element.style.color = '#ffffff';
  });
  Array.from(menuElements).forEach(element => {
    element.style.color = '#ffffff';
  });
}

// Função para alternar entre o modo claro e escuro
function toggleMode() {
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    document.body.classList.remove('dark-mode');
    toggleButton.src = './assets/sun.svg';
    logoElement.src = './assets/Logo_blue.svg';
    backgroundElement.style.backgroundImage = 'url("./assets/Menu.svg")';
    Array.from(textElements).forEach(element => {
      element.style.color = '#162950';
    });
    Array.from(menuElements).forEach(element => {
      element.style.color = '#162950';
    });
    localStorage.setItem('mode', 'light');
  } else {
    document.body.classList.add('dark-mode');
    toggleButton.src = './assets/moon.svg';
    logoElement.src = './assets/logo-white.svg';
    backgroundElement.style.backgroundImage = 'url("./assets/menu-purple.svg")';
    Array.from(textElements).forEach(element => {
      element.style.color = '#FFFF';
    });
    Array.from(menuElements).forEach(element => {
      element.style.color = '#FFFF';
    });
    localStorage.setItem('mode', 'dark');
    }
}

// Adiciona um evento de clique ao botão de alternância
toggleButton.addEventListener('click', toggleMode);


// Validação do formulário
function validarFormulario() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var topic = document.getElementById('topic').value;
  var message = document.getElementById('textArea').value;

  // Validar se os campos estão preenchidos
  if (name.trim() === '' || email.trim() === '' || topic.trim() === '' || message.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
  }

  // Validar o formato do e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return false;
  }
  
  // Se todas as validações passarem, o formulário é enviado
  alert('Formulário enviado com sucesso!');

   // Limpar os valores dos campos
   document.getElementById('form').reset();

  return true;
}
