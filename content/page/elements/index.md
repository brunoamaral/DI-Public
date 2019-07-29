---
title: "Elements"
date: 2018-11-15T22:26:15+01:00
draft: false
resources:
    - src: images/IMG_0160.jpg
      name: header
    - src: "gallery/*.jpg"
      name: gallery-:counter
      title: gallery-title-:counter
      
    - src: carousel/slide1.jpg
      name: slide
      title: slide 1 
    - src: carousel/slide2.jpg
      name: slide 
      title: slide 2  
    - src: carousel/slide3.jpg
      name: slide 
      title: slide 3 
options:
  unlisted: true
  showHeader: true
---

<h2 class="title">Asides / Pullquotes</h2>

<h3>Aside</h3>

Usage

```md
{{</* aside left >}}This, in part, explains why ...{{< /aside */>}}
```

{{< aside left >}}This, in part, explains why podcasts are on the rise. They are produced by journalists and other writers who dive deep into what they are discussing give the listener more than just a skim of the surface. {{< /aside >}}

<div class="clearfix"></div>

<h2 class="title">Full Width Image</h2>


```md

{{</* image-fullwidth src="images/IMG_0160.jpg" class="" */>}}

```



{{< image-fullwidth src="images/IMG_0160.jpg" class="" >}}

<h2 class="title">Image float left </h2>

```md

{{</* image-floatleft src="https://placekitten.com/200/300" class="animate animation_fadeInLeft" */>}}

```
{{< image-floatleft src="https://placekitten.com/200/300" class="animate animation_fadeInLeft" >}}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae illum nesciunt magnam explicabo iure ipsum quae accusamus esse, laboriosam nulla tenetur debitis facere natus cupiditate, rem officia quis, odit cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit assumenda iure aspernatur dolor doloremque delectus voluptas, libero illo, quo. Nostrum, tenetur, amet! Consequatur dolorem quam provident a eaque, doloribus aut!


<div class="clearfix"></div>

<h2 class="title">Image float right </h2>

```md 

{{</* image-floatright src="https://placekitten.com/200/300" class="animate animation_fadeInRight" */>}}

```

{{< image-floatright src="https://placekitten.com/200/300" class="animate animation_fadeInRight" >}}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae illum nesciunt magnam explicabo iure ipsum quae accusamus esse, laboriosam nulla tenetur debitis facere natus cupiditate, rem officia quis, odit cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit assumenda iure aspernatur dolor doloremque delectus voluptas, libero illo, quo. Nostrum, tenetur, amet! Consequatur dolorem quam provident a eaque, doloribus aut!

<div class="clearfix"></div>

<h2 class="title">Side by side images</h2>

```md

{{</* image-sidebyside src="images/TunisTea-11_11.jpg" class="animate animation_fadeInLeft" */>}}

{{</* image-sidebyside src="images/TunisTea-2_11.jpg" class="animate animation_fadeInLeft" */>}}

```



{{< image-sidebyside src="images/TunisTea-11_11.jpg" class="animate animation_fadeInLeft" >}}

{{< image-sidebyside src="images/TunisTea-2_11.jpg" class="animate animation_fadeInRight" >}}

The animate classes allow the use of animate.css on scroll.

<div class="clearfix"></div>
<h2 class="title">Panorama</h2>

```md

{{</* panorama type="equirectangular" image="31138750083_5e3bfa7df6_o.jpg" showControls="true" autoload="true" author="Benjamim" autorotate="1" */>}}

```



{{< panorama type="equirectangular" image="/post/creating-a-360-photo-viewer/31138750083_5e3bfa7df6_o.jpg" showControls="true" autoload="true" author="Benjamim" autorotate="1" >}}

<h2 class="title">Gallery</h2>


```md

{{</* gallery folder="gallery" title="Jameson at Spark 2018" */>}}

```

{{< gallery folder="gallery" title="Jameson at Spark 2018" >}}

<h2 class="title">Carousel</h2>

```md
{{</* carousel title="optional" */>}}
```

frontmatter parameters:

```yaml
resources:     
    - src: carousel/slide1.jpg
      name: slide
      title: slide 1 
    - src: carousel/slide2.jpg
      name: slide 
      title: slide 2  
    - src: carousel/slide3.jpg
      name: slide 
      title: slide 3 
```


{{< carousel title="round and round it goes" >}}

<h2 class="title">YouTube</h2>

```md
{{</* bootstrap/youtube -HW7nj-GUZY */>}}
```

{{< bootstrap/youtube -HW7nj-GUZY >}}

<h2 class="title">iFrame</h2>

```md
{{</* bootstrap/iframe */>}}
<iframe src="https://open.spotify.com/embed/user/amaralb/playlist/0wUPj2HPkZGVRAlSMutyMT" width="" height="" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
{{</* /bootstrap/iframe */>}}
```

{{< bootstrap/iframe >}}
<iframe src="https://open.spotify.com/embed/user/amaralb/playlist/0wUPj2HPkZGVRAlSMutyMT" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
{{< /bootstrap/iframe >}}


<h2 class="title">Get Pages</h2>


<pre>
    div class="container-fluid">
    div class="row">
      {{</* showpage-large ref="/story/crypto/" */>}}
      {{</* showpage-large ref="/story/coffee-table/" */>}}
      {{</* showpage-large ref="/pt/story/paginas-tantas/" */>}}
      {{</* showpage-large ref="/pt/story/the-untitled-series/" */>}}
    /div>
    /div>
    div class="container">
</pre>

</div>
</div>
</div>
<div class="container-fluid">
<div class="row">
  {{< showpage-large ref="/story/crypto/_index.md" >}}
  {{< showpage-large ref="/story/coffee-table/_index.md" >}}
  {{< showpage-large ref="story/paginas-tantas/_index.pt.md" >}}
  {{< showpage-large ref="/story/the-untitled-series/_index.pt.md" >}}
</div>
</div>


```md
  {{</* showpage ref="post/2017-01-05-algorithms-and-us/index.md" */>}}
  {{</* showpage ref="post/2017-07-06-what-i-learned-from-benjamim/index.pt.md" */>}}
  {{</* showpage ref="post/2018-04-24-the-true-measure-of-a-startup/index.md" */>}}
```

<div class="row">
  {{< showpage ref="post/2017-01-05-algorithms-and-us/index.md" >}}
  {{< showpage ref="post/2017-07-06-what-i-learned-from-benjamim/index.md" >}}
  {{< showpage ref="post/2018-04-24-the-true-measure-of-a-startup/index.md" >}}
</div>
