---
# Template for a news article. This file is ignored because its name starts
# with an underscore.
#
# To publish an article:
#   1. Copy this file into src/content/news/ and give it a URL-friendly name,
#      e.g. call-for-organisers-2027.md -> lisbon.hackjunction.com/news/call-for-organisers-2027/
#   2. Fill in the fields below and write the article in Markdown.
#   3. Set draft to false (or remove the line) when it is ready to publish.
#   4. Images go in public/assets/news/ and are referenced as "/assets/news/<file>".
#      Only use photos JunctionX Lisbon owns or has permission to reuse.
title: "Article title"
description: "One or two sentences summarising the article. Shown in the news feed and in link previews."
pubDate: 2027-01-15
# updatedDate: 2027-01-20

# One of: Announcements, Event Recaps, Projects, Community, International
category: "Announcements"

# "announcement" = original news from the JunctionX Lisbon team (default).
# "press" = a summary of external coverage, written in our own words. Press
# articles must list their sources and use the original publication date.
kind: "announcement"

# Optional: the edition this article is about. Adds a link to its archive page.
# edition: 2027

# Optional for announcements, required for press coverage. Every source is
# shown with a link to the original. Do not add a second entry for a
# translation of the same article; link the version in its original language.
# sources:
#   - publisher: "Técnico"
#     title: "Original headline, in its original language"
#     url: "https://example.com/original-article"
#     date: 2027-01-14
#     language: "en"        # en or pt
#     format: "article"     # article, event, audio, video or gallery

# heroImage: "/assets/news/example.jpg"
# heroImageAlt: "Describe what the image shows."
draft: true
---

Write the article here using Markdown.

## A section heading

Paragraphs, **bold**, [links](https://lisbon.hackjunction.com), lists and images all work.
