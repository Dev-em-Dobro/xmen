/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;

        /* 
            OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
    
            - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 
    
            - retirar a classe selecionado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        /* 
            OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
                - alterar a imagem do jogador 1
                - alterar o nome do jogador 1
        */

        const imagemPersonagemMaior = document.querySelector('.personagem-grande');
        imagemPersonagemMaior.src = `./src/imagens/card-${idSelecionado}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        const nomeSelecionado = personagem.getAttribute('data-name');
        const descricaoPersonagemSelecionado = personagem.getAttribute('data-description')

        nomePersonagem.innerHTML = nomeSelecionado;
        descricaoPersonagem.innerHTML = descricaoPersonagemSelecionado;
    });
});
