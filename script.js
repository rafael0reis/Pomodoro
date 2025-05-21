            // variáveis com objetos html

            //variáveis de construção de som
const somDeClique = new Audio('assets/soundEffects/mouse-click.mp3')
somDeClique.volume = 0.7
const somCliqueFases = new Audio('assets/soundEffects/keyboard-click.mp3')
somCliqueFases.volume = 0.7
const somAlarme = new Audio('assets/soundEffects/alarm/clock-alarm.mp3')
somAlarme.volume = 0.5

            //variáveis de customziação
const corpo = document.body
const txtCabeçalho = document.querySelector('.containerHeader')
const linkSite = document.getElementsByClassName('link')[0]
const fasesCustom = document.querySelectorAll('.tempos > div')
const totalCiclosEl = document.querySelector('.totalCiclosEl')

            //tempos
const valTempEl = document.querySelectorAll('.valoresTemporizador')
var mintEl = document.querySelector('div#mint')
var sepdEl = document.querySelector('div#sepd')
var segdEl = document.querySelector('div#segd')

            //botões de manipulação
const botoesEl = document.querySelectorAll('.botoes > button')
var bttComecarEl = document.getElementById('bttComecar')
var bttPausarEl  = document.querySelector('#bttPausar')
var bttZerarEl   = document.querySelector('#bttZerar')
var bttContinuarEl = document.querySelector('#bttContinuar')

            //botões das fases
var faseProduzirEl = document.querySelector('#faseProduzir')
var faseCurtaEl = document.querySelector('#faseCurta')
var faseCumpridaEl = document.querySelector('#faseCumprida')


            //variáveis de apoio

var intervalTimer
var verificacao = false

            //valores de verificação das fases
var repeticoes = {
    faseAtual: 'Pomodoro',
    cicloPomo: 0,
    cicloGeral: 4,
}

            //variáveis que são objetos

var tempos = {
    //tempos pré-definidos padrão
    segundosUsuario: 0,
    inicioMinutos: 0.1,
    minTempoC: 0.1,
    minTempoL: 0.1,
    //auxiliares com valores pré definidos
    auxiliarMinutos: 0.1,
    auxiliarSegundos: 0
}


                //eventos dinâmicos 

            //botões
bttComecarEl.addEventListener('click', ()=>{iniciarPom()})
bttPausarEl.addEventListener('click', pausar)
bttContinuarEl.addEventListener('click', continuar)

            //fases
faseProduzirEl.addEventListener('click', faseProduzir)
faseCurtaEl.addEventListener('click', pausaCurta)
faseCumpridaEl.addEventListener('click', pausaLonga)


            //funções de funcionamento

//contador adaptado pra receber tempos diferentes, só é chamando na função iniciarPom
function contador(mint, segd){
    let somaSegd = (mint * 60) + segd

    intervalTimer = setInterval(()=>{
        if(!verificacao){
            somaSegd--         
            let seg = Math.floor(somaSegd % 60)
            let min = Math.floor(somaSegd / 60)
            mintEl.innerHTML = `${formatTimer(min)}`
            segdEl.innerHTML = `${formatTimer(seg)}`

            if(somaSegd === 0){
                somAlarme.play()
                clearInterval(intervalTimer)
                passarFase()
            }
        }
    }, 1000)
}

            //manipulação do contador

function iniciarPom(){
    //adiciona o som de clique
    somDeClique.currentTime = 0
    somDeClique.play()
    //altera os botões, pausa o contador e inicia novamente 
    botoesOnOff(bttPausarEl)

    clearInterval(intervalTimer)

    contador(tempos.auxiliarMinutos, tempos.auxiliarSegundos)
}
function pausar(){
    somDeClique.currentTime = 0 
    somDeClique.play()
    verificacao = true
    botoesOnOff(bttContinuarEl)
}
function continuar(){
    somDeClique.currentTime = 0
    somDeClique.play()
    verificacao = false
    botoesOnOff(bttPausarEl)
}

            //manipulação dos tempos

function faseProduzir(){
    //adiciona o som de clique 
    somCliqueFases.currentTime = 0
    somCliqueFases.play()
    //troca o valor dos minutos
    tempos.auxiliarMinutos = tempos.inicioMinutos

    //formatar o timer na tela
    mintEl.innerHTML = `${formatTimer(tempos.auxiliarMinutos)}`
    segdEl.innerHTML = `${formatTimer(tempos.auxiliarSegundos)}`

    //formata os botões quando troca a fase
    botoesOnOff(bttComecarEl)

    //muda a cor do texto das fases
    mudarCor(fasesCustom, '#1D3557')
    //muda o cor do texto dos botoes
    mudarCor(botoesEl, '#1d3557')
    //muda a cor do timer
    mudarCor(valTempEl, '#1D3557')
    //muda o backgroundColor do button
    mudarBg(botoesEl, 'white')
    //troca o estilo do botão da fase
    faseAtiva(faseProduzirEl)
    
    //para o contador
    clearInterval(intervalTimer)
    
    //custom da página
    corpo.style.backgroundColor = '#A8DADC'
    txtCabeçalho.style.color = '#1d3557'
    linkSite.style.color = '#1D3557'
}

//ao clicar no shortbreak
function pausaCurta(){
    //adiciona o som de clique 
    somCliqueFases.currentTime = 0
    somCliqueFases.play()
    //formata a página sem chamar a função contador
    //troca o valor dos minutos
    tempos.auxiliarMinutos  = tempos.minTempoC

    //formatar o timer na tela
    mintEl.innerHTML = `${formatTimer(tempos.auxiliarMinutos)}`
    segdEl.innerHTML = `${formatTimer(tempos.auxiliarSegundos)}`

    //formata os botões quando troca a fase
    botoesOnOff(bttComecarEl)

    //muda a cor do texto das fases
    mudarCor(fasesCustom, 'white')
    mudarCor(botoesEl, '#457B9D')
    mudarCor(valTempEl, '#F1FAEE')
    mudarBg(botoesEl, '#F1FAEE')
    //troca o estilo do botão da fase
    faseAtiva(faseCurtaEl)

    //para o contador
    clearInterval(intervalTimer)

    //custom página
    corpo.style.backgroundColor = '#457B9D'
    txtCabeçalho.style.color = 'white'
    linkSite.style.color = '#A8DADC'
    //muda a cor do texto do botão

}

function pausaLonga(){
    somCliqueFases.currentTime = 0
    somCliqueFases.play()

    tempos.auxiliarMinutos = tempos.minTempoL

    mintEl.innerHTML = `${formatTimer(tempos.auxiliarMinutos)}`
    segdEl.innerHTML = `${formatTimer(tempos.auxiliarSegundos)}`

    botoesOnOff(bttComecarEl)
    
    mudarCor(fasesCustom, 'white')
    mudarCor(botoesEl, '#1D3557')
    mudarCor(valTempEl, '#F1FAEE')
    mudarBg(botoesEl, '#F1FAEE')
    faseAtiva(faseCumpridaEl)

    clearInterval(intervalTimer)

    corpo.style.backgroundColor = '#1D3557'
    txtCabeçalho.style.color = 'white'
    linkSite.style.color = '#E63946'
}

function passarFase(){
    console.log(repeticoes)
    switch(repeticoes.faseAtual){
        case 'Pomodoro':
            switch(true){
                case repeticoes.cicloGeral < 4:
                    repeticoes.cicloPomo ++
                    repeticoes.cicloGeral ++
                    repeticoes.faseAtual = 'shortBreak'
                    pausaCurta()
                    break
                case repeticoes.cicloGeral === 4:
                    repeticoes.cicloGeral - 4
                    repeticoes.faseAtual = 'longBreak'
                    pausaLonga()
                    break
            }
            break
        case 'shortBreak':
            repeticoes.faseAtual = 'Pomodoro'
            faseProduzir()
            break
        case 'longBreak':
            repeticoes.faseAtual = 'Pomodoro'
            faseProduzir()
            break
    }
}


            //funções de apoio

//formata números menores que 10 com 0 antes
function formatTimer(num){
    return num < 10 ? `0${num}` : num 
}

//função que vai mudar o elemento color dos botoes
function mudarCor(elemento, cor){
    elemento.forEach(e => {
        e.style.color = `${cor}`
    })
}
function mudarBg(el, cor){
    el.forEach(e => {
        e.style.backgroundColor = `${cor}`
    })
}

//muda o fundo das fases
function faseAtiva(faseAtual){
    fasesCustom.forEach(fase => {
        fase.classList.remove('bgFases')
        fase.classList.remove('bgFasesEscuras')
    })

    // faseAtual.classList.add(`${bg}`)
    if(faseAtual === faseProduzirEl){
        faseAtual.style.color = ''
        faseAtual.classList.add('bgFases')
    }else if(faseAtual === faseCurtaEl || faseAtual === faseCumpridaEl){
        faseAtual.style.color = ''
        faseAtual.classList.add('bgFasesEscuras')
    }
}

//ativa e desativa os botoes com css dinamicamente
function botoesOnOff(botaoAtual){
    botoesEl.forEach(bts => {
        bts.style.display = 'none'
    })

    botaoAtual.style.display = 'block'
}

mintEl.textContent = `${formatTimer(tempos.auxiliarMinutos)}`
segdEl.textContent = `${formatTimer(tempos.auxiliarSegundos)}`