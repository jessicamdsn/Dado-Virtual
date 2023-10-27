let dadoRolando = document.querySelector('#dadoRolando');
let btnSortear = document.querySelector('#btnSortear');
let sorteado = document.querySelector('#sorteado');
let sorteados = document.querySelector('#sorteados')
let figure = document.getElementById('figure');
let imgDado = document.querySelector('#imgDado');
let numerodedados = document.getElementById('numero-de-dados');

let numeroSorteado = 0;


function criarDado() {
  var img = document.createElement('img');
  img.setAttribute('src', './image/0.png');
  img.style.width = '200px';
  return img;
}

function criarDados(qtdDados) {
  for (let i = 1; i <= qtdDados; i++) {
    let img = criarDado();
    figure.appendChild(img);
  }
}
numerodedados.onchange = function () {
  // Limpar dados existentes antes de adicionar novos
  figure.innerHTML = '';
  let qtdDados = this.value;
  criarDados(qtdDados);
}

// FUNCAO que gera numero randomico inteiro
  // incluindo o minimo e o maximo
  function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  btnSortear.addEventListener('click', function () {
    // adicionar a animacao
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o botao Sortear
    btnSortear.style.display = 'none'
    numerodedados.style.display = 'none'

    // usar setTimeout para executar as acoes apos 1.75 segundos
    setTimeout(function () {

      // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
      numeroSorteado = getRandomInt(1, 6 * numerodedados.value);

      // escrever o numero sorteado no console
      console.log(numeroSorteado)

      // definir atributo src com base no numero
      imgDado.setAttribute('src', './image/' + numeroSorteado + '.png');
      // escrever no paragrafo numeroSorteado
      sorteado.textContent = numeroSorteado

      // exibir o botao Sortear
      btnSortear.style.display = 'inline-block'
      numerodedados.style.display = 'inline-block'

      // retirar a animacao
      imgDado.classList.remove('animar')
      sorteado.classList.remove('aparecer')
    }, 1750)
  })

 
