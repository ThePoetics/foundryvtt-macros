// A script to update/randomize character nicknames on the Party page
// Values of the objects to be modified are intentionally hard-coded

// Yes these could all be a single array but I was going for simplicity
var noel = { 
	base: "Bolortuyaa", 
	names: ["Wise Horse", "Galloping Owl", "Absent Foal"], 
	textbox: "Z5MOgXFrZJcV8fn2"};
var kate = { 
	base: "Shadi Fallah", 
	names: ["Pretender", "Eastern Shadow", "Covered Merchant"], 
	textbox: "DjZ6w8SdsnFM0Hij"};
var brand = { 
	base: "Brother Arryn", 
	names: ["Forlorn One", "Flooded Believer", "Twin-Ghost"], 
	textbox: "0qNUUFQOBCZFj567"};
var mia = { 
	base: "Sibel", 
	names: ["Poisoned Outcast", "Dragon-Touched", "Betrayer"], 
	textbox: "Lvvj0YlUkyfKSMYT"};
var emi = { 
	base: "(Unknown)", 
	names: ["(Unknown 1)", "(Unknown 2)", "(Unknown 3)"], 
	textbox: "QyZTgUVnraR3GBpz"};

// Open dialogue for selection (all, individuals, reset)
let d = new Dialog({
	title: "Prophecized Name",
	content:`
		<form>
			<div class="form-group">
				<label>Choose Character</label>
				<select name="char" id="char">
					<option value="all">(Randomize All)</option>
					<option value="noel">Noel</option>
					<option value="kate">Kate</option>
					<option value="brand">Brandon</option>
					<option value="mia">Mia</option>
					<option value="emi">Emily</option>
					<option value="reset">(Reset to Default)</option>
				</select>
			</div>
		</form>`,
	buttons: {
		one: {
			icon: '<i class="fas fa-check"></i>',
				label: "OK",
				callback: html => {
					
					// Grab player name and option
					let character = html.find("[name=char]")[0].value;
					
					// Reset all back to default
					// If the names were in one array it could be looped through
					// Sounds like a problem for the future
					if (character == "reset") {
						var updates = [
							{ _id: noel.textbox, text: noel.base },
							{ _id: kate.textbox, text: kate.base },
							{ _id: brand.textbox, text: brand.base },
							{ _id: mia.textbox, text: mia.base },
							{ _id: emi.textbox, text: emi.base }
						];
					} 
					
					// Randomize all names
					else if (character == "all") {
						var updates = [
							{ _id: noel.textbox, text: noel.names[`${Math.floor(Math.random()*4)}`] },
							{ _id: kate.textbox, text: kate.names[`${Math.floor(Math.random()*4)}`] },
							{ _id: brand.textbox, text: brand.names[`${Math.floor(Math.random()*4)}`] },
							{ _id: mia.textbox, text: mia.names[`${Math.floor(Math.random()*4)}`] },
							{ _id: emi.textbox, text: emi.names[`${Math.floor(Math.random()*4)}`] }
						];
					}
					
					// Randomize individual name
					// This is the same code repeated 5 times, once per player
					else if (character == "noel") {
						var id = noel.textbox;
						var new_name = noel.names[`${Math.floor(Math.random()*4)}`];
						var updates = [{_id:id, text:new_name}];
					}
					else if (character == "kate") {
						var id = kate.textbox;
						var new_name = noel.names[`${Math.floor(Math.random()*4)}`];
						var updates = [{_id:id, text:new_name}];
					}
					else if (character == "brand") {
						var id = brand.textbox;
						var new_name = noel.names[`${Math.floor(Math.random()*4)}`];
						var updates = [{_id:id, text:new_name}];
					}
					else if (character == "mia") {
						var id = mia.textbox;
						var new_name = noel.names[`${Math.floor(Math.random()*4)}`];
						var updates = [{_id:id, text:new_name}];
					}
					else if (character == "emi") {
						var id = emi.textbox;
						var new_name = noel.names[`${Math.floor(Math.random()*4)}`];
						var updates = [{_id:id, text:new_name}];
					}
					
					// Finally update the drawing object(s)
					canvas.scene.updateEmbeddedDocuments("Drawing",updates);
				}
			},
			
		// Alternatively, the user hits Cancel
		two: {
			icon: '<i class="fas fa-times"></i>',
			label: "Cancel",
			callback: html => console.log("Name update canceled")
		}
	},
	close: html => console.log()
});

d.render(true);
