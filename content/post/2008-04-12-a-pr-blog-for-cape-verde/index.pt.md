---
title: A PR Blog for Cape Verde
author: Bruno Amaral
type: post
options:
  unlisted: false
  showHeader: false
date: 2008-04-12T18:05:11+00:00
slug: /a-pr-blog-for-cape-verde/
btc_comment_counts:
  - 'a:0:{}'
  - 'a:0:{}'
shorturls:
  - 'a:7:{s:9:"permalink";s:57:"http://www.brunoamaral.com/post/a-pr-blog-for-cape-verde/";s:7:"tinyurl";s:25:"http://tinyurl.com/ddxr63";s:4:"isgd";s:17:"http://is.gd/pE0O";s:5:"bitly";s:19:"http://bit.ly/Ofkvu";s:5:"snipr";s:22:"http://snipr.com/eusgd";s:5:"snurl";s:22:"http://snurl.com/eusgd";s:7:"snipurl";s:24:"http://snipurl.com/eusgd";}'
  - 'a:7:{s:9:"permalink";s:57:"http://www.brunoamaral.com/post/a-pr-blog-for-cape-verde/";s:7:"tinyurl";s:25:"http://tinyurl.com/ddxr63";s:4:"isgd";s:17:"http://is.gd/pE0O";s:5:"bitly";s:19:"http://bit.ly/Ofkvu";s:5:"snipr";s:22:"http://snipr.com/eusgd";s:5:"snurl";s:22:"http://snurl.com/eusgd";s:7:"snipurl";s:24:"http://snipurl.com/eusgd";}'
btc_comment_summary:
  - 'a:0:{}'
  - 'a:0:{}'
bttc_cache:
  - 1257342969:0
  - 1257342969:0
bttc_short_url:
  - http://bit.ly/hVRQI
  - http://bit.ly/hVRQI
categories:
  - en
  - Relações Públicas
tags:
  - Blogging
  - plugins
  - wordpress

---
For the first time, [Cape Verde][1] has a college course on Public Relations. And does this have to do with me?

Well, nothing at first. But I was given the opportunity to help the first class of PR students build their blog.

And so it was, it didn&#8217;t take me more than a few minutes because [I had already documented what I did to build my class&#8217; blog][2]. And this second blog is aimed at being simpler. Without the profile page for each user for example.

This time we are taking a gradual approach because I had a hard time getting my classmates to use our blog proactively. And I think it was mostly because of all the bells and whistles I added to wordpress.

But enough about this. In case you are wondering what I did, I leave you the list of features and how they where implemented:

### What do we need?

WordPress is easy to adapt to our needs. All we need is to give it some thought and try to see obstacles ahead. We can have registered users, but do we need to? Will our users use RSS feed? If not, maybe we should give them the chance to subscribe to a newsletter format of our RSS.

And how will those users interact among themselves and with the website

### The Plugins

After considering these questions, my first take of the internal communication blog had two special features. One of them was Subscribe2, a plugin that allows communication to flow according to the categories that interest us the most. The second feature was a tweak of the Author.php page, so it would show user profile s complete with Gravatar.

If you need to control who registers on your blog, I would point you to [Bouncer][3]. It will prompt the administrator of the blog to approve every new registration.

And for added security, [Role Manager][4] and [User Permissions][5]. These two plugins work together to allow content to be more or less private according to user roles. Another essential plugin was [Subscribe to Comments][6]. This plugin send an email once there&#8217;s a reply to a comment, and I believe it was an essential factor to nourish the conversation. People may forget to check a post for new comments, but they never forget to check their email.

And being a PR class, I knew we would eventually share videos. Enter [Viper’s Video Quicktags][7] to make it a single click process. Instead of requesting the embed code, this plugin asks for the video url and fills in the blanks by itself. So, one less thing for users to worry about, and one less headache for the administrator.

### Extra bells and whistles

When a group gathers on the same platform there as to be an option to know who&#8217;s involved. [WordPress can take care of that thanks to the Author.php template][8].

I won&#8217;t get into the details. Instead here are the changes I made:

(Keep in mind that this was all done on WordPress 2.3)

#### Classes.php

Find:

`if ( (0 == count($wp_query->posts)) && !is_404() && !is_search() && ( $this->did_permalink || (!empty($_SERVER['QUERY_STRING']) && (false === strpos($_SERVER['REQUEST_URI'], '?'))) ) )<br />
` 
  
Replace with:
  
`<br />
if ( (0 == count($wp_query->posts)) && !is_404() && !is_author() && !is_search() && ( $this->did_permalink || (!empty($_SERVER['QUERY_STRING']) && (false === strpos($_SERVER['REQUEST_URI'], '?'))) ) ) {`

#### Author-template.php

Find:

`if ( $posts == 0 ) {if ( !$hide_empty ) $link = $name;} else {$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';`

Replace with:

`if ( $posts == 0 ) { if ( !$hide_empty )`

`/*$link = $name;*/` ```$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';``} else {``$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';``(Imagino que esta minha alteração no código esteja um bocadinho redundante, mas foi o que me pareceu melhor na altura e funciona.)`

#### Author.php

Information shown about each user. Again, keep in mind this was before wordpress had gravatar support built in.
  
`<h1>About: <?php echo $curauth->display_name; ?></h1><br />
<img src="<a href="http://www.gravatar.com/avatar.php?gravatar_id=%3C?php">http://www.gravatar.com/avatar.php?gravatar_id=<?php</a> echo md5($curauth->user_email); ?>” alt=”Gravatar” style=”border: 5px solid #dfdfdf” />``<dl><br />
<dt>E-mail</dt><br />
<dd><?php echo $curauth->user_email; ?></dd>``<dt>AIM / MSN</dt><br />
<dd><?php echo $curauth->aim;?></dd>``<dt>Gtalk</dt><br />
<dd><?php echo $curauth->jabber;?></dd>``<dt>Website</dt><br />
<dd><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></dd>``<dt>More profile information</dt><br />
<dd><?php echo $curauth->user_description; ?></dd><br />
</dl>`

And here it is, my way of building a class blog. The version I used for the Cape Verde PR blog doesn&#8217;t have some of the extras and plugins. Instead I focused on &#8220;subscribe2&#8221; and &#8220;subscribe to comments&#8221;. Here, the main goal is to introduce students to bloggging and engage them. In time I guess they will need and want the extras.

If you do happen to make us of this information or just find a different approach, please, let me know. I would love to hear about it.

 [1]: http://en.wikipedia.org/wiki/Cape_Verde
 [2]: http://www.brunoamaral.com/post/blogs-de-comunicacao-interna/
 [3]: http://www.simson-demmer.net/pub/NutsAndBolts/bouncer
 [4]: http://redalt.com/Resources/Plugins/Role+Manager
 [5]: http://urbangiraffe.com/plugins/user-permissions/
 [6]: http://txfx.net/code/wordpress/subscribe-to-comments/
 [7]: http://www.viper007bond.com/wordpress-plugins/vipers-video-quicktags/
 [8]: http://codex.wordpress.org/Author_Templates