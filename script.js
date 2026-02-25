const logotipo = document.querySelector('.logotipo');
const hora = new Date().getHours(); 

if (hora >= 5 && hora < 12) {
    logotipo.textContent = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
    logotipo.textContent = 'Boa tarde!';
} else {
    logotipo.textContent = 'Boa noite!';
}