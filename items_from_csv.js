// Read CSV data from file and create items
// Make sure the column headers in the first row match the Foundry property path format, like system.attribute.value and it should just work
// From mxzf, 2026-01

let data = await fetch('path/to/data_file.csv').then(r => r.text())
let [headers, ...rows] = data.replaceAll('\r\n','\n').split('\n').map(row => row.split(','))
for (const row of rows){
    const rowObj = Object.fromEntries(headers.map((name,i) => [name, row[i]]))
    Item.create(rowObj)
}
