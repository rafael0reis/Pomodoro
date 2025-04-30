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
var tempos = {
    incSeg: 60,
    incMinPom: 25,
    minTempoC: 5,
    minTempoL: 15
}


//eventos dinâmicos 

//botões
bttComecarEl.addEventListener('click', ()=>{iniciarPom()})
bttPausarEl.addEventListener('click', pausarContador)
bttContinuarEl.addEventListener('click', continuarContador)

//fases
faseCurtaEl.addEventListener('click', pausaCurta)
faseProduzirEl.addEventListener('click', faseProduzir)



//funções de funcionamento

//função que vai diminuir com base nos valores que receber, e vai atualizar na tela em tempo real
function contador(mint, segd){

    intervalTimer = setInterval(()=>{
        
    }, 1000)
}

function iniciarPom(){
    contador(tempos.incMinPom, tempos.incSeg)

    // verificacao = verify
    
    // bttComecarEl.style.display = 'none'
    // bttContinuarEl.style.display = 'none'
    
    // bttPausarEl.style.display = 'block'
    // bttPausarEl.style.boxShadow = 'none'
    // bttPausarEl.style.height = '65px'
    // bttPausarEl.style.marginTop = '10px'

    // if(!verificacao){
    //     tempos.incSeg --
    //     tempos.incMinPom --
        
    //     mintEl.textContent = `${formatTimer(tempos.incMinPom)}`
    //     segdEl.textContent = `${tempos.incSeg}`
    // }

    // intervalTimer = setInterval(()=>{
    //     if(!verificacao){
    //         tempos.incSeg--
    //         segdEl.textContent = `${formatTimer(tempos.incSeg)}`
    //         if(tempos.incMinPom > 0){
    //             if(tempos.incSeg == 0){
    //                 tempos.incSeg = 60
    //                 tempos.incMinPom--
    //                 mintEl.textContent = `${formatTimer(tempos.incMinPom)}`
    //             }
    //         }else if(tempos.incMinPom == 0 & tempos.incSeg == 0){
    //             clearInterval(intervalTimer)
    //         }
    //     }

    // }, 1000)
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

//ao clicar no shortbreak
function pausaCurta(){

    // clearInterval(intervalTimer)
    // iniciarContador(true)
    // bttPausarEl.style.display = 'none'
    // bttComecarEl.style.display = 'block'
    // bttContinuarEl.style.display = 'none'
}

function faseProduzir(){

}


//funções de apoio

//formata números menores que 10 com 0 antes
function formatTimer(num){
    return num < 10 ? `0${num}` : num
}