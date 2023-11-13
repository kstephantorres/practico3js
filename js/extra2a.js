const arregloParImpar= []


do{
const numeroauxiliar = parseInt(prompt('A2 - Ingrese un número: '))
numeroauxiliar? arregloParImpar.push(numeroauxiliar) : alert('No ingreso un número.')
}while(confirm('¿Desea seguir ingresando números?'))

const par =(arregloParImpar)=>arregloParImpar.filter(numero=> numero%2 === 0)

const arregloPar = par(arregloParImpar) 

document.write(`<h2>Lista de número Pares</h2>`)
document.write(`<ul>`)
arregloPar.map(numero=> document.write(`<li>${numero}</li>`))
document.write(`</ul>`)