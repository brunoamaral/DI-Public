---
categories:
date: {{ getenv "post_datetime"}}
description:
draft: false
resources:
- src: {{ getenv "post_image" }}
  name: "header"
layout: instagram
options:
  unlisted: false
stories:
subtitle:
title: "{{ getenv "post_title" }}"
tags: {{ getenv "post_tags"}}
---

{{ getenv "post_content" }}
