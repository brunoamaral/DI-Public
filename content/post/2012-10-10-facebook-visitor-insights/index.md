---
title: Facebook visitor insights
author: Bruno Amaral
options:
  unlisted: false

date: 2012-10-10T07:25:00+00:00
slug: /facebook-visitor-insights/
standard_seo_post_level_layout:
  - 
  - 
standard_link_url_field:
  - 
  - 
standard_seo_post_meta_description:
  - "Facebook's privacy leaks are not limited to its own environment, they can extend to sites you visit."
  - "Facebook's privacy leaks are not limited to its own environment, they can extend to sites you visit."
categories:
  - Geek
tags:
  - analytics
  - code
  - Facebook
  - insights

---
<img src=Screen-Shot-2012-10-09-at-07.31.51-.png" alt="facebook auth dialog" title="facebook auth dialog" width="812" height="404" class="alignnone size-full wp-image-783" srcset=Screen-Shot-2012-10-09-at-07.31.51--300x149.png 300w,Screen-Shot-2012-10-09-at-07.31.51-.png 812w" sizes="(max-width: 812px) 100vw, 812px" />

The other day I noticed the still recent Facebook Software Development Kit (SDK) for PHP. [You can find it here][1].

Simply put, an SDK allows developers to work faster by making goals easier to meet. This SDK is so straightforward that anyone can use it to build a small script to pull visitor data from Facebook. 

Imagine that you want to know who visits your website and what pages they open. Later, you may want to get more data from them, location, likes, interests or anything else from Facebook. The example showed on the SDK github page is easy enough to change and achieve this. I did just that as an example, the code is at the end of this post.

If you use it, in the end you get a text file with lines that look like this:

<pre>Tue, 09 Oct 2012 06:31:00 +0100;Bruno Amaral;/how-this-blog-is-going-to-work/comment-page-1/</pre>

It starts with a timestamp, shows you the name of the person and the page that person was browsing. It could also give you the visitor&#8217;s facebook ID, facebook profile, etc.

The caveat here is that for you to get this information, that person must first authorize access of your Facebook Application.

When was the last time you authorized a Facebook App?

**Before you ask: This blog will not run any of the code below or collect information from your Facebook account.**





 [1]: https://github.com/facebook/facebook-php-sdk
