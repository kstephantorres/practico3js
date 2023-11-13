const cadena = prompt('5 - Ingrese un texto: ')

const determinar=(cadena)=>{
    if (cadena==='' || !cadena)
    {
       return 'No ingreso una cadena'  
    }else if(cadena === cadena.toLowerCase()){
       return 'La cadena cadena está formada sólo por minúsculas'
    }else if(cadena === cadena.toUpperCase()){
        return 'La cadena cadena está formada sólo por mayúsculas'
    }else{
        return 'La cadena cadena está formada por una mezcla de mayúsculas y minúsculas'
    }
}

alert(determinar(cadena))