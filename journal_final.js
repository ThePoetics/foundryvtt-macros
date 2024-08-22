// Opens a specific journal to the final page
// Very useful for game log entries
const uuid = "JournalEntry.ymNvWbLh432kdUXr";  // REPLACE!
const journal = await fromUuid(uuid);
journal.sheet.render(true, {pageId: journal.pages.contents.pop().id})
