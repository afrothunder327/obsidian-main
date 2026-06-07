---
type: daily
tags: [daily]
---
##### On this day
```dataviewjs
const minYear = 2024;
const journalPath = 'Journal/Daily';
const rangeOfYears = (start, end) => Array(end - start + 1).fill(start).map((y, i) => y + i);
const d = moment(dv.current().file.name, "YYYY-MM-DD");
const currentYear = d.year();
const availableYears = rangeOfYears(minYear, currentYear - 1);
const month = ("0" + (d.month() + 1)).slice(-2);
const day = ("0" + (d.date())).slice(-2);
const dateString = month + '-' + day;
availableYears.forEach((y) => {
	var note = dv.page(`${journalPath}/${y}-${dateString}`);
	if (note) { dv.el('span', `[[${note.file.path}|${y}]] `); }
});
```

## Plan


## Notes


## End of day
- Shipped:
- Open threads:
- Tomorrow:

## Notes created today
```dataview
LIST
FROM !"Journal"
WHERE file.cday = date("{{date}}")
```
