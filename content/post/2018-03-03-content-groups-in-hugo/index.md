---
date: 2018-03-03T00:41:57Z
description: 
draft: false
resources: 
- src: images/gohugo.jpg
  name: "header"
- src: "gallery/*.jpg"
  name: gallery-:counter
  title: gallery-title-:counter
slug:
stories:
subtitle: 
categories: 
  - Geek
tags: 
  - Hugo
  - Google Analytics
  - Javascript
  - report
  - analytics
title: "Content Groups in Hugo"
options:
  unlisted: false
markup: mmark
---

If you are not a webdesigner or programmer, you probably want to skip this post. Click on [https://brunoamaral.eu/categories/](/categories/) to find something that is more worthy of your time.

For everyone else, a little background first. My this blog is built using [Hugo](https://gohugo.io/) and has the following sections:

- Posts
- Pages
- Stories
- Instagrams

And I wanted to track these elements as [content groups in Google Analytics](https://support.google.com/analytics/answer/2853423?hl=en), using Google Tag Manager. Because I am not at all sure which of these drives more traffic and interest to the site.

You can configure 5 levels of content groups, and I wanted to configure the following:

{.table}
|  | Posts | Pages | Stories (Section) |
| --------- | -------- | -------- | -------- |
| Index 1 | Post | Page | Stories |
| Index 2 | nil  | nil  | StoryName |
| Index 3 | PostTitle | PageTitle | StoryArticleTitle |



### Configure your Hugo theme

To get this information out of [Hugo](https://gohugo.io/) do this, I used the classes in the `body` tag.

**_default/single.html**

{{< highlight html >}}
<body class="single contentgrouptype-{{ .Section }} contentgroupname-{{ with .Params.stories }}{{ index . 0 | urlize }}{{ end }} article article-title-{{ .Title |urlize }}">
{{< /highlight >}}

**_default/page.html**

{{< highlight html >}}
<body class="single page contentgrouptype-{{ .Section }} contentgroupname-{{ .Title | urlize }}">
{{< /highlight >}}


Since the page for Instagrams has its own layout, I took advantage of that:

**Instagrams/instagram.html**

{{< highlight html >}}
<body class="single instagram contentgrouptype-instagrams contentgroupname-{{ .URL }}" id="instagram">
{{< /highlight >}}

*I should be using the title of the instragram post, with urlize. The reason I am not, is because my script still does not collect that information.*

**taxonomy/category.html**

{{< highlight html >}}
<body class="page contentgrouptype-category contentgroupname-{{ .Title | urlize }}">
{{< /highlight >}}

**taxonomy/story.html**

{{< highlight html >}}
<body class="page subhomepage contentgrouptype-story contentgroupname-{{ .Params.story_title | urlize }}">
{{< /highlight >}}

**taxonomy/tag.html**

{{< highlight html >}}
<body class="page contentgrouptype-tag contentgroupname-{{ .Title | urlize }}">
{{< /highlight >}}

### Configure Google Tag Manager

First, we need to install Google Analytics from the Google Tag Manager **tag**.

![](/post/content-groups-in-hugo/images/google-tag-manager.png)

What you are seeing in **{{ }}** are variables that we need to create and configure to tie this together.

In Google Tag Manager, click on "Variables" and then "New". Select "Page Variables" > "Custom Javascript"

Then use this code for the variable "Content Group Type", which will have a value of "tag
  - category
  - stories", or "instagrams"

{{< highlight javascript >}}

// Identify if content group is a tag, category, story etc.
function(){
var contentgroupclass = document.body.classList;
 var dem = contentgroupclass.length;
 for (var i = 0; i <= dem; i++) {
    if (contentgroupclass[i].match('contentgrouptype-')) {
      var contentgroup = contentgroupclass[i].replace(/contentgrouptype-/g, '');
      return contentgroup;
      break;
    }
 }
}

{{< /highlight >}}

The code for "Content Group Name" will follow the same structure:

{{< highlight javascript >}}
function(){
var contentgroupnameclass = document.body.classList;
 var dem = contentgroupnameclass.length;
 for (var i = 0; i <= dem; i++) {
    if (contentgroupnameclass[i].match('contentgroupname-')) {
      var contentgroupname = contentgroupnameclass[i].replace(/contentgroupname-/g, '');
      return contentgroupname;
      break;
    }
 }
}
{{< /highlight >}}

And finaly, the code for "Content Group Article Title"

{{< highlight javascript >}}
function(){
var articletitleclass = document.body.classList;
 var dem = articletitleclass.length;
 for (var i = 0; i <= dem; i++) {
    if (articletitleclass[i].match('article-title-')) {
      var articletitle = articletitleclass[i].replace(/article-title-/g, '');
      return articletitle;
      break;
    }
 }
}
{{< /highlight >}}

You are done.

Go to the preview of tag manager and check that it's working in the different pages. Soon, you will begin to see this data arrive in Google Analytics

### Custom Report

For my use case, I prepared a small custom report using the drilldown of the different content groups:

![](/post/content-groups-in-hugo/images/google-custom-report.png)

And this in turn gives you this report:

![](/post/content-groups-in-hugo/images/google-custom-report-content-groups.png)

And that's it, you can now use the new Content Groups to see where your readers see the most value.

Hope this helps!

<style>
/* Background */ .chroma { color: #f8f8f2; background-color: #272822 }
/* Error */ .chroma .err { color: #960050; background-color: #1e0010 }
/* LineTableTD */ .chroma .lntd { vertical-align: top; padding: 0; margin: 0; border: 0; }
/* LineTable */ .chroma .lntable { border-spacing: 0; padding: 0; margin: 0; border: 0; width: auto; overflow: auto; display: block; }
/* LineHighlight */ .chroma .hl { display: block; width: 100%;background-color: #ffffcc }
/* LineNumbersTable */ .chroma .lnt { margin-right: 0.4em; padding: 0 0.4em 0 0.4em; display: block; }
/* LineNumbers */ .chroma .ln { margin-right: 0.4em; padding: 0 0.4em 0 0.4em; }
/* Keyword */ .chroma .k { color: #66d9ef }
/* KeywordConstant */ .chroma .kc { color: #66d9ef }
/* KeywordDeclaration */ .chroma .kd { color: #66d9ef }
/* KeywordNamespace */ .chroma .kn { color: #f92672 }
/* KeywordPseudo */ .chroma .kp { color: #66d9ef }
/* KeywordReserved */ .chroma .kr { color: #66d9ef }
/* KeywordType */ .chroma .kt { color: #66d9ef }
/* NameAttribute */ .chroma .na { color: #a6e22e }
/* NameClass */ .chroma .nc { color: #a6e22e }
/* NameConstant */ .chroma .no { color: #66d9ef }
/* NameDecorator */ .chroma .nd { color: #a6e22e }
/* NameException */ .chroma .ne { color: #a6e22e }
/* NameFunction */ .chroma .nf { color: #a6e22e }
/* NameOther */ .chroma .nx { color: #a6e22e }
/* NameTag */ .chroma .nt { color: #f92672 }
/* Literal */ .chroma .l { color: #ae81ff }
/* LiteralDate */ .chroma .ld { color: #e6db74 }
/* LiteralString */ .chroma .s { color: #e6db74 }
/* LiteralStringAffix */ .chroma .sa { color: #e6db74 }
/* LiteralStringBacktick */ .chroma .sb { color: #e6db74 }
/* LiteralStringChar */ .chroma .sc { color: #e6db74 }
/* LiteralStringDelimiter */ .chroma .dl { color: #e6db74 }
/* LiteralStringDoc */ .chroma .sd { color: #e6db74 }
/* LiteralStringDouble */ .chroma .s2 { color: #e6db74 }
/* LiteralStringEscape */ .chroma .se { color: #ae81ff }
/* LiteralStringHeredoc */ .chroma .sh { color: #e6db74 }
/* LiteralStringInterpol */ .chroma .si { color: #e6db74 }
/* LiteralStringOther */ .chroma .sx { color: #e6db74 }
/* LiteralStringRegex */ .chroma .sr { color: #e6db74 }
/* LiteralStringSingle */ .chroma .s1 { color: #e6db74 }
/* LiteralStringSymbol */ .chroma .ss { color: #e6db74 }
/* LiteralNumber */ .chroma .m { color: #ae81ff }
/* LiteralNumberBin */ .chroma .mb { color: #ae81ff }
/* LiteralNumberFloat */ .chroma .mf { color: #ae81ff }
/* LiteralNumberHex */ .chroma .mh { color: #ae81ff }
/* LiteralNumberInteger */ .chroma .mi { color: #ae81ff }
/* LiteralNumberIntegerLong */ .chroma .il { color: #ae81ff }
/* LiteralNumberOct */ .chroma .mo { color: #ae81ff }
/* Operator */ .chroma .o { color: #f92672 }
/* OperatorWord */ .chroma .ow { color: #f92672 }
/* Comment */ .chroma .c { color: #75715e }
/* CommentHashbang */ .chroma .ch { color: #75715e }
/* CommentMultiline */ .chroma .cm { color: #75715e }
/* CommentSingle */ .chroma .c1 { color: #75715e }
/* CommentSpecial */ .chroma .cs { color: #75715e }
/* CommentPreproc */ .chroma .cp { color: #75715e }
/* CommentPreprocFile */ .chroma .cpf { color: #75715e }
/* GenericDeleted */ .chroma .gd { color: #f92672 }
/* GenericEmph */ .chroma .ge { font-style: italic }
/* GenericInserted */ .chroma .gi { color: #a6e22e }
/* GenericStrong */ .chroma .gs { font-weight: bold }
/* GenericSubheading */ .chroma .gu { color: #75715e }
</style>
