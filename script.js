// variáveis com objetos html

//tempos
var mintEl = document.querySelector('div#mint')
var sepdEl = document.querySelector('div#sepd')
var segdEl = document.querySelector('div#segd')

//botões
var bttComecarEl = document.getElementById('bttComecar')
var bttPausarEl  = document.querySelector('#bttPausar')
var bttZerarEl   = document.querySelector('#bttZerar')
var bttContinuarEl = document.querySelector('#bttContinuar')

//fases
var faseProduzirEl = document.querySelector('#faseProduzir')
var faseCurtaEl = document.querySelector('#faseCurta')
var faseCumpridaEl = document.querySelector('#faseCumprida')


//variáveis de apoio

var intervalTimer
var verificacao = false
var incSeg = 60
var incMinPom = 25


//eventos dinâmicos 

//botões
bttComecarEl.addEventListener('click', iniciarContador)
bttPausarEl.addEventListener('click', pausarContador)
bttContinuarEl.addEventListener('click', continuarContador)

//fases


// funções de funcionamento


function iniciarContador(){
  
    incSeg --
    incMinPom --
    bttComecarEl.style.display = 'none'
    bttPausarEl.style.display = 'block'
    bttPausarEl.style.boxShadow = 'none'
    bttPausarEl.style.height = '65px'
    bttPausarEl.style.marginTop = '10px'
    mintEl.textContent = `${incMinPom}`
    segdEl.textContent = `${incSeg}`

    intervalTimer = setInterval(()=>{
        if(!verificacao){
            incSeg--
            segdEl.textContent = `${formatTimer(incSeg)}`
            if(incMinPom > 0){
                if(incSeg == 0){
                    incSeg = 60
                    incMinPom--
                    mintEl.textContent = `${formatTimer(incMinPom)}`
                }
            }else if(incMinPom == 0 & incSeg == 0){
                clearInterval(intTimer)
            }
        }

    }, 1000)
}

function pausarContador(){
        verificacao = true
        bttPausarEl.style.display   = 'none'
        bttContinuarEl.style.display = 'block'
}

function continuarContador(){
        verificacao = false
        bttContinuarEl.style.display = 'none'
        bttPausarEl.style.display    = 'block'
}


//funções de apoio


function formatTimer(num){
    return num < 10 ? `0${num}` : num
}