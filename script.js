const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o objetivo principal da inteligência artificial?",
        alternativas: [
            {
                texto:  "Imitar a inteligência humana",
                afirmacao: "afirmacao"
            },
            {
                texto:   "Resolver problemas matemáticos",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Automatizar tarefas repetitivas",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Criar robôs humanoides",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação à automação de empregos devido ao avanço da inteligência artificial?",
        alternativas: [
            {
                texto:   "Acredito que pode criar oportunidades para que as pessoas se concentrem em trabalhos mais criativos e significativos.",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Preocupo-me com a possibilidade de perder meu emprego para a automação.",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Acho que a automação pode ser benéfica, desde que os governos implementem políticas para proteger os trabalhadores afetados.",
                afirmacao: "afirmacao"
            },
            {
                texto:   "Não acredito que a automação terá um grande impacto nos empregos.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua opinião sobre a privacidade de dados em relação ao uso da inteligência artificial?",
        alternativas: [
            {
                texto:  "Acho que é preocupante como nossos dados estão sendo usados ​​e compartilhados sem nosso consentimento.",
                afirmacao: "afirmacao"
            },
            {
                texto:   "Não me importo muito, desde que isso melhore minha experiência como usuário.",
                afirmacao: "afirmacao"
            },
            {
                texto:   "Confio nas empresas e instituições para proteger meus dados adequadamente.",
                afirmacao: "afirmacao"
            },
            {
                texto:   "Acredito que a privacidade de dados é um preço justo a pagar pelo progresso tecnológico.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação à possibilidade de inteligências artificiais se tornarem conscientes e autônomas?",
        alternativas: [
            {
                texto:  "Acho que é apenas ficção científica, não algo que devamos nos preocupar.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Preocupo-me com os possíveis impactos éticos e sociais dessa situação.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Acredito que os humanos sempre serão capazes de controlar a inteligência artificial.",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Estou animado com as possibilidades futuras de interação com IA consciente.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua opinião sobre o uso da inteligência artificial na medicina?",
        alternativas: [
            {
                texto:   "É uma inovação promissora que pode salvar vidas e melhorar diagnósticos.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Preocupa-me a possibilidade de erros ou preconceitos nos diagnósticos feitos por IA.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Acredito que os médicos devem sempre ter a palavra final, independentemente das recomendações da IA.",
                afirmacao: "afirmacao"
            },
            {
                texto:    "Não tenho uma opinião formada sobre isso.",
                afirmacao: "afirmacao"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal += afirmacoes + " ",
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();