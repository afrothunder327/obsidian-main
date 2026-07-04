// Script to create new quarterly plan with 2026-QX naming convention
// For QuickAdd plugin

const getCurrentQuarter = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  let quarter;
  if (month <= 3) quarter = 1;
  else if (month <= 6) quarter = 2;
  else if (month <= 9) quarter = 3;
  else quarter = 4;

  return { year, quarter };
};

const { year, quarter } = getCurrentQuarter();

// Get user input for which quarter to plan for
const response = await quickAddApi.inputPrompt(
  "Enter quarter number (1-4) or leave blank for current quarter:",
  String(quarter)
);

if (response === null) return; // User cancelled

const selectedQuarter = parseInt(response);
if (isNaN(selectedQuarter) || selectedQuarter < 1 || selectedQuarter > 4) {
  new Notice("Invalid quarter. Please enter 1-4.", 3000);
  return;
}

const quarterlyPlanName = `${year}-Q${selectedQuarter}`;
const quarterlyPlanPath = `journal/Quarterly/${quarterlyPlanName}`;

// Check if already exists
if (app.vault.getAbstractFileByPath(quarterlyPlanPath + '.md')) {
  new Notice(`Quarterly plan ${quarterlyPlanName} already exists!`, 3000);
  return;
}

// Create from template
await quickAddApi.executeChoice("New Quarterly Plan");
