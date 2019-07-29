---
categories: 
  - Geek
  - Web
tags:
  - Internet of Things
  - IoT
  - Makers
  - Marketing
date: 2017-07-19T18:28:55+01:00
draft: false
options:
  unlisted: false

resources: 
- src: "images/lightbulb.gif"
  name: "header"

subtitle: The Internet of Things, Makers and Marketing
title: If You Build It We Will Hack It
markup: mmark
---

**First, an important note**. The cinemagraph you see in this page comes from [Ross at Second Crop Creative. He has some amazing work in his portfolio that you should check out.](http://secondcropcreative.com/)
## If you build it, we will hack it

Before they were called geeks, and nowadays they call themselves Makers. This change was natural because it is now possible to produce a physical change in what surrounds you and to build anything you want to improve your quality of life.
<!--more-->



What I mean is, before, being a Geek was mostly about software and computers. After, being a geek was linked to your desire to learn new things and to your enjoyment in several forms of pop culture. Today, these things still hold true and geeks have move forward to building whatever they set their hearts to.

Sensors, Computers, Robots, Drones, 3D Printers. And they don't bother starting from scratch, they will use whatever is handy to make their life easier.

Let's say you're a product manager, product owner or just someone with a cool idea of something that you think people will want. Let's imagine it's the coolest thing ever, and yes we want it so just "shut up and take my money!"

It doesn't matter how perfect you make your product, people will have different needs and different opinions. Some of us won't even read the instruction manual before voicing that opinion online for family, friends and strangers. And some of us will simply say "fine" and move on to making it work the way we want to.

There are already a few examples of this. My favourite is Juicero. 

This was a "smart juice maker" if we can call it that. In short, you buy juice packs and the automatic system will pour the juice for you with the push of a button. The juicer comes with a wifi connection to receive updates, it will analyse the juice pack and make sure it's still drinkable.

[It's kind of expensive. Consumers who like the idea but disliked the price tag started buying the juice packs and simply squeezing it with their bare hands.](https://www.bloomberg.com/news/features/2017-04-19/silicon-valley-s-400-juicer-may-be-feeling-the-squeeze)

The company stepped forward to make a point about how consumers shouldn't do it, but it was of little help.

This is not new. We have been messing with products for years. People have hacked their xbox consoles to install Linux, turned old laptops into media centres, changed their cars to make them look cooler, faster, or more efficient. It just that these things are now easier to share and therefore spread to a wider audience.

What can brands do about it? Not much, I would say. [Recently, DJI announced was on the news about how it's locking down its drones from tampering by Do It Yourself 'hackers'. (They aren't really hackers, they are costumers. Saying Hackers just makes for a better headline.)](https://motherboard.vice.com/en_us/article/3knkgn/dji-is-locking-down-its-drones-against-a-growing-army-of-diy-hackers)

Before you think this only happens in technology, remember that there are numerous mentions to "Ikea Hackers" around the web. People who use Ikea's furniture in creative and innovative ways.

And this brings me to the heart of this article.

### Ikea's opportunity in the maker space

Right, so a while back I heard there was a new line of smart light bulbs that work in the same way as the Philips Hue system. You connect them to your home network with a Gateway and can control them using your smartphone. 

Of course I jumped on it. Having already done a few experiments with the Philips Hue, I couldn't way to try out the more affordable version.

I quickly learned that Ikea's documentation and manuals don't tell you much about how to develop around their product. This is the opportunity that the brand could make use of, the DIY community of Makers and Geeks.

With no access to data, we can speculate that these are not their target demographic or key customer. Yet for a brand with such a global presence, any effort in putting out information that will nurture this creativity can expand it to new levels.

Simply creating spaces for these customers to connect and share experience can bring insights on new products, showcases of creativity, and create a community with actual impact on the bottom line.

Yet, I sense some fear.

I have no proof to support this claim other than my (flawed) intuition. It's a feeling from seeing bold marketing communication on one side and little effort in bonding with the DIY Community. 

### Hacking the Ikea Trådfri

Alright, but lets take this further. Let's hack Ikea.

[With a few searches and hints from friends, I found an article breaking down the steps necessary to interact with the lights without using their App.](https://learn.pimoroni.com/tutorial/sandyj/controlling-ikea-tradfri-lights-from-your-pi)

The article uses a Raspberry Pi, which is as cheap a computer as you can get right now, and Python programming. This works because the lights use Zigbee and the COAPS protocol.

The key information was that Ikea is using a standard username and password for all devices, as well as keeping the details in a sticker beneath the Gateway device.

Are you following me so far? Good. 

The article above details how you can turn the lights on and off using only your computer or light sensors attached to your Raspberry PI. It's a great first step but needs a bit extra. 

If you are reading this you have probably seen my post about Johnny Five, the clever little robot that controls a few things around my house and texts me important information. (Like, that the new episode of Game of Thrones is out.)

I figured that the next logical step would be to connect the system to Johnny and let him do his regular thing of making sure everything works as if by magic.

This link allows me to extend the usual features of the Ikea smart lights.

- Turn lights on or off when I arrive or leave
- Set specific lights to turn on with specific color settings [^4]
- Dim the lights if I start watching tv after a certain time
- Control the intensity based on the current progress of the sunset

You get the idea. This goes a bit beyond using the remote, it allows me to make some routines automatic if I wish.

[^4]: You can't really control the color, but you can set the light  to 3 different color temperatures.

### What does this have to do with Marketing

For starters this is long roundabout post is about understanding your stakeholders. Customers and other parties that will use your product and wish to expand it to do something else.

The rest, well the rest is a practical example intertwined. I don't want you to think that I am discussing hypothetical scenarios. This can be done, is being done, and this article includes links for you to do it too.

Next, this is about planning. When you conceive any Strategy, you need to be aware that these things are a possibility and their impact will vary. It depends on the community of stakeholders and the context of the product or service. 

The approach is to either go against it or take it as an opportunity. I suggest the last one, of course.

In the great scheme of things, this is about the need to be more than a Marketing *Manager*. If all you are doing is managing the relationship between the brand and the agency, keeping campaigns (projects) on track and on budget, what real value are you bringing to the process?

Do yourself a favor and follow some of the ~~clichés~~ lessons we get from startup culture. Get out of the office, talk with your stakeholders face to face. Try to be as flexible (agile) as possible when these opportunities present themselves.

In the end, if you really want to make a difference, you need to drag businesses away from their comfort zone and closer to their customers. Doing whatever it takes.

---


##### My notes about the difference between the IKEA Trådfri and Philips Hue

{.table .pure-table .table-striped .table-responsive}
| | Ikea Trådfri | Philips Hue |
|---    |---    |---    |
|App | Works in home wifi only | Works anywhere |
|Gateway | Optional [^3] | Required |
|Color temperature | Yes | Yes |
| Colours | No | Yes
| DIY | No [^2] |  Yes [^1] 
| Technology | Zigbee | Information Not Available
| Triggers | Time based | Time and location based


[^1]: The Philips Hue website features access to documentation that will help developers create new apps and uses for the product. 

[^2]: Actually... yes.

[^3]: You can pair your lights to a remote or to a sensor, without the Gateway
