let paridad =(numero)=>{
    let texto='El número es '
    numero%2===0 ?  texto+= 'par' : texto+='impar'    
    return texto
}

const numero= parseInt(prompt('4 - Ingrese un número: '))
if(!isNaN(numero)){
 document.write(paridad(numero))
}else{
    alert('No ingreso un número')
}