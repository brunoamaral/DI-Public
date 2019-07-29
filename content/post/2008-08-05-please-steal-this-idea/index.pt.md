---
title: Please steal this idea!
author: Bruno Amaral
type: post
options:
  unlisted: false
  showHeader: false
date: 2008-08-05T22:08:57+00:00
slug: /please-steal-this-idea/
btc_comment_counts:
  - 'a:0:{}'
  - 'a:0:{}'
btc_comment_summary:
  - 'a:0:{}'
  - 'a:0:{}'
bttc_cache:
  - 1257214731:0
  - 1257214731:0
bttc_short_url:
  - http://bit.ly/UQxYl
  - http://bit.ly/UQxYl
categories:
  - en
tags:
  - api
  - code
  - friendfeed
  - lifestream

---
Services like delicious, twitter and friendfeed mean nothing if you don&#8217;t give them context. Recently I came to the conclusion that my links page was dead. So I replaced it with a [delicious link-stream][1], following [dextro][2]&#8216;s [advice][3].

But then it hit me, you can&#8217;t post comments to delicious. A click later I went from that thought to the [friendfeed api page][4].

A quick search came up with 2 wordpress plugins, both already installed and none of which singles out the delicious stream from friendfeed. Back to square one.

So I took a look at my server and noticed that one of the plugins already came with the friendfeep api library. About an hour later I had coded a new page template that I called [lifestream beta][5].

With it, I now have a delicious link stream that links to friendfeed so you can comment. Ideally, I was aiming for a lifestream page that allowed filtering the stream by service.

I think there&#8217;s a gap between friendfeed and wordpress. One that we could easily fill by providing a more customized friendfeed page in wordpress, along with the friendfeed comments plugin. In a perfect world, we could even seamelessly merge friendfeed and wordpress comments.

So please, go ahead and steal this idea. I would love to have a lifestream with filter and comment features.

Here&#8217;s the code if you&#8217;re interested in showing a link-stream:
  
`<?php<br />
$username = 'brunoamaral';<br />
$service = "delicious";<br />
$date_format = 'l G:i';<br />
$feed = new FriendFeed($username, $api);<br />
$session = new FriendFeed();<br />
$feed = $session->fetch_user_feed($username, $service);?>`

`<div id="ff-activity">`

`<?php foreach ($feed->entries as $entry) { ?><br />
<div class="ff-event ff-<?php echo $entry->service->id; ?>" style="background-image: url('<?php echo $entry->service->iconUrl; ?>');">`

`<p class="title"><a href="<?php echo $entry->link;?>"><?php echo $entry->title;?></a></p>`

`<p class="ff-meta"><small><a href="http://del.icio.us/bruno.amaral" class="external"><?php echo date($date_format, $entry->published); ?></a></small> >>> <a href="http://friendfeed.com/e/<?php echo $entry->id; ?>">Friendfeed entry</a> </div><br />
<?php } ?><br />
</div></div>`

 [1]: http://www.brunoamaral.com/links/
 [2]: http://www.blog.nonsensebb.com/
 [3]: http://twitter.com/d3x7r0/statuses/878180892
 [4]: http://friendfeed.com/api/
 [5]: http://www.brunoamaral.com/lifestream-beta/