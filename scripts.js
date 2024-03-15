

const key ="4e8f3c7d99f1510ffea308efbc0ee3f4"

function colocarDadosNaTela(dados){                                                                                                                                                                                                                                                              
console.log(dados)
document.querySelector(".city").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".text-prev").innerHTML = dados.weather[0].description
document.querySelector(".moisture").innerHTML = dados.main.humidity + "%"
document.querySelector(".img-prev").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
console.log(dados)
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

colocarDadosNaTela(dados)
}

function clickbotton (){
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)

}
