let inputMoney = document.querySelector(".moneyInput")
let sacar = document.querySelector("#sacar")
let depositar = document.querySelector("#depositar")
let print = document.querySelector("#print")
let warning = document.querySelector("#warning")

function imprimir(n){
    return print.innerHTML = `${n}` ,warning.innerHTML =''
}

function convert(n){
    return Number(n.value.replace(',','.').replace('R$',''));
}

let saldo = 0

function reset(){
    inputMoney.value = ''
    inputMoney.focus()
}

sacar.addEventListener('click', ()=>{
    let money = convert(inputMoney)
    let tempmoney = saldo - money
    if(tempmoney < 0){
        warning.innerHTML = "Saldo nao pode ser negativo", warning.style.color = "red"
    }else{
        saldo = saldo - money
        console.log(typeof money)
        console.log(typeof saldo)
        imprimir(saldo.toFixed(2))
    }
    reset()
        
})

depositar.addEventListener('click', ()=>{
    let money = convert(inputMoney)
    saldo += money
    imprimir(saldo.toFixed(2))
    reset()
})