const arregloMayor= []


do{
const numeroauxiliar = parseInt(prompt('A1 - Ingrese un número: '))
numeroauxiliar? arregloMayor.push(numeroauxiliar) : alert('No ingreso un número.')
}while(confirm('¿Desea seguir ingresando números?'))


const mayor=(arregloMayor)=> Math.max(...arregloMayor)

document.write(`El número mayor es: ${mayor(arregloMayor)}`)
