var horaAtual = new Date()
var hora = horaAtual.getHours()

console.log(`Agora sao exatamente ${horaAtual.getHours()}:${horaAtual.getMinutes()}.`)

if(hora >= 5 && hora < 12){
    console.log(`Bom dia`)
}else if(hora >= 12 && hora <= 18){
    console.log(`Boa tarde`)
}else if(hora > 18 && hora <= 24){
    console.log(`Boa noite`)
}else if(hora >=0 && hora < 5){
    console.log(`Boa madrugada`)
}else{
    console.log(`Informe um horario valido.`)
}