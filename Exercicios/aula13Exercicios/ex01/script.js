function carregou(){ 
    var imagem = window.document.getElementById('img')
    var hora = new Date()
    
    var horaAtual = String(hora.getHours()) + ":" + String(hora.getMinutes())
    ihora.innerHTML = 'Agora são: '+horaAtual

    if(hora.getHours() >= 5 && hora.getHours() < 12){
        document.body.style.background = 'yellow'
        imagem.style.backgroundImage = "url('img/foto-manha.jpg')"
    }else if(hora.getHours() >= 12 && hora.getHours() <= 18){
        console.log(`Boa tarde`)
        document.body.style.background = 'orange'
        imagem.style.backgroundImage = "url('img/foto-tarde.jpg')"
    }else if(hora.getHours() > 18 && hora.getHours() <= 24){
        document.body.style.background = 'grey'
        imagem.style.backgroundImage = "url('img/foto-noite.jpg')"
    }else if(hora.getHours() >=0 && hora.getHours() < 5){
        document.body.style.background = 'black'
        imagem.style.backgroundImage = "url('img/foto-madrugada.jpg')"
    }else{
        window.alert(`Informe um horario valido.`)
    }

}