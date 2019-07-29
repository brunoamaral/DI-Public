---
categories: 
  - Geek
tags:
  - Sparrowatch
  - Makers 
  - IoT
  - Internet of things
title: "Sparrowatch, Technology to save the forest"
subtitle: "A project by One Over Zero Labs" 
resources:
- src: "cover.jpg"
  name: "header"
- src: "gallery/*.jpg"
  name: gallery-:counter
  title: gallery-title-:counter
date: 2017-07-02T13:00:35+01:00
options:
  unlisted: false

---

This story starts last year, when [a few friends and me](http://labs.oneoverzero.org/) participated in the [Lisbon Maker Faire](http://makerfairelisbon.com/en/). 

It happened on a whim, we had about 4 weeks to come up with an idea that was cool enough to display and useful enough to worth people's time. It just happens that at that time the guys were talking about the new [NodeMCU](http://nodemcu.com/index_en.html) and and the wifi module ESP8266.

You know the feeling that you're the dumbest person in the room? And that's ok because everyone else is cool and teaches you stuff? That's the feeling I get from being around them. So please hang in there with me a little longer.

The NodeMCU kits let you connect pretty much anything to wifi network. The idea was simple, we make these modules talk with each other and pass information along the network until it reaches one that is connected to the internet. 

And since we can include all sorts of sensors in the system, we started with temperature and humidity modules.

To help these devices blend with the environment we decided to turn them into birdhouses. It made sense, right? Forests are systems and you can't start messing with it without giving something back.

The endpoint of the SparroWatch is a dashboard where we can monitor the variations in the forest. Which areas are dryer, which are more likely to be the starting point of a forest fire.

In a nutshell, that's it. There are many other questions open but the small proof of concept we did for the maker faire was good enough. The next step would be to run a pilot project because there are a few things we still don't know or are unsure about.

**What is the range of the sensors?**

We're not sure at this point.

**How resilient is the system?**

We know the batteries can hold up for 2 to 3 weeks without solar energy, but dust and other debris may require maintenance on the nests.

**How long is the range?** 

Our estimation is that 250 meters is a safe distance. This means 6 nests could cover 1.5 km.


{{< gallery folder="gallery" title="Lisbon Maker Faire 2016" >}}


## Pedrógão Grande

You may have heard there was a huge forest fire in Portugal a few weeks ago. 64 people died as a result. 

This sparked some interest about technology that could be used to detect or prevent forest fires. [Flávio Nunes heard about the SparroWatch idea and wrote a sum up of that and other projects](https://eco.pt/2017/06/20/ha-tecnologia-portuguesa-para-prevenir-e-combater-incendios/).

The fire began as a result of a dry storm. I was driving to Beirã-Marvão that day, 100 km from Pedrógão. Even there you could feel the dry air and see a few strikes of lightning in the sky. 

I have serious doubts whether our systems could have been of any use to prevent such a freak occurrence of circumstances and weather. [Experts are still trying to determine the exact reasons besides the dry storm](https://www.publico.pt/2017/07/02/ciencia/noticia/nao-cairam-raios-no-sitio-e-a-hora-do-inicio-do-incendio-de-pedrogao-grande-1777658). 

The large plantation of eucalyptus tree is being looked at as a factor, as it burns quickly and is not indigenous to the region. To make matters worse, [its seems there were issues with the emergency communication system that the fire brigades were using](https://www.publico.pt/2017/06/28/sociedade/noticia/maioria-das-mortes-em-pedrogao-coincidiu-com-colapso-da-rede-do-siresp-1777258).

We are looking for one single cause, someone or something to blame. This is a useless exercise of finger pointing. A constructive approach would be to legislate the plantation of eucalyptus trees and to improve the way we manage our forests.

I would love it if a system like the SparroWatch could be useful, [and the code with instructions are available on GitHub for anyone to use](https://github.com/OOZLabs/SparroWatch). And more, there is [an article with details on the OneOverZero Labs website](http://labs.oneoverzero.org/projectomakerfaire2016/).

There's nothing to stop you! Just make sure to credit back to the ! [OneOverZero Labs](http://labs.oneoverzero.org/) when you do build your SparroWatch net. 

<iframe src="//www.slideshare.net/slideshow/embed_code/key/wij3QgoX19FluT" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>