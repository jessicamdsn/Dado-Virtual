let dadoRolando = document.querySelector('#dadoRolando') //audio
let btnSortear = document.querySelector('#btnSortear') // botão de sorteiar

let sorteado = document.querySelector('#sorteado') // aparição do numero sorteado

let figure = document.getElementById('dado') //onde as imagens estão
let imgDado = document.querySelector('#imgDado') //foto do dado
let numerodedados = document.getElementById('numero-de-dados') //select

let numeroSorteado = 0

var variavel = '';
numerodedados.onchange = function () {
  variavel = this.value;

  var img = document.createElement('img')
  img.setAttribute('src', './image/0.png')
  figure.appendChild(img)
  img.style.width = '200px'

if(variavel =1 ){
  alert('haha')
}else{
  alert('aaaaaaaaaaaaaaaa')
}
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
        numeroSorteado = getRandomInt(1, 6)

        // escrever o numero sorteado no console
        console.log(numeroSorteado)

        // definir atributo src com base no numero
        imgDado.setAttribute('src', 'image/' + numeroSorteado + '.png')
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


  // FUNCAO que gera numero randomico inteiro
  // incluindo o minimo e o maximo
  function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

