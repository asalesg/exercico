
function carregar () {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = './fotos/manha.jpg'
        document.body.style.background = '#FFD36E'
    }else if (hora >= 12 && hora <= 18) {
        img.src = './fotos/tarde.jpg'
        document.body.style.background = '#F68989'
    }else{
        img.src = './fotos/noite.jpg'
        document.body.style.background = '#3F0071'
    }


}

