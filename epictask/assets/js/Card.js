const cores = {
    analise: '#F06',
    teste: '#0F9',
    bd: '#F90',
    ux: '#FF00E6'
}

function Card(tarefa) {

    let card = document.createElement("div")
    card.classList.add("card")

    let h2 = document.createElement("h2")
    h2.textContent = tarefa.titulo

    let span = document.createElement("span")
    span.textContent = tarefa.pontos + " pontos"

    let meter = document.createElement("meter")
    meter.value = tarefa.pontos
    meter.min = 0
    meter.max = 100

    let botaoFinalizar = document.createElement("button")
    botaoFinalizar.classList.add("botao")
    botaoFinalizar.textContent = "finalizar"
    botaoFinalizar.addEventListener('click', () => {
        botaoFinalizar.disabled = true
        pontos = pontos + tarefa.pontos
        document.querySelector(".pontos").innerHTML = pontos

    })

    let botaoApagar = document.createElement("button")
    botaoApagar.classList.add("botao")
    botaoApagar.textContent = "apagar"
    botaoApagar.addEventListener('click', () => {
        card.style.animation = "remove 1s ease-in-out"
        setTimeout(() => { card.remove() }, 1000)
    })

    card.style.borderTop = "1px solid " + cores[tarefa.categoria]

    card.appendChild(h2)
    card.appendChild(span)
    card.appendChild(meter)
    card.appendChild(botaoFinalizar)
    card.appendChild(botaoApagar)
    return card

}