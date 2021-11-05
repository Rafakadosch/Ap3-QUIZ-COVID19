
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')
// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')




const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
    
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Onde começou o primeiro caso?",
    alternativaA : "Brasil",
    alternativaB : "Salvador",
    alternativaC : "China",
    alternativaD : "Estados unidos",
    correta      : "China",
    
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Como o COVID-19 é transmitido?",
    alternativaA : "Através de gotículas que saem de sua boca..",
    alternativaB : "Bebendo água suja",
    alternativaC : "Aperto de mão",
    alternativaD : "Todas acima",
    correta      : "Através de gotículas que saem de sua boca..",

}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Quais são os sintomas comuns de COVID-19?",
    alternativaA : "Febre, Perda de paladar",
    alternativaB : "Tosse",
    alternativaC : "Cansaço",
    alternativaD : "Todas acima",
    correta      : "Todas acima",

}
const q4 = {
    numQuestao   : 4,
    pergunta     : "SARS-CoV2,foi identificado em Wuhan em qual data?",
    alternativaA : "31/12/2019",
    alternativaB : "01/02/2019",
    alternativaC : "30/10/2020",
    alternativaD : "01/01/2021",
    correta      : "31/12/2019",
    
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Lavar as mãos pode protegê-lo do COVID-19?",
    alternativaA : "Sim - mas apenas se você usar uma lixívia forte",
    alternativaB : "Sim - sabão e água normais ou desinfetante para as mãos são suficientes",
    alternativaC : "Não - Lavar as mãos não para COVID-19",
    alternativaD : "Acho que sim",
    correta      : "Sim - sabão e água normais ou desinfetante para as mãos são suficientes",
    
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Quanto tempo dura a proteção da vacina?",
    alternativaA : "Dois anos",
    alternativaB : "Um ano",
    alternativaC : "Nada Definido",
    alternativaD : "A vida toda",
    correta      : "Nada Definido",
    
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é a melhor Vacina?",
    alternativaA : "Coronavac",
    alternativaB : "Pfizer",
    alternativaC : "Janssen",
    alternativaD : "É a que estiver disponível",
    correta      : "É a que estiver disponível",
    
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual total de doses aplicadas no Brasil?",
    alternativaA : "Aprox.100 milhões",
    alternativaB : "Aprox.10 milhões",
    alternativaC : "Aprox.249,7 milhões",
    alternativaD : "Exatos 270 milhões",
    correta      : "Aprox.249,7 milhões",
    
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a temperatura normal do corpo de um ser humano?",
    alternativaA : "35-36°C",
    alternativaB : "36-37°C",
    alternativaC : "34-35°C",
    alternativaD : "30-31°C",
    correta      : "36-37°C",
    
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "De onde o coronavírus tirou seu nome?",
    alternativaA : "Uma pessoa chamada Corona o identificou",
    alternativaB : "Devido ás projeções em forma de folha",
    alternativaC : "Devido ás suas projeções em forma de coroa",
    alternativaD : "Nenhuma das afirmações acima",
    correta      : "Devido ás suas projeções em forma de coroa",
    image        :"q10.jpg",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,]





let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}



