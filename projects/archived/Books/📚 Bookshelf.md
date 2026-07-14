---
type: bookshelf
---
## List of all books

```dataview
TABLE WITHOUT ID
	"![|60](" + cover + ")" as Cover,
	link(file.link, title) as Title,
	author as Author,
	join(list(publisher, published)) as Publisher,
	status as Status
FROM "projects/archived/Books/Library"
WHERE !contains(file.path, "Templates")
SORT status DESC, author ASC, file.ctime ASC
```
