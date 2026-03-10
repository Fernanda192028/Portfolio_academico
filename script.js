const logotipo = document.querySelector('.logotipo');
const hora = new Date().getHours(); 

if (hora >= 5 && hora < 12) {
    logotipo.textContent = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
    logotipo.textContent = 'Boa tarde!';
} else {
    logotipo.textContent = 'Boa noite!';
}

const meusProjetos = [
    {
        titulo: "SIRAAS",
        imagem: "./img/Siraas.jpg",
        descricao: "Sistema de Registro de Atestados e Avaliação Scrum. Sistema web para registro de alunos e avaliação de equipes ágeis.",
        categoria: "faculdade",
        link: "https://github.com/Gabrielle0905/SIRAAS"
    },
    {
        titulo: "Sphera",
        imagem: "./img/Minerva.png",
        descricao: "Plataforma para registro e análise de PDIs de colaboradores, auxiliando RH e gestores em decisões estratégicas.",
        categoria: "faculdade",
        link: "https://github.com/Minerva2025"
    },
    {
        titulo: "Python para Iniciantes",
        imagem: "./img/Python.png",
        categoria: "pessoal",
        descricao: "Projeto focado em ajudar iniciantes a aprenderem os conceitos básicos e fundamentais da linguagem Python.",
        link: "https://github.com/Fernanda192028/Python"
    }
];

function renderizarProjetos(listaProjetos){
    const container = document.getElementById('container-projetos');

    container.innerHTML = "";

    listaProjetos.forEach(projeto => {
    const cardHTML = `
            <div class="projetos-card">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projetos-imagem">
                <h3 class="info-projetos">${projeto.titulo}</h3>
                <p class="paragrafo-projetos">${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">
                    <button>Mais informações</button>
                </a>
            </div>
        `;
         container.innerHTML += cardHTML;
    });
}

  function mostrarTodos(){
  renderizarProjetos(meusProjetos);
}


  function filtrarProjetos(categoria){
    const projetosFiltrados = meusProjetos.filter(projeto => 
    projeto.categoria === categoria
);

  renderizarProjetos(projetosFiltrados);

}


const minhasCompetênciasTecnicas = [
    {
        titulo: "Hard Skills",
        habilidade1 :"Linguagens: Python, Java e JavaScript",
        habilidade2 :"Frameworks: Flask",
        habilidade3 :"Ferramentas: Git e Github",
        habilidade4 :"Inglês intermediário",
    },
    {
        titulo: "Soft Skills",
        habilidade1 :"Colaboração",
        habilidade2 :"Organização",
        habilidade3 :"Autonomia",
        habilidade4 :"Produtividade",
    },
    
];

function renderizarCompetênciasTecnicas(){
    const container = document.getElementById('container-competências');

    container.innerHTML = " ";

    minhasCompetênciasTecnicas.forEach(habilidade => {
    const cardHTML = `
        <div id="cards-container" class="cards-container">
        <h3>${habilidade.titulo}</h3>
        <p>${habilidade.habilidade1}</p>
        <p>${habilidade.habilidade2}</p>
        <p>${habilidade.habilidade3}</p>
        <p>${habilidade.habilidade4}</p>
        </div>
        `;
         container.innerHTML += cardHTML;
    });
}

renderizarCompetênciasTecnicas();
mostrarTodos();