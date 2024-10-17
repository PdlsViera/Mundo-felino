document.addEventListener('DOMContentLoaded', function () {

    const imagens = document.querySelectorAll('.imagens, .imagens_rac');
    const imagemModal = document.querySelector('.imagemModal');
    const imagemAmpliada = document.querySelector('.imagemAmpliada');

    imagens.forEach(imagem => {
        imagem.addEventListener('click', function () {
            imagemModal.style.display = 'flex';
            imagemAmpliada.src = this.src;
        });
    });

    imagemModal.addEventListener('click', function () {
        imagemModal.style.display = 'none';
    });

});

document.getElementById('botao').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    const fotoGato = document.getElementById('imagemAleatoria');

    
    function gerarNumeroDoNome(nome) {
        let soma = 0;
        for (let i = 0; i < nome.length; i++) {
            soma += nome.charCodeAt(i);
        }
        return soma; 
    }

    const seed = gerarNumeroDoNome(nome);
    const linkApi = `https://cataas.com/cat?uniqueSeed=${seed}`;

    fotoGato.src = linkApi;
});
