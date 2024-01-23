let dadoRolando = document.querySelector('#dadoRolando');
let btnSortear = document.querySelector('#btnSortear');
let sorteados = document.querySelector('#sorteados')
let sorteado1 = document.querySelector('#sorteado1');
let sorteado2 = document.querySelector('#sorteado2');
let sorteado3 = document.querySelector('#sorteado3');
let figure = document.getElementById('figure');
let imgDado1 = document.querySelector('#imgDado1');
let imgDado2 = document.querySelector('#imgDado2');
let imgDado3 = document.querySelector('#imgDado3');
let numerodedados = document.getElementById('numero-de-dados');
let selectPart = document.getElementById('selectPart');

let numeroSorteado1 = 0;
let numeroSorteado2 = 0;
let numeroSorteado3 = 0;

numerodedados.onchange = function () {
    numerodedados = this.value;
    addImgDado()
    imgDado1.setAttribute('src', './image/0.png');
    imgDado2.setAttribute('src', './image/0.png');
    imgDado3.setAttribute('src', './image/0.png');

    sorteado1.innerHTML = "?";
    sorteado2.innerHTML = "?";
    sorteado3.innerHTML = "?";
  }

// FUNCAO que gera numero randomico inteiro
  // incluindo o minimo e o maximo
  function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function addImgDado(){
    if(numerodedados ==1){
      
      imgDado1.style.display = 'inline-block';
      imgDado2.style.display = 'none';
      imgDado3.style.display = 'none';

      sorteado1.style.display = 'inline-block';
      sorteado2.style.display = 'none';
      sorteado3.style.display = 'none';

    }if (numerodedados ==2) {

      imgDado1.style.display = 'inline-block';
      imgDado2.style.display = 'inline-block';
      imgDado3.style.display = 'none';

      sorteado1.style.display = 'inline-block';
      sorteado2.style.display = 'inline-block';
      sorteado3.style.display = 'none';

    }if (numerodedados ==3){

      imgDado1.style.display = 'inline-block';
      imgDado2.style.display = 'inline-block';
      imgDado3.style.display = 'inline-block';

      sorteado1.style.display = 'inline-block';
      sorteado2.style.display = 'inline-block';
      sorteado3.style.display = 'inline-block';

    } 
  }

  
  btnSortear.addEventListener('click', function () {
   
    // adicionar a animacao
    imgDado1.classList.add('animar')
    imgDado2.classList.add('animar2')
    imgDado3.classList.add('animar')

    sorteado1.classList.add('aparecer')
    sorteado2.classList.add('aparecer')
    sorteado3.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o botao Sortear
    btnSortear.style.display = 'none'
    selectPart.style.display = 'none'

    // usar setTimeout para executar as acoes apos 1.75 segundos
    setTimeout(function () {

      // ARMAZENAR NUMERO SORTEADO NA VARIAVEL
      numeroSorteado1 = getRandomInt(1, 6);
      numeroSorteado2 = getRandomInt(1, 6);
      numeroSorteado3 = getRandomInt(1, 6);

      // escrever o numero sorteado no console
      console.log(numeroSorteado1)

      // definir atributo src com base no numero
      imgDado1.setAttribute('src', './image/' + numeroSorteado1 + '.png');
      imgDado2.setAttribute('src', './image/' + numeroSorteado2 + '.png');
      imgDado3.setAttribute('src', './image/' + numeroSorteado3 + '.png');

      // escrever no paragrafo numeroSorteado
      sorteado1.textContent = numeroSorteado1
      sorteado2.textContent = numeroSorteado2
      sorteado3.textContent = numeroSorteado3

      // exibir o botao Sortear
      btnSortear.style.display = 'inline-block'
      selectPart.style.display = 'flex'

      // retirar a animacao
      imgDado1.classList.remove('animar')
      imgDado2.classList.remove('animar2')
      imgDado3.classList.remove('animar')

      sorteado1.classList.remove('aparecer')
      sorteado2.classList.remove('aparecer')
      sorteado3.classList.remove('aparecer')

    }, 1750)
  })

 
