const celsiusInput=document.querySelector('#celsius')
const fahrenheitInput=document.querySelector('#fahrenheit')

function celsiusParaFahrenheit(celsius){
    return celsius * 9/5 + 32;
}
function fahrenheitParaCelsius(fahrenheit){
    return(fahrenheit - 32) * 5/9;
}

celsiusInput.addEventListener('input',()=>{
    const celsius=parseFloat(celsiusInput.value);
    fahrenheitInput.value=celsiusParaFahrenheit(celsius)
})

fahrenheitInput.addEventListener('input',()=>{
    const fahrenheit=parseFloat(fahrenheitInput.value)
    celsiusInput.value=fahrenheitParaCelsius(fahrenheit)
})
//quando mudei o evento de input para change: no input cnforme
//  //eu colocava o valor em uma das caixas o valor da outra
//  //ja ia mudando ao vivo, quando usei o change eu colocava o valor numa das caixas e precisava clicar fora da caixa para mudar o valor da outra caixa
