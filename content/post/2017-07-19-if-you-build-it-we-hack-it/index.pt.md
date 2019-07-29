---
categories: 
  - Geek
  - Web
tags:
  - IKEA
  - Trådfri
  - Internet of Things
  - IoT
  - Philips
  - Philips Hue
date: 2017-07-19T18:28:55+01:00
draft: false
options:
  unlisted: false

resources: 
- src: "images/lightbulb.gif"
  name: "header"
slug: /post/o-que-construires-nos-vamos-melhorar
subtitle: A Internet of Things, Makers e Marketing
title: O que construires, nós vamos melhorar
markup: mmark
---

**Primeiro, uma nota importante**. O Cinemagraph que se vê nesta página foi criado pelo [Ross da Second Crop Creative. Ele tem trabalhos fantástico no Portfolio e merece a vossa visita    .](http://secondcropcreative.com/)

## O que construires, nós vamos melhorar 

Antes eram conhecidos por Geeks e, hoje em dia, autodenominam-se Criadores. Esta mudança foi natural já que agora é possível ter um impacto físico naquilo que no rodeia e construir qualquer coisa que de facto é capaz de melhorar a nossa qualidade de vida.

<!--more-->

Aquilo que eu quero dizer é que, antes, ser um Geek tinha essencialmente a ver com software e computadores. Depois, ser um Geek estava associado ao desejo de aprender coisas novas e ao prazer que se encontra nas várias formas de cultura popular. Hoje em dia, essas coisas ainda são verdade e os Geeks deram um passo em frente a fim de construírem tudo aquilo que os seus corações ambicionam.

Sensores, Computadores, Robôs, Drones, Impressoras 3D. E não se importam de começar do zero, usarão tudo o que estiver à mão com o objetivo de simplificar as suas vidas e o dia a dia.

Imaginemos um gestor de produto, um proprietário de produto, ou apenas alguém com uma boa ideia, relacionada com algo que acredita ser capaz de atrair as pessoas. Imaginemos que é a melhor coisa de sempre e, sim, capaz de nos fazer comprar sem precisar de mais conversa.

Não interessa a perfeição com que constrói o seu produto, as pessoas terão necessidades diferentes e opiniões distintas. Alguns de nós não vão sequer ler o manual de instruções antes de dar uma opinião online à família, amigos e desconhecidos. E alguns de nós simplesmente dirão "okay" e farão com que o produto funcione à nossa própria maneira.

Existem já alguns exemplos disto. O meu favorito é o Juicero.

Tratava-se de um "máquina de sumos inteligente", se assim a pudermos chamar. Resumidamente, compramos pacotes de sumo e o sistema automático irá servir o sumo ao pressionar um botão. A máquina vem com ligação WiFi para receber atualizações, analisará o pacote de sumo e garantirá que o sumo pode ainda ser bebido. 

[É um pouco cara. Os consumidores gostam da ideia mas não apreciaram o preço e começaram simplesmente a comprar os pacotes de sumo e as espremê-los à mão.](https://www.bloomberg.com/news/features/2017-04-19/silicon-valley-s-400-juicer-may-be-feeling-the-squeeze)

A empresa ainda se esforçou para mostrar o porquê de os consumidores terem de evitar fazer isso, mas serviu de pouco.

Isto não é novo. Há anos que andamos a interferir com produtos. Houve gente que pirateou as suas xBox para instalar Linux, que transformaram os seus portáteis velhos em centros multimédia, que alteraram os seus automóveis para lhes dar mais estilo, rapidez ou eficiência. Só que agora estas coisas são mais fáceis de partilhar e portanto chegam a um público maior.

O que podem fazer as marcas em relação a isto? Pouco, diria eu. [Recentemente, a DJI apareceu nas notícias com o anúncio de que iria bloquear os seus Drones das interferências efetuadas por _piratas_ 'Do It Yourself'. (Não são verdadeiramente piratas, são clientes. Dizer Piratas simplesmente faz com que os títulos noticiosos sejam mais chamativos.)](https://motherboard.vice.com/en_us/article/3knkgn/dji-is-locking-down-its-drones-against-a-growing-army-of-diy-hackers)

Antes de pensar que isto apenas acontece na tecnologia, lembre-se de que existem várias referências a "Piratas do Ikea" na web. As pessoas utilizam a mobília do Ikea de várias formas criativas e inovadoras.

E isto leva-me até ao coração deste artigo.

### A oportunidade do IKEA no universo dos criadores

Então, há algum tempo ouvi falar sobre uma nova linha de lâmpadas inteligentes que funcionava da mesma forma que o sistema Philips Hue. Pode conectá-las à sua rede doméstica com um Gateway e controlá-las utilizando o seu smartphone.

Claro que fui logo testá-las. Ao já ter tido algumas experiências com o Philips Hue, mal podia esperar para testar uma versão mais acessível.

Rapidamente percebi que a documentação e os manuais do Ikea não dizem muito sobre como se pode fazer desenvolvimentos a partir do seu produto. Seria uma oportunidade da qual a marca poderia tirar partido, recorrendo à Comunidade DIY de Criadores e Geeks.

Sem acesso aos dados, podemos especular que este tipo de pessoas não são a sua demografia-alvo ou não representam o cliente-chave. Contudo, para uma marca com tamanha presença a nível global, qualquer esforço que envolva divulgar informação capaz de alimentar esta criatividade poderá expandir o produto para novos níveis.

O simples ato de conceber espaços onde estes clientes possam conectar-se e partilharem experiências é algo capaz de estimular perspetivas sobre novos produtos, showcases de criatividade e, principalmente, criar uma comunidade que possua um verdadeiro impacto.

Ainda assim, sinto que existe algum medo.

Não tenho provas que defendam esta afirmação além da minha intuição (imperfeita). É um sentimento que se baseia, por um lado, numa estratégia de marketing arriscada e, por outro, num parco esforço em criar um vínculo com a comunidade DIY.

### Piratear o Ikea Trådfri

Mas levemos isto mais longe. Vamos piratear o Ikea.

[Com algumas pesquisas e dicas de amigos, encontrei um artigo que detalha os passos necessários para interagir com as luzes sem utilizar a sua App.](https://learn.pimoroni.com/tutorial/sandyj/controlling-ikea-tradfri-lights-from-your-pi)

O artigo utiliza um Rasperry Pi, que é o computador mais barato que se pode encontrar hoje em dia, e a programação Python. Isto funciona pois as luzes utilizam o Zigbee e o protocolo COAPS.

A informação-chave é a de que o Ikea está a utilizar o mesmo username e password para todos os dispositivos, mantendo também os detalhes num autocolante colocado por debaixo do dispositivo Gateway.

Está a acompanhar-me? Boa. 

O artigo abaixo detalha a forma como pode ligar e desligar as luzes no seu computador ou os sensores luminosos anexados ao seu Raspberry PI. É um excelente primeiro passo mas precisa de algo mais.

Se está a ler isto provavelmente viu a minha publicação acima sobre o Johnny Five, o robô inteligente que controla algumas coisas na minha casa e me envia mensagens de texto com informação importante. (Como por exemplo se já existem episódios novos de Game of Thrones).

Percebi que o próximo passo lógico seria conectar o sistema ao Johnny e deixá-lo cumprir o seu processo habitual de garantir que tudo funciona como que por magia.

Esta ligação permite-me estender os recursos habituais das luzes inteligentes Ikea.

- Ligar ou desligar as luzes quando chego ou saio
- Definir quais as luzes em específico que devem ser ligadas com definições de cor particulares [^4]
- Diminuir as luzes caso se decidir ver TV após uma determinada hora
- Controlar a intensidade com base no progresso da luz solar

Você entende a ideia. Isto vai um pouco além de utilizar o controlo remoto, permitindo-me então criar algumas rotinas automáticas caso o deseje.

[^4]: Não é realmente possível controlar a cor, mas poderá definir a luz de acordo com 3 temperaturas de cor diferentes.

### O que é que isto tem que ver com  Marketing

Para quem está a começar, este post é uma extensa dissertação sobre como poderá compreender os seus stakeholders. Ou seja, os clientes e as demais partes que utilizarão o seu produto e terão o desejo de expandi-lo para conseguirem algo diferente.

O resto, bem, o resto é um exemplo prático interligado. Não quero que pensem que estou a discutir cenários hipotéticos. Isto pode ser feito, está a ser feito e o próximo artigo inclui linhas para que possa também fazê-lo.

Depois, isto tem que ver com planeamento. Quando concebe uma qualquer Estratégia, precisa de ter a certeza de que estas coisas são uma possibilidade e de que o seu impacto variará. Está dependente da comunidade de stakeholders e o do contexto do produto ou serviço.

A abordagem passa por ir contra ela ou encará-la como uma oportunidade. Sugiro a última opção, claro.

De uma forma geral, isto tem que ver com a necessidade de ser mais do que um *Gestor* de Marketing. Se tudo o que faz é gerir o relacionamento entre a marca e a agência, manter as campanhas (projetos) no rumo certo e dentro do orçamento, qual é o verdadeiro valor que está a acrescentar ao processo?

Faça um favor a si mesmo e siga algumas das lições ~~clichés~~ que aprendemos com a cultura startup. Saia do escritório, fale com os seus stakeholders cara a cara. Tente ser tão flexível (ágil) quanto possível quando se deparar com essas oportunidades.

No final, se quiserem fazer mesmo a diferença, terão de empurrar as empresas para longe da zona de conforto e para sítios mais próximos dos clientes. Fazendo tudo o que for preciso.

---


##### As minhas notas sobre a diferença entre o IKEA Trådfri e o Philips Hue

{.table .pure-table .table-striped .table-responsive}
| | Ikea Trådfri | Philips Hue |
|---    |---    |---    |
|App | Trabalha apenas com o WiFi doméstico | Trabalha em qualquer lugar |
|Gateway | Opcional [^3] | Obrigatório |
|Temperatura de cor | Sim | Sim |
| Cores | Não | Sim
| DIY | Não [^2] |  Sim [^1] 
| Tecnologia | Zigbee | Informação não disponível
| Ativadores | Base temporal | Base temporal e localização


[^1]: O website do Philips Hue inclui acesso a documentação que ajudará os programadores a criarem novas apps e utilizações para o produto.

[^2]: Na verdade... sim.

[^3]: Poderá associar as suas luzes a um controlo remoto ou a u m sensor, sem o Gateway
