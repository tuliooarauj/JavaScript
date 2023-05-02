function testePais(){
    var p = window.document.getElementById('ipais')
    var qualPais = document.getElementById('qualPais')

    if(p.value=='Brasil' || p.value==`brasil`){
        qualPais.innerHTML = `Já que vc nasceu no ${p.value}, vc é brasileiro.`
    }else{
        qualPais.innerHTML = `Já que vc nasceu no ${p.value}, vc é estrangeiro.`
    }
}
