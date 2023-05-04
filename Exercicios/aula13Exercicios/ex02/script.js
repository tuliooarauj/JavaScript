function calcularIdade(){
    var anoAtual = new Date()
    var anoNascimento = window.document.getElementById('ianoNascimento')
    var sexo = document.getElementsByName('sexo')
    var imagem = document.getElementById('img')
    
    if(!sexo[0].checked && !sexo[1].checked || anoNascimento.value.length == 0 || Number(anoNascimento.value) > Number(anoAtual.getFullYear())){
        window.alert(`[ERRO] Verifique os dados e digite novamente`)
    }else{
        var idade = Number(anoAtual.getFullYear()) - Number(anoNascimento.value)
        if(sexo[0].checked){
            document.body.style.background = 'rgb(0, 166, 255)'
            txt.innerHTML = `Detectamos um homem de ${idade} anos.`
            
        }else{
            document.body.style.background = 'pink'
            txt.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        }
    }
    /* HOMENS */
    if(sexo[0].checked && idade <= 3){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/bebe.jpg')"
    }else if(sexo[0].checked && idade > 3 && idade <= 13){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/crianca-homem.jpg')"
    }else if(sexo[0].checked && idade > 13 && idade <= 18){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/homem-adolescente.jpg')"
    }if(sexo[0].checked && idade > 18 && idade <= 60){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/homem-adulto.jpg')"
    }if(sexo[0].checked && idade > 60){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/homem-coroa.jpg')"
    }

    /* MULHERES */
    if(sexo[1].checked && idade <= 3){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/bebe.jpg')"
    }else if(sexo[1].checked && idade > 3 && idade <= 13){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/crianca-mulher.jpg')"
    }else if(sexo[1].checked && idade > 13 && idade <= 18){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/mulher-adolescente.jpg')"
    }if(sexo[1].checked && idade > 18 && idade <= 60){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/mulher-adulto.jpg')"
    }if(sexo[1].checked && idade > 60){
        imagem.style.display = 'block'
        imagem.style.backgroundImage = "url('img/mulher-coroa.jpg')"
    }
}
