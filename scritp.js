
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

})

document.getElementById('botao').addEventListener('click', function() {
    const fotoGato = document.getElementById('imagemAleatoria');
    const linkApi = `https://cataas.com/cat?random${Math.random()}`;
    
    fotoGato.src = linkApi;

});