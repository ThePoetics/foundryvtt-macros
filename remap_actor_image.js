// Script will take all actors in a given folder
// and replace their image with the one specified below

const folder = game.folders.get("REPLACEME") // right click folder, edit, then right click the book icon in the sheet header to copy the ID to clipboard
const items = folder.contents.concat(folder.getSubfolders(true).flatMap(f => f.contents))
const updates = items.map(doc => ({ 
  _id: doc.id, 
  img: "REPLACEME",
}));
await Item.implementation.updateDocuments(updates);
