let contador = 0;

const resultado = document.getElementById("result");
const btnSoma = document.getElementById("btn-soma");
const btnSubtracao = document.getElementById("btn-subtracao");

btnSoma.addEventListener("click", () => {
    contador++;
    resultado.textContent = contador;
});

btnSubtracao.addEventListener("click", () => {
    contador--;
    resultado.textContent = contador;
});