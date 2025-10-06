// A script to let one of my players update their own prototype token
// when donning a new disguise. Cobbled together from my own code and 
// that provided by the #macro-polo channel on the FoundryVTT discord
//
// Yes this would be easier with a single array handling the variables 
// but I'm lazy and generally unfamiliar with JavaScript, so here's
// my solution to solve this one-off problem.
//
// It also updates a small on-screen text-box to help other players 
// remember which persona they're portraying
//
// Note that Foundry v12 and v13 has updated the dialog generation 
// code significantly, which would mean even more updates/cleanups 
// are possible (and recommended)

const characterName = await fromUuid("Actor.kl53U1deEPgPebOQ");


// Open dialogue for selection
let d = new Dialog({
	title: "Costume Change!",
	content:`
		<form>
			<div class="form-group">
				<label>Choose Character</label>
				<select name="char" id="char">
					<option value="shadi">Shadi (Base)</option>
					<option value="eman">Eman (Nadrak)</option>
					<option value="wina">Wina (Tolnedran)</option>
				</select>
			</div>
		</form>`,
	buttons: {
		one: {
			icon: '<i class="fas fa-check"></i>',
				label: "OK",
				callback: async (html) => {
					
					// Grab player name and option
					let character = html.find("[name=char]")[0].value;
					
					// Shadi Fallah, Thull Rogue
					if (character == "shadi") {
						// Prototype token picture and name
						await characterName.update({
							"prototypeToken.texture.src": "worlds/pawns-of-prophecy/Images/tokenizer/shadi_base.Token.webp",
							"prototypeToken.name": "Shadi Fallah"
						});
						
						// Update party page name plate
						const tile = fromUuidSync("Scene.jUY8h336DLyANV5M.Drawing.Q8qxd5wpf3gmmTjh");
						await tile.update({text:"(Shadi Fallah)"});
					} 
					
					// Eman Farzan, Nadrak Free Trader
					else if (character == "eman") {
						// Prototype token picture and name
						await characterName.update({
							"prototypeToken.texture.src": "worlds/pawns-of-prophecy/Images/tokenizer/eman_farzan.Token.webp",
							"prototypeToken.name": "Eman Farzan"
						});
						
						// Update party page name plate
						const tile = fromUuidSync("Scene.jUY8h336DLyANV5M.Drawing.Q8qxd5wpf3gmmTjh");
						await tile.update({text:"(Eman Farzan)"});
					}

					// Wina Mercer, Tolnedran Merchant
					else if (character == "wina") {
						// Prototype token picture and name
						await characterName.update({
							"prototypeToken.texture.src": "worlds/pawns-of-prophecy/Images/tokenizer/wina_mercer.Token.webp",
							"prototypeToken.name": "Wina Mercer"
						});
						
						// Update party page name plate
						const tile = fromUuidSync("Scene.jUY8h336DLyANV5M.Drawing.Q8qxd5wpf3gmmTjh");
						await tile.update({text:"(Wina Mercer)"});
					}
					
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
