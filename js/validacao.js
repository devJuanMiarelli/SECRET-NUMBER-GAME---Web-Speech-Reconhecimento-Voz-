/* by: Juan Miarelli */
function verificaTentativaValida(tentativa) {
    const numero = +tentativa;

    if (tentativaInvalida(numero)) {
        if (tentativa.toUpperCase() === "GAME OVER") {
            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar-game-over" >Jogar novamente <i class="fa-regular fa-face-frown"></i></button>
                `
                document.body.style.backgroundColor = "var(--game-over-color";
                document.body.style.color = "var(--white";
        } else {
            elementoTentativa.innerHTML += '<div>O que você disse não é um número! <i class="fa-solid fa-face-grin-wink"></i></div>';
        }
        // return
    }
    if (numero > maiorValor || numero < menorValor) {
        elementoTentativa.innerHTML += `<div>O valor deve estar entre ${menorValor} e ${maiorValor}! <i class="fa-solid fa-face-grin-wink"></i></div>`;
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou...</h2>
            <h3>O número secreto era:</h4>
            <h2 class="box">${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente <i class="fa-solid fa-face-laugh-squint"></i></button>
        `
    } else if(numero > numeroSecreto) {
        elementoTentativa.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoTentativa.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
};

function tentativaInvalida(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})
