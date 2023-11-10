const cadena = prompt('5 - Ingrese un texto: ')

if (cadena==='')
{
    alert('No ingreso una cadena')  
}else if(cadena === cadena.toLowerCase()){
    alert('La cadena cadena está formada sólo por minúsculas')
}else if(cadena === cadena.toUpperCase()){
    alert('La cadena cadena está formada sólo por mayúsculas')
}else{
    alert('La cadena cadena está formada por una mezcla de mayúsculas y minúsculas')
}
