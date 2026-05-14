const imagens = document.querySelectorAll(".image");

const modal = document.getElementById("modal");
const imgAmpliada = document.getElementById("img-ampliada");

const anterior = document.querySelector(".anterior");
const proximo = document.querySelector(".proximo");
const fechar = document.querySelector(".fechar");

let indexAtual = 0;

function abrirModal(index) {
    modal.style.display = "flex";

    imgAmpliada.src = imagens[index].src;

    indexAtual = index;
}

imagens.forEach((img, index) => {
    img.addEventListener("click", () => {
        abrirModal(index);
    });
});

proximo.addEventListener("click", () => {

    indexAtual++;

    if (indexAtual >= imagens.length) {
        indexAtual = 0;
    }

    imgAmpliada.src = imagens[indexAtual].src;
});

anterior.addEventListener("click", () => {

    indexAtual--;

    if (indexAtual < 0) {
        indexAtual = imagens.length - 1;
    }

    imgAmpliada.src = imagens[indexAtual].src;
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});