// This script updates the World title, image, and description
// Useful when running multiple games within one world
// (such as a collection of independent one-shots).
// May have to refresh browser to see changes reflected
//
// Written by mxzf on the Foundry discord, 2025-09

let newWorldConfig = {
    action: 'editWorld',
    id: game.world.id,
    title: 'New world title',
    background: 'icons/anvil.png',
    description: 'Block of description text',
}
await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute('setup'), {
    method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newWorldConfig)
})
