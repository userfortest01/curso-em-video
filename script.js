const button = document.querySelector("button")
let contador = 0
let cor = "blue"

function verificaCor() {
    if (cor === "blue") {
        button.style.backgroundColor = "blue"
        button.style.color
        cor = "vermelho"
        button.innerText = "Que tal clicar denovo???"
    } else if (cor === "vermelho") {
        button.style.backgroundColor = "red"
        cor = "blue"
        button.innerText = "E de novo?"
    }
}


function adicionaAnimacao() {
    button.addEventListener('click', () => {
        if (contador >= 10) {
            button.innerText = "Ok, chega de clicar!"
            button.style.backgroundColor = "grey"
        } else {
            verificaCor()
            ++contador
            console.log(`Você clicou ${contador} vezes.`)
        }

    })
}


adicionaAnimacao()
