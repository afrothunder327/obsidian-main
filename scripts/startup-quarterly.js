// Startup script: Open quarterly plan + daily note
// Works with Periodic Notes plugin

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

// Get current quarter and today's date
const { year, quarter } = getCurrentQuarter();
const quarterlyName = `${year}-Q${quarter}`;
const today = new Date();
const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

// Open today's daily note using periodic-notes command
try {
  await app.commands.executeCommandById('periodic-notes:open-daily');
} catch (e) {
  console.log('Daily note command failed:', e);
}

// Try to open quarterly plan
const quarterlyPath = `journal/Quarterly/${quarterlyName}`;
const quarterlyFile = app.vault.getAbstractFileByPath(quarterlyPath + '.md');

if (quarterlyFile) {
  // Quarterly plan exists - open it
  await app.workspace.openLinkText(quarterlyPath, '', false, { active: true });
  console.log(`✅ Opened quarterly plan: ${quarterlyName}`);
} else {
  // Quarterly plan missing - show reminder
  new Notice(`📋 Reminder: Create ${quarterlyName} quarterly plan!`, 5000);
  console.log(`⚠️ Missing quarterly plan: ${quarterlyName}`);
}
