---
type: project
project_kind: reading
tags: [project, reading]
---
# Biosecurity learning

Independent reading and learning on biosecurity. Sources live in `sources/`, my own writing in `notes/`. The dashboard lives in [[reading.base]].

## How this works

- **Add a source** — drop a markdown file in `sources/` with the frontmatter schema below. One file per book/paper/article/blog/podcast.
- **Prioritize** — open `reading.base`, view *Up next*. Edit `status` and `priority` inline.
- **Take notes** — write inside the source file under `## Notes`. Promote portable ideas to standalone files in `notes/` and wikilink back.
- **Synthesize** — write essays / open-question notes / topic overviews directly in `notes/`. No template needed.
- **Subtopics later** — when natural subdivisions emerge, set `topic:` on each source. The *By topic* view groups by it. Don't pre-design subtopics.

## Source frontmatter

```yaml
type: book | paper | article | blog | podcast
status: to-read | reading | read
priority: high | medium | low
topic:                       # optional, fill in once subtopics emerge
authors: [Last, First]
date_added: 2026-06-06
date_finished:
url:
rating:                      # 1-5, only for status: read
tags: [biosecurity]
```

## Open questions

Things I want to understand. Edit freely; questions seed the reading list.

-

## Synthesis notes

```dataview
LIST
FROM "projects/biosecurity-learning/notes"
SORT file.mtime DESC
```
