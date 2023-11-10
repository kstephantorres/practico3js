const cadena = prompt('5 - Ingrese un texto: ')

if (cadena === cadena.toUpperCase())
{
    alert('La cadena cadena está formada sólo por mayúsculas')
}else if(cadena === cadena.toLowerCase()){
    alert('La cadena cadena está formada sólo por minúsculas')
}else{
    alert('La cadena cadena está formada por una mezcla de mayúsculas y minúsculas')
}
