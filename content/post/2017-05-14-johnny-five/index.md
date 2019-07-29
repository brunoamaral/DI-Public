---
categories: 
  - geek
tags: 
  - bots
  - chatbots
  - artificial intelligence
  - IoT
date: "2017-05-14T00:38:54+01:00"
resources:
- src: "johnny-five-short-circuit.jpg"
  name: "header"
subtitle: "The rise of the robots and what it means for us"
title: "Johnny Five is Alive!"
options:
  unlisted: false

---

The name comes from the movie Short Circuit. Remember? A robot is struck by lightning and becomes self aware. His name was Johnny Five and he was friendly and curious about humans, nature and how stuff works. 

{{< youtube yndq8jeSPc8 >}}

[A while back, I used the name for a small home automation project I was working on](https://github.com/brunoamaral/johnny-five). In its current version, Johnny makes sure the lights are turned off or on, keeps track of when I arrive and leave home. And he takes commands through the Telegram Bot API to turn off the TV or respond to friends saying when he last saw me.

The workings are pretty simple. My television is an old Monitor, which I turn on and off through the HDMI cable's signal. The lights are Philips Hue bulbs. To trigger my arrival and departure I'm using a service that was recently "Discontinued", [Locative](https://blog.locative.io/bye-everyone-df01871fe949).

If you're familiar with the lights you are probably wondering why I didn't just use the Philips App. Well, for starters Johnny is doing a few other things. He could, for example, gently dim down the lights if I'm working late. 

Johnny Five is living inside a Raspberry Pi, and with that he also backs up my personal and work computer. This saved me 329,00 €.

Add that the Media Center. It runs Kodi and fetches content automatically, [which includes the local public TV and Radio Stations](http://www.rtp.pt/play/). I'm still trying to hook up my spotify account to it. 

Did I mention he runs as a Telegram Bot ? This means he can send messages to notify me of new episodes of my favourite shows. Soon I plan to add a feature where he send an email to a select number of friends if I don't check in for an extended period of time.

<img src="./johnny-five-telegram.png" alt="Johnny Five on Telegram">

## I, for one, welcome our new robot overlords

{{< youtube 8lcUHQYhPTE >}}

Home automation is just a small part of what [bots, robots and other forms of artificial intelligence](/post/algorithms-and-us/) can do for us. Imagine you are dealing with a problem and after spending days searching the web you gave up. You've hit a dead end. You have better things to do than to keep coming back to google and look up new information. 

Bots and other agents can handle these tasks for us. And it seems we don't want another fancy graphic interface, we want something like Alexa, Amazon Echo, and Google Home. These bots are able to process our natural language and execute commands. 

(Keep in mind, bots do this at the expense of our privacy. The companies behind these new bots assure we are safe but they are still complex systems that we should keep an eye on.)

Commercial Brands and other organisations are joining the bandwagon of Bots for customer service at many levels. Whether it's customer support or something more complex, they want to be the first to prove the return of investment on bots. I have been playing around with some services that provide tools to set up Facebook Bots.

[Chatfuel](https://chatfuel.com), [Morph.AI](https://morph.ai/), [Api.AI](https://api.ai/), [Mobile Monkey](https://mobilemonkey.com/) … being able to provide a working bot and prove it's usefulness is the new gold rush. Even Gartner has a report about it, [Four Use Cases for Chatbots in the Enterprise Now](https://www.gartner.com/doc/3610917?ref=AnalystProfile&srcId=1-4554397745).

And don't think bots are just going to live in customer support or inside little apps. We already see integration of systems with company tools like Slack and Email and they provide information that is critical for the business. [These can be system alerts on how your website and service is performing so that your development team can act quickly](https://docs.newrelic.com/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-controlling-where-send-alerts).

## When you build a brand, you are building an artificial intelligence

This is where things begin to get interesting. [Heidi Hackemer would say a brand is an operating system](https://www.linkedin.com/pulse/brand-operating-system-elisa-schreiber), I think it can go much further to a full intelligence. 

We have been building brands based on how they look and only after did we worry about how they wrote. With the tools that we have now, we have to be concerned about how they sound and most of all, how they make decisions.

If you don't believe me come with me to 1943. Johnson & Johnson is about to become a publicly traded company and Robert Wood Johnson is writing what will be known as the [Johnson & Johnson Credo](https://www.jnj.com/about-jnj/jnj-credo). In it you find a mention to all of their stakeholders and a statement of what the company's values are.

> Our Credo is more than just a moral compass. We believe it’s a recipe for business success. The fact that Johnson & Johnson is one of only a handful of companies that have flourished through more than a century of change is proof of that.

People working at Johnson & Johnson have been using the Credo as a way to make decisions, and it seems to be working. Like Heidi says, it's a system.

Other brands have similar tools. Visions, Values, Mission Statements. Some are better than others, and they all aim to "align" stakeholders. Soon we will be moving towards giving a brand some personality that can be reflected by one or more bots.

This poses a problem, do we let the humans know they are talking with a bot or do we just let that [Touring Test](https://en.wikipedia.org/wiki/Turing_test) take its course? I'm going to leave that for some other time.

What if a robot talks with another robot? This can easily happen, and with the emergence of [Smart Contracts](https://en.wikipedia.org/wiki/Smart_contract) these bots may have the power to guide the organisation. 

## Back to Johnny Five

You may be wondering about the point of all this. Quite simply I believe bots are not just a shiny new object, they have been around since the days of IRC when they were used to let people browse and retrieve files from servers, mediate trades and play games.

These entities will also be a part of several levels of our life. At a personal level, organisational and society. Imagine talking to a robot so that you are issued a new citizen card, for example.

And as for home automation, it's a growing business with vendors smart enough to require little or no installation. For example, using the wifi, Johnny could easily power an Arduino to raise and lower the shades in the apartment.

On the other hand I feel brands are running and stumbling trying to figure out what to do with the new technology. And as I said, their biggest challenge will be to build a whole personality for their chatbots and give it a good map of Values to make decisions if required.

There are fun times ahead. 