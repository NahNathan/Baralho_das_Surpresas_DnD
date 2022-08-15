
const btn = document.getElementById("botao")
var texto = document.getElementById("texto")
var final = document.getElementById("final")

function random(){
    let i = Math.floor(Math.random()*22)
    carta.setAttribute("src",`./Cartas/${i}.png`)
    switch (i){
    case 0:
        texto.firstChild.nodeValue="Vizir. A qualquer momento que você escolha dentro de um ano da puxada desta carta, você pode fazer uma pergunta em meditação e mentalmente receber uma resposta verdadeira a essa pergunta. Além da informação, a resposta ajuda você a resolver um problema intrigante ou outro dilema. Em outras palavras, o conhecimento vem com a forma de como aplica-lo"
        final.firstChild.nodeValue="🧙‍♂️ Feito por Nathan RDS 🧙‍♂️"
        break;
    case 1:
        texto.firstChild.nodeValue="Sol. Você ganha 50.000 XP e um item maravilhoso (o qual o Mestre determina aleatoriamente) aparece em suas mãos"
        final.firstChild.nodeValue="☀ Feito por Nathan RDS ☀"
        break;
    case 2:
        texto.firstChild.nodeValue="Lua. Você é agraciado com a habilidade de conjurar a magia desejo 1d3 vezes"
        final.firstChild.nodeValue="🌙 Feito por Nathan RDS 🌙"
        break;
    case 3:
        texto.firstChild.nodeValue="Estrela. Aumente um dos seus valores de habilidade em 2. O valor pode exceder 20, mas não pode passar de 24"
        final.firstChild.nodeValue="🌟 Feito por Nathan RDS 🌟"
        break;
    case 4:
        texto.firstChild.nodeValue="Cometa. Se você derrotar o próximo monstro ou grupo de monstros hostis que você encontrar, sozinho, você ganha pontos de experiência suficientes para ganhar um nível. Do contrário, esta carta não produz efeito"
        final.firstChild.nodeValue="☄ Feito por Nathan RDS ☄"
        break;
    case 5:
        texto.firstChild.nodeValue="As Parcas. O tecido da realidade se desemaranha e se tece novamente, permitindo que você evite ou apague um evento como se ele nunca tivesse acontecido. Você pode usar a mágica desta carta no momento em que você a puxa ou em qualquer outro momento, antes de você morrer"
        final.firstChild.nodeValue="🍷 Feito por Nathan RDS 🍷"
        break;
    case 6:
        texto.firstChild.nodeValue="Trono. Você ganha proficiência na perícia Persuasão e dobra o bônus de proficiência em testes feitos com esta perícia. Além disso, você ganha direito de posse de um pequeno forte em algum lugar do mundo. Porém, o forte está atualmente em posse de monstros, o qual você deve limpar antes de poder clamar como seu"
        final.firstChild.nodeValue="🪑 Feito por Nathan RDS 🪑" 
        break;
    case 7:
        texto.firstChild.nodeValue="Chave. Uma arma mágica rara ou mais rara com a qual você seja proficiente aparece em suas mãos. O Mestre escolhe a arma"
        final.firstChild.nodeValue="🗝 Feito por Nathan RDS 🗝"
        break;
    case 8:
        texto.firstChild.nodeValue="Cavaleiro. Você adquire os serviços de um guerreiro de 4° nível que aparece em um espaço de sua escolha, a até 9 metros de você. O guerreiro tem a mesma raça que você e serve você lealmente até a morte, acreditando que o destino levou ele até você. Você controla esse personagem"
        final.firstChild.nodeValue="🛡 Feito por Nathan RDS 🛡"
        break;
    case 9:
        texto.firstChild.nodeValue="Gema. Vinte e cinto peças de joalheria valendo 2.000 po cada ou quinze gemas valendo 1.000 po cada aparecem aos seus pés"
        final.firstChild.nodeValue="💎 Feito por Nathan RDS 💎"
        break;
    case 10:
        texto.firstChild.nodeValue="Garras. Cada item mágico que você esteja vestindo ou carregando é desintegrado. Artefatos em sua posse não são destruídos, mas desaparecem"
        final.firstChild.nodeValue="🦅 Feito por Nathan RDS 🦅"
        break;
    case 11:
        texto.firstChild.nodeValue="O Vácuo. Esta carta negra trás o desastre. Sua alma é sugada de seu corpo e levada a um objeto em um lugar à escolha do Mestre. Um ou mais seres poderosos guardam o local. Enquanto sua alma estiver aprisionada dessa forma, seu corpo está incapacitado. A magia desejo não pode restaurar sua alma, mas revela o local do objeto que contém ela. Você não puxa mais cartas"
        final.firstChild.nodeValue="🌌 Feito por Nathan RDS 🌌"
        break;
    case 12:
        texto.firstChild.nodeValue="Chamas. Um poderoso diabo torna-se seu inimigo. O diabo busca arruinar e importunar sua vida, saboreando seu sofrimento antes de tentar matar você. Esta inimizade perdura até que ou você ou o diabo morra"
        final.firstChild.nodeValue="🔥 Feito por Nathan RDS 🔥"
        break;
    case 13:
        texto.firstChild.nodeValue="Crânio. Você invoca o avatar da morte – um esqueleto humanoide fantasmagórico vestido por uma mortalha negra e carregando uma foice espectral. Ele aparece em um espaço à escolha do Mestre a até 3 metros de você e teataca, avisando a todos os outros que você deve vencer essa batalha sozinho. O avatar luta até você morrer ou até ele chegar a 0 pontos de vida, quando ele desaparecerá. Se qualquer um tentar ajudar você, o ajudante invocará seu próprio avatar da morte. Uma criatura morta por um avatar da morte não pode voltar a vida"
        final.firstChild.nodeValue="💀 Feito por Nathan RDS 💀"
        break;
    case 14:
        texto.firstChild.nodeValue="Idiota. Permanentemente reduza sua Inteligência em 1d4 +1 (até o valor mínimo de 1). Você pode puxar uma carta adicional além de suas cartas declaradas"
        final.firstChild.nodeValue="🧠 Feito por Nathan RDS 🧠"    
        break;
    case 15:
        texto.firstChild.nodeValue="Masmorra. Você desaparece e fica aprisionado em um estado de animação suspensa em uma esfera extradimensional. Tudo que você estava vestindo ou carregando fica para trás no espaço que você ocupava quando desapareceu. Você permanece aprisionado até que você seja encontrado e removido da esfera. Você não pode ser localizado por qualquer magia de adivinhação, mas a magia desejo pode revelar a localização da sua prisão. Você não puxa mais cartas"
        final.firstChild.nodeValue="⛓ Feito por Nathan RDS ⛓"
        break;
    case 16:
        texto.firstChild.nodeValue="Ruína. Todas as riquezas que você carrega ou possui, diferente de itens mágicos, são perdidas. Propriedades portáteis desaparecem. Negócios, imóveis e terras que você possuía são perdidas de uma forma que altera a própria realidade. Qualquer documentação que prove que você deveria ser dono de qualquer coisa é perdida por esta carta também desaparece"
        final.firstChild.nodeValue="💸 Feito por Nathan RDS 💸"
        break;
    case 17:
        texto.firstChild.nodeValue="Euríale. A visão similar à medusa desta carta amaldiçoa você. Você sofre –2 de penalidade nos testes de resistência enquanto estiver amaldiçoado dessa forma. Apenas um deus ou a mágica da carta As Parcas pode terminar essa maldição"
        final.firstChild.nodeValue="🐍 Feito por Nathan RDS 🐍"
        break;
    case 18:
        texto.firstChild.nodeValue="Ladino. Um personagem do mestre, à escolha do Mestre, torna-se hostil a você. A identidade do seu novo inimigo não é conhecida até que o PdM ou alguém mais a revele. Nada além da magia desejo ou de intervenção divina pode terminar a hostilidade do PdM contra você"
        final.firstChild.nodeValue="🗡 Feito por Nathan RDS 🗡"
        break;
    case 19:
        texto.firstChild.nodeValue="Balança. Sua mente sofre uma alteração dolorosa, fazendo sua tendência mudar. Leal se torna caótico, bom se torna mau e vice versa. Se você for neutro ou imparcial, esta carta não produz efeito sobre você"
        final.firstChild.nodeValue="⚖ Feito por Nathan RDS ⚖"
        break;
    case 20:
        texto.firstChild.nodeValue="Tolo. Você perde 10.000 XP, descarte esta carta e puxa outra carta do baralho, contando ambas as puxadas como um das suas cartas declaradas. Se essa perda de XP faria você perder um nível, você perde uma quantidade que deixaria você com XP suficiente para manter o nível"
        final.firstChild.nodeValue="🤓 Feito por Nathan RDS 🤓"
        break;
    case 21:
        texto.firstChild.nodeValue="Bufão. Você ganha 10.000 XP, ou você pode puxar duas cartas adicionais além das cartas declaradas"
        final.firstChild.nodeValue="🤡 Feito por Nathan RDS 🤡"
        break;
    }
} //jeito ineficiente de fazer isso? talvez, mas fazer oq ne

btn.addEventListener("click",random)