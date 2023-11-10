const ladoA = parseInt(prompt('6 - Ingrese el primer lado:'))   
const ladoB = parseInt(prompt('6 - Ingrese el segundo lado: '))   


const perimetro=(ladoA, ladoB)=>2*(ladoA+ladoB)    


if(!isNaN(ladoA) && !isNaN(ladoB)){
    document.write(`El perimetro es: ${perimetro(ladoA,ladoB)}`)
}else{
    alert('Ingreso mal los datos')
}