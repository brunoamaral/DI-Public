---
options:
  unlisted: false

categories: 
  - Geek
tags:
  - Analytics
  - web
title: "Measure what counts, readers"
subtitle: "It's never about how many visitors you get, but how many you engage with"
date: "2017-01-16T00:06:33Z"
resources:
- src: "8ay57w-wxku-mariana-vusiatytska.jpg"
  name: "header"
---

For some reason Marketing professionals are still focused in counting the number of likes over the number of sales, the number of reactions over the number of valuable comments.

Some have thankfully moved to count conversions, even though they don't always share that information with the agency that struggles to bring them more leads.

Bloggers and Instagramers are even buying followers on their respective platforms so they can resell that influence. 

They should be measuring the people who actually interact, who take the time to read and to comment. 

That's a bit out of their reach, for reasons that are mostly technical. Blogger isn't measuring actual readers. Medium does give you that metric and what's most important they use it to provide you with articles that you may in fact want to read yourself.

With this context out of the way this post is going to turn really geeky really fast. So if you want to bail, now is your chance.

### Still with me? Let's go! 

You have been part of an experiment. For a while now I have been measuring the number of people that actually read this blog and which articles they are reading.

The way this works is quite simple.

A small JavaScript counts the number of words of each article and estimates the reading time. Then, it monitors how much you scroll down the page. If you reach more than a certain percentage and have spent more time on the page that the average reading time, an **event** is registered in Google Analytics. 

The event's label is the URL of the page that was read, minus the http or https part.

The script does not count it as an **interactive event** because that would impact on the calculation of the bounce rate. Should a person reading an article count towards the bounce rate or not? That is another discussion. The reason I chose to count it as a non-interactive event was because some articles are quick to read and the person may wish to abandon the page after skimming it.

In case you want to apply the same logic to your site or blog, the code is available on [GitHub](https://github.com/brunoamaral/marceloJS).

_Photo copyright: [Unsplash](https://unsplash.com/collections/228444/books?photo=8AY57w-wXkU)._ 


  