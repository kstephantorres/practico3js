const acumulador = [0,0,0,0,0,0,0,0,0,0,0]
let sumador=0

for(let i=0;i<50;i++){
    const dado1=Math.trunc(Math.random()*6+1)
    const dado2=Math.trunc(Math.random()*6+1)
    const suma= dado1+dado2
    
    acumulador[suma-2]++
}

document.write(`<table>
    <tr>
        <th>Suma 🎲🎲</th>
        <th>Apariciones</th>
    </tr>
`)

for(let i=2;i<=12;i++){
    document.write(`<tr>`)
    document.write(`<td>${i}</td>`)
    document.write(`<td>${acumulador[i-2]}</td>`)
    sumador+=acumulador[i-2]
    document.write(`</tr>`)
}
console.log(sumador)
document.write(`</table>`)