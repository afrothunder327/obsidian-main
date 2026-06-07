---
type: Weekly Note
aliases:
  -
tags: weekly-note
---
[[<% moment(tp.file.title, "YYYY[, Week] w").subtract(1, 'weeks').format("YYYY[, Week] w") %>|Last week]] | [[<% moment(tp.file.title, "YYYY[, Week] w").add(1, 'weeks').format("YYYY[, Week] w") %>|Next week]]
##### <span style="color:orange">This week in past years</span>
```dataviewjs
// set your own minimum year and the path to your journals (if applicable)
const minYear = 2024;
const journalPath = 'Journal/Weekly';

const rangeOfYears = (start, end) => Array(end - start + 1)
  .fill(start)
  .map((year, index) => year + index);
const d = moment(dv.current().file.name, "YYYY[, Week] w");
const currentYear = d.year();
const availableYears = rangeOfYears(minYear, currentYear - 1);
const week = d.week()

availableYears.forEach((y) => {
	var note = dv.page(`${journalPath}/${y}, ${week}`);
	if (note) {
		dv.el('span', `[[${note.file.path}|${y}]] `);
	}
});
```
##### <span style="color:orange">This week's notes</span>
```dataview
LIST
FROM "Journal/Daily"
WHERE date(file.name).week = date(this.file.name, "kkkk', Week' W").week  AND date(file.name).year = date(this.file.name, "kkkk', Week' W").year
SORT file.day ASC
```
## Reflection
### What went well?
[[<% moment(tp.file.title, "YYYY[, Week] w").subtract(1, 'weeks').format("YYYY[, Week] w") %>#"What would you like to achieve next week"|Last week's goals for reference]]
<% tp.file.cursor() %>

### What did not go that well?


### What made you laugh this week?


### What new thing did you notice about yourself or someone else?


### What would you like to achieve next week?


## Week at a Glance
