var idade = 21
console.log(`Vc tem ${idade} anos, logo: `)
if(idade < 16){
    console.log(`Nao vota`)
}else if(idade < 18 || idade > 65){
    console.log(`Voto opcional`)
}else{
    console.log(`Voto obrigatorio`)
}

