// This macro takes secret door entries (denoted by the itemIDs below) and, when executed, opens all "red" doors and closes all others.
// Similarly it hides all "red" sand tiles and makes visible all others.
// Finally, it plays the sand-flowing sound from my playlist "Sound Board"
// This script is easily editable to represent other combinations (e.g. a blue switch, green switch, purple switch)
// Someone far better at Macros than I could make one single script for all four, plus a "reset" state to bring the map back to initial position




// Disappears red walls and red sand
// Reappears blue, green, and purple walls and related sand

// Get controlled wall ID via console
// console.log(canvas.walls.controlled[0].id)

// Red Walls:    ["yrmkMm14risPpFmB", "fn0ILtkOO6HapDEP", "568bsvkFHpHVBdhR", "20CgYS0Nhue1Xdb7"]
// Blue Walls:   ["SykTTtrPSIZ6QV1N", "T8dmTmKKgUlGO4tJ", "H2tyzW1IEDGVH3BX"]
// Green Walls:  ["c2IxHXX4uDMxcVeV", "P22krc3sKYJ3nZv8"]
// Purple Walls: ["figSp1f9Hwk9yfFO", "2m4uIej0QmL2faHT"]

// Red Sand:     ["EXF64HblPgnTdDqy", "fAM8tbSTcqs2WoaE", "u9G62JUggmg3TEzM"]
// Blue Sand:    ["XCxfKCo88biOlgLi", "IJnadTQeswefoQ6L"]
// Green Sand:   ["J5KahwIZfQnBSnC5", "3nYYvls7Myfr9guW"]
// Purple Sand:  ["oXQEeq5SXffI4VMV", "TNFXxPDPCV7wKY0I"]


// Red Walls and Sand
const openIds = ["yrmkMm14risPpFmB", "fn0ILtkOO6HapDEP", "568bsvkFHpHVBdhR", "20CgYS0Nhue1Xdb7"];
const openwalls = openIds.map(i => canvas.scene.walls.get(i));
const openupdates = openwalls.map(i => { return {_id: i.id, ds: 1}; });
await canvas.scene.updateEmbeddedDocuments("Wall", openupdates);
const tileIds = ["EXF64HblPgnTdDqy", "fAM8tbSTcqs2WoaE", "u9G62JUggmg3TEzM"];
const hideTiles = tileIds.map(i => canvas.scene.tiles.get(i));
const hideUpdates = hideTiles.map(i => { return { _id: i.id, hidden: true}; });
await canvas.scene.updateEmbeddedDocuments("Tile", hideUpdates)


// Blue, Green, Purple Walls and Sand
const closeIds = ["SykTTtrPSIZ6QV1N", "T8dmTmKKgUlGO4tJ", "H2tyzW1IEDGVH3BX", "c2IxHXX4uDMxcVeV", "P22krc3sKYJ3nZv8", "figSp1f9Hwk9yfFO", "2m4uIej0QmL2faHT"];
const closewalls = closeIds.map(i => canvas.scene.walls.get(i));
const closeupdates = closewalls.map(i => { return {_id: i.id, ds: 0}; });
await canvas.scene.updateEmbeddedDocuments("Wall", closeupdates);
const visIds = ["XCxfKCo88biOlgLi", "IJnadTQeswefoQ6L", "J5KahwIZfQnBSnC5", "3nYYvls7Myfr9guW", "oXQEeq5SXffI4VMV", "TNFXxPDPCV7wKY0I"];
const visTiles = visIds.map(i => canvas.scene.tiles.get(i));
const visUpdates = visTiles.map(i => { return { _id: i.id, hidden: false}; });
await canvas.scene.updateEmbeddedDocuments("Tile", visUpdates)

const playlist = game.playlists.getName("Sound Board");
const sound = playlist.sounds.getName("Sand Flowing");
await playlist.playSound(sound);