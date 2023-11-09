const ciudades=[]

const listar=(ciudades,titulo)=>{
    document.write(`<h2>Lista de ${titulo}</h2>`)
    document.write(`<ul>`)
    ciudades.forEach(ciudad => {
        if(ciudad) 
        document.write(`<li>${ciudad}</li>`)
    })
    document.write(`</ul>`)
}

do{
    const ciudad = prompt('02 - Ingrese nombre de ciudades:')
    console.log(ciudad)
    ciudad ? ciudades.push(ciudad.trim()) : alert('No ingreso datos')
}while(confirm('¿Deseea seguir ingresando datos?'))

listar(ciudades,'Ciudades')

document.write(`<p>La longitud del arreglo es: ${ciudades.length}</p>`)

if (ciudades.length>0){
    
    document.write(`<p>El primer elemento es: ${ciudades[0]}</p>`)

    if(ciudades.length === 3)
    document.write(`<p>El ultimo  tercer y ultimo elemento es: ${ciudades[2]}</p>`)

    if(ciudades.length>3)
    document.write(`<p>El tercer elementor es: ${ciudades[2]} - El ultimo  elemento es: ${ciudades[ciudades.length-1]}</p>`)
    else if(ciudades.length!==3)
    document.write(`<p>No hay un tercer elemento.</p>`)

}else{
    document.write(`<p>No ingreso ciudades</p>`)
}
ciudades.push('París')

if(ciudades.length>=2)
    document.write(`<p>El segundo elemento es  : ${ciudades[1]}</p>`)
else 
    document.write(`<p>No hay un segundo elemento</p>`)

ciudades[1] = 'Barcelona'

listar(ciudades, 'Ciudades + París y Barcelona')
