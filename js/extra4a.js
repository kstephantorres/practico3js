 const numeroEntero = Math.trunc(parseInt(prompt('4A - Ingrese un número:')))

const primo =(numeroEntero)=>{
    let primos=[]
    for(let i=2;i<=numeroEntero;i++){
        let contador=0
        for(let j=2;j<=i;j++){
            if(i%j === 0)   contador++
        }
        if (contador === 1) primos.push(i)
    }
    return primos
}

let arregloPrimo = []

numeroEntero? arregloPrimo= primo(numeroEntero): alert('No ingreso un número')

document.write(`<h2>Arreglo de números Primos</h2>`)
document.write(`<ul>`)
arregloPrimo.map(numero=> document.write(`<li>${numero}</li>`))
document.write(`</ul>`)