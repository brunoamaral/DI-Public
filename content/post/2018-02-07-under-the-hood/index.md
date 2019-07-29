---
date: 2018-02-07T10:44:23Z
description: "A little behind the scenes on how this blog works"
draft: false
resources: 
- src: blake-connally-373084.jpg
  name: "header"
slug:
stories:
subtitle: 
categories:
  - Geek
tags: 
  - Geek
  - Web
  - Hugo
  - Static Sites
title: Under the Hood
options:
  unlisted: false

---

## What is a static site

Most sites work like errand boys. You go to them, ask for something and they will get it for you. The obvious problem here is that it may take longer to find and deliver your request.

The example is crude, but works. Most sites do have a database and each time you open a page, there is some behind the scenes work to gather and display what you have requested. It's one of the reasons why some sites are slow. They may have a database that became too big, or too many visitors to be able to handle every request, some will have to wait.

This site works more like a store. When you get there, whatever you need is already in stock for you to read.

There is no database, every page here is like a PDF file: ready to deliver and open in any browser or device.

### Speed comes at a cost

Most static sites are very bare bones, with little or no search, comments, automation of social media posts, etc.

The comments here are powered by an external website, [disqus.com](https://disqus.com/), and the search function only works by using a service from [Algolia.com](https://algolia.com/)

It also means I need to make sure every image is small enough to keep the pages light. (More on that soon.)

The way I automate social media publishing is with [Zapier](https://zapier.com) and it's integration with [Buffer.com](https://buffer.com/). 

### Flexibility in every page

Dynamic sites that use information from a database don't allow for much in terms of flexibility. 

For example, the story I called [CryptoNovel](/story/crypto/) uses javascript to encrypt and decrypt each chapter and adding this feature didn't impact the whole site like it would have if it need some logic behind it.

It would go something like this:
> If the story is called Crypto, then add this piece of javascript code and this form logic so that the user can decrypt the text.

<a name="community">

It's simple, but imagine asking this question once for each one of the 2000+ pages that make up this blog. At some point it would slow down the whole site.

## Powered by a Community

![gohugo.jpg](gohugo.jpg)

The first incarnation of the "Digital Insanity" blog used the [Future Imperfect theme](https://html5up.net/future-imperfect), which I ported to use the [Hugo static site generator](https://gohugo.io).

It received a great deal of improvements since then. I have added the concept of _Stories_, made a good deal of SEO improvements, added structured data to the html, included my instagram feed and changed the way you see and use the search function. 

None of this would have been possible if Hugo was not open source and supported by an amazing community who helps developers solve problems in the forum. 

To everyone who participates there, please consider this my heartfelt way of thanking you for your time and dedication.

## Tailored content and smart image crop

The flexibility of static files instead of a database is already good enough. I can go as far as have a fully different page if I like.

Recently, Hugo got a new feature thanks to the work by [Bjørn Erik Pedersen](http://bep.is/): smart image cropping. This feature uses another [open source project by Christian Muehlhaeuser, smartcrop](https://github.com/muesli/smartcrop).

I was already running optimizations during the generation of the static sites, but without any way of making sure I was keeping the subject of the photo intact:

```
# Optimize images

printf "\n${GREEN}### Build done, optimizing NEW images ###\n${NORMAL}"

if [ "$1" == "--all-images" ]
  then
      TAG=$(/usr/bin/git -C $DEFAULT_DIR rev-list --max-parents=0 HEAD)
  else
  # Find the images using the information in Git:
      TAG=$(/usr/bin/git -C $DEFAULT_DIR describe --tags --abbrev=0)
fi

# List the images to be optimized, using Git:
IMAGES=$(/usr/bin/git -C $DEFAULT_DIR diff --name-only $TAG | grep -E 'jpg|jpeg|JPG')

for i in $IMAGES; do
    NAME=$(basename $i)
  DIR=$(dirname $i)
  TARGET="${i/content/$WEBSITE_DIR}"
  printf "processing: $DIR | $TARGET"
  /usr/bin/jpegoptim --all-progressive -p -o $TARGET
  cd "$(dirname $TARGET)" && /usr/bin/convert $TARGET -verbose -resize 500x500 -set filename:original '%t' %[filename:original]_500.jpg ;

   /usr/bin/jpegtran -outfile $TARGET.out -copy none -optimize -perfect $TARGET && mv $TARGET.out $TARGET && chmod 644 $TARGET
done
```

## Security and Simplicity

Since every file is already present in the server, there is no processing and less chances of the server being hacked.

Another thing is it makes me question: "Do I really need this feature?" Most of the times no, I do not need a fancy contact form or flashy pop up with information to subscribe.

## Contact Form 

The contact form page is powered by a service called [FormSpree](https://formspree.io/). It's first tier is free and will deliver any input to the email address specified.

Again, less configuration and a better experience for the user.

## TinyLetter

I wanted a no-thrills way of sending a newsletter and this was perfect. It allows for simple formatting of titles, lists and links. 

To save time, I have Zapier keeping watch over the blog and preparing the content for me. All that is left for me to do is tweak the formatting and press send. What's best? I can place the subscribe form anywhere.

<form style="" action="https://tinyletter.com/brunoamaral" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/brunoamaral', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
<label for="tlemail">Email</label>
<input type="text" style="width:20em; margin-right:20px; float: left;" name="email" id="tlemail">
<input type="hidden" value="1" name="embed">
<input type="submit" value="Subscribe">
<p><a href="https://tinyletter.com" target="_blank">powered by TinyLetter</a></p>
</form>

# Why keep a blog or a Site?

I still believe in good long form content. Specially if you mix it up between images, videos, gifs and whatever else is relevant. Lately I have even been thinking about migrating old content onto new sections of this site.

Here, anything can be posted. I did tiny experiments with video, little clips with less than a minute that YouTube insisted to take down because I didn't own the rights for the music I used. 

This site can also be made more personal to the point of sending a page to a single person or group. In fact, it's riddled with hidden sections, draft projects, personal notes, and self reminders.

This would be harder to do with a Dynamic Site since the complexity behind the scenes is always too much for me to grasp and be 100% sure it's working.

## It's about the story, it's about being different

Sharing things with friends and family on Facebook and instagram can be cool, but it's ephemeral. Facebook and Instagram's Algorithms only give you a certain measure of exposure and once that's gone, it's forever.

Here, I hope to drive people to stumble upon more posts and stories to read. The [Photo Story Telling Challenge](/story/photo-storytelling/) is one of those things.

And does Facebook represent the whole range of interests you have? Here I can post my notes of [UXLx](/tags/uxlx/) and keep it in context. I can go as far as translate one of my favourite poems and display it in both languages I speak: [English](/post/poema-em-linha-reta/) and [Portuguese](/pt/post/poema-em-linha-reta/).

We need better ways to share what is important to us, and to have as much control as possible over the content we produce. And also, to mix and match the things we find along the way into a (half) coherent exposé of why we take the time to develop and write a blog.

A blog or a website is not the medium by excellence, sure I don't think anything really is. What I do think is that so far this is the best solution to talk about the different thinks that interest me. It's also future proof, since this site does not need to host a database or support a programming language like PHP. It will certainly be available to be read in 10 years time. I also get the luxury of a nice daily backup on my computer and on GitHub.

It comes with the added bonus of freedom. I don't have to annoy you with ads, I don't have to post everyday or worry about _likes_. I can relax and just make this virtual place into whatever I like, while at same time can write this article sitting in the sofa, on my computer or phone.

Isn't this what technology should do? Take away restrains and give us freedom to connect with others in different and creative ways.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@blakeconnally?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Blake Connally"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Blake Connally</span></a>