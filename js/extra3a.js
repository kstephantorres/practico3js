const gradosCelsius= parseInt(prompt('A3 - Ingresa la temperatura (ºC): '))

const convertir=(gradosCelsius)=>(gradosCelsius*1.8+32).toFixed(2)

gradosCelsius ? document.write(`La temperatura en grados Fahrenheit es: ${convertir(gradosCelsius)}`) : alert ('No ingreso un número')

