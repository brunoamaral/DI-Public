---
options:
  unlisted: false
categories: 
  - Geek
tags:
  - Sparrowatch
  - IoT
  - Internet of Things
  - makers
title: "Sparrowatch, Tecnologia para salvar a floresta"
subtitle: "Um projeto da One Over Zero Labs" 
resources:
- src: "cover.jpg"
  name: "header"
- src: "gallery/*.jpg"
  name: gallery-:counter
  title: gallery-title-:counter
date: 2017-07-02T13:00:35+01:00
---

Esta história começou o ano passado, quando [eu e alguns amigos](http://labs.oneoverzero.org/) participámos na [Lisbon Maker Faire](http://makerfairelisbon.com/en/). 
Aconteceu por impulso, tínhamos 4 semanas para conseguir uma ideia que fosse suficientemente interessante para apresentar e útil quanto baste para valer o tempo das pessoas que iam lá estar. Naquela altura o tema de conversaera o novo [NodeMCU](http://nodemcu.com/index_en.html) e o módulo Wi-Fi ESP8266.

Sabem aquela sensação de que somos a pessoa mais burra na sala? E que isso não é um problema, já que todas as outras pessoas partilham e ensinam-nos coisas? È essa sensação que tenho quando estou ao pé deles. Por isso não desistam já e fiquem comigo durante mais um pouco. 

Os kits NodeMCU permitem conectar praticamente qualquer coisa a uma rede Wi-Fi. A ideia era simples, fazemos com que estes módulos falem entre si e passem informação ao longo da rede, até alcançar um que esteja conectado à internet.

E, tendo em conta que podemos incluir todos os tipos de sensores no sistema, começámos com os módulos da temperatura e humidade.

Para ajudarmos estes dispositivos a integrarem-se no ambiente, decidimos transformá-los em casas de pássaros. Faz sentido, não é verdade? As florestas são sistemas e não devemos interferir neles sem lhes dar algo em troca. 

O ponto final do SparroWatch é um painel onde conseguimos monitorizar as variações na floresta. Permite saber quais são as áreas mais secas, quais são aquelas cujo risco de despoletar um incêndio florestal é maior

Basicamente é isto. Existem muitas outras questões em aberto, mas a prova de conceito que fizemos para a Maker Faire foi suficientemente boa. O próximo passo seria executar um projeto-piloto, já que existem algumas coisas que ainda nos são desconhecidas ou sobre as quais temos dúvidas. 

**Qual o alcance dos sensores?**

Neste momento ainda não temos a certeza.

**Quão resiliente é o sistema?**

Sabemos que as baterias conseguem aguentar 2 a 3 semanas sem energia solar, mas o pó e outros elementos podem exigir a manutenção nos ninhos.

**Quão longo é o alcance?** 

A nossa estimativa é que 250 metros sejam uma distância segurança. Ou seja, 6 ninhos poderiam cobrir 1.5 km. 

{{< gallery folder="gallery" title="Lisbon Maker Faire 2016" >}}

## Pedrógão Grande

Poderão já ter tomado conhecimento de que houve há algumas semanas um enorme fogo florestal em Portugal. Morreram 64 pessoas. 

Isto suscitou algum interesse sobre a tecnologia que poderia ser utilizada para detetar ou prevenir fogos florestais. [Flávio Nunes ouviu falar sobre o SparroWatch e escreveu um resumo desse e de outros projetos](https://eco.pt/2017/06/20/ha-tecnologia-portuguesa-para-prevenir-e-combater-incendios/).

O fogo foi despoletado por uma trovoada seca. Eu estava a conduzir para Beirã-Marvão nesse dia, a 100 quilómetros de distância de Pedrógão. Mesmo aí, era possível sentir o ar seco e ver raios no céu. 

Tenho sérias dúvidas sobre se o nosso sistema teria tido alguma utilidade para um fenómeno tão bizarro e estranho. [Mesmo os peritos ainda estão a tentar determinar as razões exatas além da trovoada seca](https://www.publico.pt/2017/07/02/ciencia/noticia/nao-cairam-raios-no-sitio-e-a-hora-do-inicio-do-incendio-de-pedrogao-grande-1777658). 

A vasta plantação de eucaliptos está a ser encarada como um fator, já que esta árvore arde rapidamente e não é originária da região. Para piorar as coisas, [parece que houve problemas com o sistema de comunicação de emergência que os bombeiros estavam a utilizar](https://www.publico.pt/2017/06/28/sociedade/noticia/maioria-das-mortes-em-pedrogao-coincidiu-com-colapso-da-rede-do-siresp-1777258).

Estamos à procura de uma causa única, de alguém ou algo para culpar. Trata-se de um exercício de acusão inútil. Uma abordagem construtiva passaria por legislar sobre as plantações de eucaliptos e tentar melhorar a forma como gerimos as nossas florestas. 

Seria ótimo se um sistema como o SparroWatch pudesse ser útil, [e o código com instruções está disponível no GitHub para todos que pretendem utilizá-lo](https://github.com/OOZLabs/SparroWatch). E, além disso, existe [um artigo com detalhes no site da OneOverZero Labs](http://labs.oneoverzero.org/projectomakerfaire2016/).

Não há nada a impedir-vos! Garantam só que dão os devidos créditos à ! [OneOverZero Labs](http://labs.oneoverzero.org/) quando criarem a vossa rede SparroWatch. 

<iframe src="//www.slideshare.net/slideshow/embed_code/key/wij3QgoX19FluT" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>