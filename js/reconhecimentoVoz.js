/* by: Juan Miarelli */
const elementoTentativa = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    tentativa = e.results[0][0].transcript;
    exibeTentativaNaTela(tentativa);
    verificaTentativaValida(tentativa);
}

function exibeTentativaNaTela(tentativa) {
    elementoTentativa.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${tentativa}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());