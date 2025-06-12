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
        enunciado: "Por que há tanta escassez de recursos na saúde pública?",
        alternativas: [
            {
                texto: "Acredito que Falta de investimento governamental",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "desigualdades na distribuição de recursos",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
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