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
var repetir = 0
var tempos = {
    incSeg: 5,
    incMinPom: 0,
    minTempoC: 5,
    minTempoL: 15
}


//eventos dinâmicos 

//botões
bttComecarEl.addEventListener('click', ()=>{iniciarPom()})
bttPausarEl.addEventListener('click', pausar)
bttContinuarEl.addEventListener('click', continuar)

//fases
faseCurtaEl.addEventListener('click', pausaCurta)
faseProduzirEl.addEventListener('click', faseProduzir)



//funções de funcionamento

//contador adaptado pra receber qualquer minuto
function contador(mint, segd){
    console.log(mint, segd)

    let somaSegd = (mint * 60) + segd
    console.log(somaSegd)

    mintEl.innerHTML = `${formatTimer(mint)}`
    segdEl.innerHTML = `${formatTimer(segd)}`    

    intervalTimer = setInterval(()=>{
        if(!verificacao){
            somaSegd--
            
            let seg = Math.floor(somaSegd % 60)
            let min = Math.floor(somaSegd / 60)
            console.log(min, seg)
            console.log(somaSegd)

            mintEl.innerHTML = `${formatTimer(min)}`
            segdEl.innerHTML = `${formatTimer(seg)}`
        }

        if(somaSegd == 0){
            repetir++
            if(repetir==4){
                repetir - 4
            }

            
            switch(repetir){
                case 1:
                    pausaCurta()
                break
                case 2:

                break

                case 3:

                break
                case 4:

                break
                default:
                    clearInterval(intervalTimer)
                break
            }
        }
    }, 1000)

}

function iniciarPom(){
    bttComecarEl.style.display = 'none'
    bttPausarEl.style.display = 'block'
    bttContinuarEl.style.display = 'none'
    contador(tempos.incMinPom, tempos.incSeg)
}
function pausar(){
        verificacao = true
        bttPausarEl.style.display    = 'none'
        bttContinuarEl.style.display = 'block'
}
function continuar(){
        verificacao = false
        bttContinuarEl.style.display = 'none'
        bttPausarEl.style.display    = 'block'
}

//ao clicar no shortbreak
function pausaCurta(){
    contador(tempos.minTempoC, tempos.incSeg)
}

function faseProduzir(){

}


//funções de apoio-

//formata números menores que 10 com 0 antes
function formatTimer(num){
    return num < 10 ? `0${num}` : num
}