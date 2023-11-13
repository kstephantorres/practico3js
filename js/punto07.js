const numeroTabla = parseInt(prompt('7 - Ingrese un número: '))

const crearTabla=(numero)=>{
    document.write(`<table>
    <tr>
        <th>Tabla del ${numero}</th>
        <th>🧮</th>
    </tr>
`)

    for(let i=1;i<=10;i++){
        document.write(`<tr>`)
        document.write(`<td>${numero} x ${i}</td>`)
        document.write(`<td>${numero*i}</td>`)
        document.write(`</tr>`)
    }

}

!isNaN(numeroTabla)? crearTabla(numeroTabla) : alert('No ingreso un número.')

