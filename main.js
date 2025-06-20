const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você faz para ajudar a reduzir a poluição das praias, mesmo quando não está nelas?",
        alternativas: [
            {
                texto: "Evito consumir plásticos descartáveis no dia a dia, como copos, canudos e sacolas.",
                afirmacao: "<b>Consciente e Planejador(a)</b> Você é alguém que pensa a longo prazo e entende que pequenas ações cotidianas têm impacto direto no meio ambiente. Sua personalidade mostra disciplina, responsabilidade e visão sistêmica."
            },
            {
                texto: "Compartilho conteúdos sobre poluição e preservação marinha nas redes sociais para conscientizar mais pessoas.",
                afirmacao: "<b>Comunicador(a) Engajado(a)</b>Você acredita no poder da informação e da mobilização coletiva. Sua personalidade é expressiva, socialmente ativa e inspiradora, buscando influenciar positivamente quem está ao seu redor."
            }
        ]
    },
    {
        enunciado: "Como você reage ao ver uma praia muito suja ao chegar para aproveitar o dia?",
        alternativas: [
            {
                texto: "Junto com amigos, começo a recolher o que dá para limpar antes de montar meu espaço.",
                afirmacao: "<b>Proativo(a) e Solidário(a)</b>. Você age antes de reclamar. Sua personalidade é marcada por iniciativa, empatia e senso de comunidade. Você acredita que exemplo vale mais do que crítica."
            },
            {
                texto: "Tiro fotos, posto nas redes sociais denunciando e marco órgãos responsáveis.",
                afirmacao: " <b>Ativista Consciente</b>Você usa as ferramentas que tem para gerar impacto. Sua personalidade é estratégica, determinada e voltada para transformação social."
            }
        ]
    },
    {
        enunciado: "Qual atitude você acha mais importante ensinar às crianças sobre o cuidado com as praias?",
        alternativas: [
            {
                texto: "Nunca deixar lixo para trás, mesmo que não veja lixeira por perto.",
                afirmacao: "<b>Educador(a de Valores)</b>Você acredita que a mudança começa na formação de hábitos. Sua personalidade é ética, orientada por princípios e dedicada à formação de gerações mais conscientes."
            },
            {
                texto: "Respeitar a natureza como se fosse parte da própria casa.",
                afirmacao: "<b>Sensível e Conectado(a)</b>Você vê a natureza como uma extensão do ser humano. Sua personalidade é emocionalmente inteligente, sensível ao meio e guiada por conexões profundas com o planeta."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 