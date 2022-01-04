const textarea = document.querySelector('textarea')
const piar = document.querySelector('button')




function getPiu (event) {
    // console.log('Outros tantos passarinho. Muitos passarão')
    event.preventDefault();
    const piuTextArea = textarea.value

    //===== Repassando para função seguinte =====//
    creatPiu(piuTextArea)
}

piar.addEventListener('click', getPiu);


function creatPiu(piuText){
    // ESTRUTURA PIADA:
    // NOME DO PASSARO
    // FOTO
    // HORARIO
    // CONTEUDO DA PIADA


    let data = new Date()
    let hors = data.getHours()
    let min = data.getMinutes()

    const piada = {
        nome:"Daniel",
        foto:'./img/ProfilePic.png',
        usuario:'@danAlgumacoisa',
        timestamp:`${hors}:${min}`,
        piada:piuText
    }

    listarPiada(piada)

}

const feed = document.querySelector(".listaTweets")

function listarPiada(parametro){
    const {nome, foto, usuario, timestamp, piada} = parametro

   let li = document.createElement('li')
   li.classList.add("tweet")
   let img = document.createElement('img')
    img.src = foto
    img.classList.add("tweet_foto")
   let div = document.createElement('div')
   div.classList.add("tweet_conteudo")
   //NOME
   let h2 = document.createElement("h2")
   h2.innerText = nome
   //USARIO + HORA
   let span = document.createElement("span")
   span.innerText = `${usuario} - ${timestamp}`
   //TEXTO PIADA
   let p = document.createElement("p")
   p.innerText = piada

   console.log(li)

   // Estruturando HTML da Piada
   div.appendChild(h2)
   div.appendChild(span)
   div.appendChild(p)

   li.appendChild(img)
   li.appendChild(div)

    feed.appendChild(li)
    textarea.value = " "
   


}

// Preparar, apontar e fogo! Foguete pronto para decolar
