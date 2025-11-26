const menuItems = document.querySelectorAll('.submenus span');
const sections = document.querySelectorAll('.secao');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  menuItems.forEach(item => {
    item.classList.remove('ativo');
    if (item.getAttribute('data-target') === currentSection) {
      item.classList.add('ativo');
    }
  });
});

const texto = "Ola, eu sou Joao Victor Desenvolvedor Frontend e Python";
const elementoTyped = document.getElementById("typed");
const elementoCursor = document.getElementById("cursor");
let i = 0;
const velocidadeDigitacao = 50;

function escrever() {
  if (i < texto.length) {
    elementoTyped.textContent += texto.charAt(i);
    i++;
    setTimeout(escrever, velocidadeDigitacao);
  } else {
    elementoCursor.style.animation = 'none';
    elementoCursor.style.opacity = '0';
    elementoCursor.style.transition = 'opacity 1s ease';
  }
}

escrever();
