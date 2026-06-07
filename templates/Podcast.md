---
type: podcast
podcastName: {{VALUE:safePodcastName}}
title: {{VALUE:safeTitle}}
published: {{VALUE:episodeDate}}
guest:
url: {{VALUE:url}}
image: {{VALUE:artworkUrl}}
status: to-read
priority: medium
topic:
date_added: <% tp.date.now("YYYY-MM-DD") %>
date_finished:
rating:
tags: [podcast]
aliases:
  - "{{VALUE:safeTitle}}"
---
![|200]({{VALUE:artworkUrl}})
# {{VALUE:podcastName}}
### {{VALUE:title}}
###### {{VALUE:episodeDate}}

## Notes
- <% tp.file.cursor() %>
