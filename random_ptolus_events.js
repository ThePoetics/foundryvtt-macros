/** This script takes the huge list of events provided by the **/
/** Ptolus game world and automatically rolls them, adjusted **/
/** for the city district characters are currently in. **/
/** Source material taken from the Ptolus game setting, (c) Monte Cook **/
/** Written by Poetics, 2024-03 **/

/** Create initial dialog to select desired district **/
let d = new Dialog({
    title: "District Choice",
    content:`
      <form>
        <div class="form-group">
          <label>Choose District</label>
          <select name="dist" id="dist">
			<option value="docks">The Docks</option>
			<option value="guilds">Guildsman District</option>
			<option value="midtown">Midtown</option>
			<option value="necro">The Necropolis</option>
			<option value="nobles">Nobles' Quarter</option>
			<option value="nmarket">North Market</option>
			<option value="oldtown">Oldtown</option>
			<option value="riverg">Rivergate District</option>
			<option value="smarket">South Market</option>
			<option value="temple">Temple District</option>
			<option value="warrens">The Warrens</option>
		  </select>
        </div>
      </form>`,
    buttons: {
      one: {
        icon: '<i class="fas fa-check"></i>',
		label: "OK",
		callback: html => {
			
			/** Grab selected district and roll a d100 **/
			let district = html.find("[name=dist]")[0].value;
			let roll = Math.floor(Math.random() * 100)+1;
			console.log("District event dialog selection: " + district + " " + roll);

			/** Table of results **/
			/** I chose to filter by district since each district has long strings of common events **/
			/** The slash constitutes a deliminator between day and night events, to be handled later **/
			/** Using else ifs lets me be lazy with many result searches */
			/** The handy use of the awk command allowed me to compile these much more easily than by hand **/
			
			let events = '';
			if (district == "docks") {
				if (roll < 15) { events = `${Math.round(roll/2)+180}/304`; } /** 181 through 187 **/
				else if (roll < 17) { events = "44"; }
				else if (roll < 19) { events = "45"; }
				else if (roll < 21) { events = "311"; }
				else if (roll < 23) { events = "129"; }
				else if (roll < 25) { events = "199"; }
				else if (roll < 27) { events = "201"; }
				else if (roll < 29) { events = "295"; }
				else if (roll < 31) { events = "296"; }
				else if (roll == 31) { events = "181"; }
				else if (roll == 32) { events = "188"; }
				else if (roll == 33) { events = "189"; }
				else if (roll == 34) { events = "190"; }
				else if (roll == 35) { events = "191"; }
				else if (roll == 36) { events = "192"; }
				else if (roll == 37) { events = "193"; }
				else if (roll == 38) { events = "66"; }
				else if (roll == 39) { events = "69"; }
				else if (roll == 40) { events = "121"; }
				else if (roll == 41) { events = "126"; }
				else if (roll == 42) { events = "133"; }
				else if (roll == 43) { events = "37"; }
				else if (roll == 44) { events = "15"; }
				else if (roll == 45) { events = "16"; }
				else if (roll == 46) { events = "24"; }
				else if (roll == 47) { events = "36"; }
				else if (roll == 48) { events = "4"; }
				else if (roll == 49) { events = "294"; }
				else if (roll == 50) { events = "295"; }
				else if (roll == 51) { events = "296"; }
				else if (roll == 52) { events = "263"; }
				else if (roll == 53) { events = "268"; }
				else if (roll == 54) { events = "237"; }
				else if (roll == 55) { events = "13"; }
				else if (roll == 56) { events = "311"; }
				else if (roll == 57) { events = "44/305"; }
				else if (roll == 58) { events = "45/305"; }
				else if (roll == 59) { events = "45/305"; }
				else if (roll == 60) { events = "56/199"; }
				else if (roll == 61) { events = "58/200"; }
				else if (roll == 62) { events = "59/201"; }
				else if (roll == 63) { events = "60/202"; }
				else if (roll == 64) { events = "69/203"; }
				else if (roll == 65) { events = "72/211"; }
				else if (roll == 66) { events = "83/209"; }
				else if (roll == 67) { events = "84/210"; }
				else if (roll == 68) { events = "90/207"; }
				else if (roll == 69) { events = "91/208"; }
				else if (roll == 70) { events = "129"; }
				else if (roll == 71) { events = "135"; }
				else if (roll == 72) { events = "138"; }
				else if (roll == 73) { events = "138"; }
				else if (roll == 74) { events = "140"; }
				else if (roll == 75) { events = "142"; }
				else if (roll == 76) { events = "145"; }
				else if (roll == 77) { events = "147"; }
				else if (roll == 78) { events = "149/209"; }
				else if (roll == 79) { events = "163"; }
				else if (roll == 80) { events = "168"; }
				else if (roll == 81) { events = "171"; }
				else if (roll == 82) { events = "175"; }
				else if (roll == 83) { events = "181/210"; }
				else if (roll == 84) { events = "182/211"; }
				else if (roll == 85) { events = "184/212"; }
				else if (roll == 86) { events = "185/213"; }
				else if (roll == 87) { events = "186/214"; }
				else if (roll == 88) { events = "197/215"; }
				else if (roll == 89) { events = "200"; }
				else if (roll == 90) { events = "201"; }
				else if (roll == 91) { events = "202"; }
				else if (roll == 92) { events = "215"; }
				else if (roll == 93) { events = "217"; }
				else if (roll == 94) { events = "218"; }
				else if (roll == 95) { events = "219"; }
				else if (roll == 96) { events = "220"; }
				else if (roll == 97) { events = "239"; }
				else if (roll == 98) { events = "286"; }
				else { events = "293"; }
			} else if (district == "guilds") {
				if (roll < 3 ) { events = "194"; }
				else if (roll < 5 ) { events = "56"; }
				else if (roll < 7) { events = "57"; }
				else if (roll < 9) { events = "43/304"; }
				else if (roll < 11) { events = "44/304"; }
				else if (roll < 13) { events = "45/304"; }
				else if (roll < 15) { events = "46/304"; }
				else if (roll < 17) { events = "47/304"; }
				else if (roll < 19) { events = "48/304"; }
				else if (roll < 21) { events = "120"; }
				else if (roll < 23) { events = "134"; }
				else if (roll < 25) { events = "15"; }
				else if (roll < 27) { events = "42"; }
				else if (roll < 29) { events = "199"; }
				else if (roll < 31) { events = "201"; }
				else if (roll == 31) { events = "195"; }
				else if (roll == 32) { events = "196"; }
				else if (roll == 33) { events = "197"; }
				else if (roll == 34) { events = "198"; }
				else if (roll == 35) { events = "52/304"; }
				else if (roll == 36) { events = "53/304"; }
				else if (roll == 37) { events = "54/304"; }
				else if (roll == 38) { events = "58/304"; }
				else if (roll == 39) { events = "60/305"; }
				else if (roll == 40) { events = "61/305"; }
				else if (roll == 41) { events = "66/305"; }
				else if (roll == 42) { events = "67/308"; }
				else if (roll == 43) { events = "71/308"; }
				else if (roll == 44) { events = "75/308"; }
				else if (roll == 45) { events = "124"; }
				else if (roll == 46) { events = "126"; }
				else if (roll == 47) { events = "133"; }
				else if (roll == 48) { events = "137"; }
				else if (roll == 49) { events = "16"; }
				else if (roll == 50) { events = "34/308"; }
				else if (roll == 51) { events = "43/215"; }
				else if (roll == 52) { events = "44/216"; }
				else if (roll == 53) { events = "45/304"; }
				else if (roll == 54) { events = "46/304"; }
				else if (roll == 55) { events = "47/199"; }
				else if (roll == 56) { events = "48/200"; }
				else if (roll == 57) { events = "92/201"; }
				else if (roll == 58) { events = "93/202"; }
				else if (roll == 59) { events = "94/203"; }
				else if (roll == 60) { events = "96/211"; }
				else if (roll == 61) { events = "121/209"; }
				else if (roll == 62) { events = "124/210"; }
				else if (roll == 63) { events = "128/207"; }
				else if (roll == 64) { events = "137/208"; }
				else if (roll == 65) { events = "139/209"; }
				else if (roll == 66) { events = "140/210"; }
				else if (roll == 67) { events = "145/211"; }
				else if (roll == 68) { events = "148/212"; }
				else if (roll == 69) { events = "153/213"; }
				else if (roll == 70) { events = "156/214"; }
				else if (roll == 71) { events = "160"; }
				else if (roll == 72) { events = "161"; }
				else if (roll == 73) { events = "166"; }
				else if (roll == 74) { events = "167"; }
				else if (roll == 75) { events = "169"; }
				else if (roll == 76) { events = "170"; }
				else if (roll == 77) { events = "171"; }
				else if (roll == 78) { events = "172"; }
				else if (roll == 79) { events = "174"; }
				else if (roll == 80) { events = "177"; }
				else if (roll == 81) { events = "178"; }
				else if (roll == 82) { events = "180"; }
				else if (roll == 83) { events = "194"; }
				else if (roll == 84) { events = "196"; }
				else if (roll == 85) { events = "199"; }
				else if (roll == 86) { events = "200"; }
				else if (roll == 87) { events = "202"; }
				else if (roll == 88) { events = "220"; }
				else if (roll == 89) { events = "296"; }
				else if (roll == 90) { events = "297/217"; }
				else if (roll == 91) { events = "297/218"; }
				else if (roll == 92) { events = "297/219"; }
				else if (roll == 93) { events = "298/220"; }
				else if (roll == 94) { events = "298/221"; }
				else if (roll == 95) { events = "299/222"; }
				else if (roll == 96) { events = "299/304"; }
				else if (roll == 97) { events = "237/304"; }
				else if (roll == 98) { events = "239/308"; }
				else { events = "262/214"; }
			} else if (district == "midtown") {
				if (roll < 13) { events = `${Math.round(roll/2)+42}/304`; }
				else if (roll < 15) { events = "50/304"; }
				else if (roll < 17) { events = "51/304"; }
				else if (roll < 19) { events = "52/304"; }
				else if (roll < 21) { events = "53/304"; }
				else if (roll < 23) { events = "54/304"; }
				else if (roll < 25) { events = "55/304"; }
				else if (roll < 27) { events = "120/305"; }
				else if (roll < 29) { events = "126/308"; }
				else if (roll < 31) { events = "16/308"; }
				else if (roll == 31) { events = "226/199"; }
				else if (roll == 32) { events = "227/200"; }
				else if (roll == 33) { events = "228/202"; }
				else if (roll == 34) { events = "229/203"; }
				else if (roll == 35) { events = "230/203"; }
				else if (roll == 36) { events = "231/204"; }
				else if (roll == 37) { events = "232/209"; }
				else if (roll == 38) { events = "233/210"; }
				else if (roll == 39) { events = "234/207"; }
				else if (roll == 40) { events = "235/208"; }
				else if (roll == 41) { events = "58"; }
				else if (roll == 42) { events = "59/209"; }
				else if (roll == 43) { events = "61/210"; }
				else if (roll == 44) { events = "62/211"; }
				else if (roll == 45) { events = "64/212"; }
				else if (roll == 46) { events = "66"; }
				else if (roll == 47) { events = "68"; }
				else if (roll == 48) { events = "70/213"; }
				else if (roll == 49) { events = "73/214"; }
				else if (roll == 50) { events = "74/215"; }
				else if (roll == 51) { events = "77/216"; }
				else if (roll == 52) { events = "121"; }
				else if (roll == 53) { events = "125"; }
				else if (roll == 54) { events = "127"; }
				else if (roll == 55) { events = "133"; }
				else if (roll == 56) { events = "134"; }
				else if (roll == 57) { events = "137"; }
				else if (roll == 58) { events = "162"; }
				else if (roll == 59) { events = "17/121"; }
				else if (roll == 60) { events = "22/217"; }
				else if (roll == 61) { events = "23/218"; }
				else if (roll == 62) { events = "25/219"; }
				else if (roll == 63) { events = "26/220"; }
				else if (roll == 64) { events = "27/221"; }
				else if (roll == 65) { events = "31/222"; }
				else if (roll == 66) { events = "38/304"; }
				else if (roll == 67) { events = "39/304"; }
				else if (roll == 68) { events = "40/304"; }
				else if (roll == 69) { events = "41/308"; }
				else if (roll == 70) { events = "42/308"; }
				else if (roll == 71) { events = "94"; }
				else if (roll == 72) { events = "95"; }
				else if (roll == 73) { events = "96/308"; }
				else if (roll == 74) { events = "97/308"; }
				else if (roll == 75) { events = "98/304"; }
				else if (roll == 76) { events = "99"; }
				else if (roll == 77) { events = "100"; }
				else if (roll < 90) { events = `${roll+23}/304`;}
				else if (roll < 93) { events = `${roll+23}/305`; }
				else if (roll == 93) { events = "116/306"; }
				else if (roll == 94) { events = "117/307"; }
				else if (roll == 95) { events = "118"; }
				else if (roll == 96) { events = "119"; }
				else if (roll == 97) { events = "131/308"; }
				else if (roll == 98) { events = "132/309"; }
				else { events = "165"; }
			} else if (district == "necro") {
				if (roll < 3) { events = "240/316"; }
				else if (roll < 5) { events = "241/316"; }
				else if (roll < 7) { events = "242/304"; }
				else if (roll < 9) { events = "244/304"; }
				else if (roll < 11) { events = "245/246"; }
				else if (roll < 13) { events = "245/250"; }
				else if (roll < 15) { events = "247/254"; }
				else if (roll < 17) { events = "248/255"; }
				else if (roll < 19) { events = "251"; }
				else if (roll < 23) { events = "252"; }
				else if (roll < 25) { events = "257"; }
				else if (roll < 27) { events = "258"; }
				else if (roll < 31) { events = "304"; }
				else if (roll == 31) { events = "292"; }
				else if (roll == 32) { events = "242/257"; }
				else if (roll == 33) { events = "243/253"; }
				else if (roll == 34) { events = "245/313"; }
				else if (roll == 35) { events = "247/313"; }
				else if (roll == 36) { events = "248/314"; }
				else if (roll == 37) { events = "249/315"; }
				else if (roll < 40) { events = "251"; }
				else if (roll < 44) { events = "252"; }
				else if (roll == 43) { events = "66/313"; }
				else if (roll < 46) { events = "316"; }
				else if (roll == 46) { events = "233"; }
				else if (roll == 47) { events = "64/314"; }
				else if (roll == 48) { events = "42/315"; }
				else if (roll == 49) { events = "37/304"; }
				else if (roll < 73) { events = "304"; }
				else if (roll == 73) { events = "211"; }
				else if (roll == 74) { events = "209"; }
				else if (roll < 77) { events = "208"; }
				else if (roll == 77) { events = "209"; }
				else if (roll == 78) { events = "221"; }
				else if (roll < 81) { events = "223"; }
				else if (roll < 83) { events = "304/313"; }
				else if (roll == 83) { events = "304/314"; }
				else if (roll == 84) { events = "304/315"; }
				else if (roll < 87) { events = "304/316"; }
				else if (roll < 89) { events = "304/292"; }
				else if (roll < 92) { events = "304/250"; }
				else if (roll == 92) { events = "304/251"; }
				else if (roll == 93) { events = "304/254"; }
				else if (roll == 94) { events = "304/255"; }
				else if (roll == 95) { events = "304/256"; }
				else if (roll == 96) { events = "304/257"; }
				else if (roll == 97) { events = "307"; }
				else if (roll == 98) { events = "308"; }
				else { events = "312"; }
			} else if (district == "nobles") {
				if (roll < 3) { events = "1"; }
				else if (roll < 9) { events = `${Math.round(roll/2)}/304`; }
				else if (roll < 11) { events = "11"; }
				else if (roll < 13) { events = "49"; }
				else if (roll < 15) { events = "120"; }
				else if (roll < 17) { events = "121"; }
				else if (roll < 19) { events = "122"; }
				else if (roll < 21) { events = "127"; }
				else if (roll < 23) { events = "18/304"; }
				else if (roll < 25) { events = "86/304"; }
				else if (roll < 27) { events = "79/304"; }
				else if (roll < 29) { events = "90/304"; }
				else if (roll < 31) { events = "91/304"; }
				else if (roll == 31) { events = "5/304"; }
				else if (roll < 37) { events = `${roll-26}`; }
				else if (roll == 37) { events = "12/304"; }
				else if (roll == 38) { events = "13"; }
				else if (roll == 39) { events = "14"; }
				else if (roll == 40) { events = "69/304"; }
				else if (roll == 41) { events = "126"; }
				else if (roll == 42) { events = "85/304"; }
				else if (roll == 43) { events = "103"; }
				else if (roll == 44) { events = "32/304"; }
				else if (roll == 45) { events = "33/304"; }
				else if (roll == 46) { events = "61/304"; }
				else if (roll == 47) { events = "62/304"; }
				else if (roll == 48) { events = "67/304"; }
				else if (roll == 49) { events = "71/304"; }
				else if (roll == 50) { events = "89/304"; }
				else if (roll == 51) { events = "97/304"; }
				else if (roll == 52) { events = "97"; }
				else if (roll == 53) { events = "110/304"; }
				else if (roll == 54) { events = "117/304"; }
				else if (roll < 60) { events = `${roll+64}`; }
				else if (roll == 60) { events = "304/129"; }
				else if (roll == 61) { events = "145"; }
				else if (roll < 64) { events = "147"; }
				else if (roll == 64) { events = "148"; }
				else if (roll == 65) { events = "150"; }
				else if (roll == 66) { events = "151"; }
				else if (roll == 67) { events = "155"; }
				else if (roll == 68) { events = "167"; }
				else if (roll == 69) { events = "168"; }
				else if (roll < 73) { events = `${roll+31}`; }
				else if (roll == 73) { events = "202"; }
				else if (roll == 74) { events = "227/304"; }
				else if (roll == 75) { events = "234"; }
				else if (roll == 76) { events = "235"; }
				else if (roll == 77) { events = "259/304"; }
				else if (roll == 78) { events = "262/304"; }
				else if (roll == 79) { events = "266/121"; }
				else if (roll == 80) { events = "271/122"; }
				else if (roll == 81) { events = "276/123"; }
				else if (roll == 82) { events = "282/304"; }
				else if (roll == 83) { events = "284"; }
				else if (roll < 94) { events = "304"; }
				else if (roll == 94) { events = "2/304"; }
				else if (roll == 95) { events = "3"; }
				else if (roll == 96) { events = "4"; }
				else if (roll == 97) { events = "5/304"; }
				else if (roll == 98) { events = "304/6"; }
				else { events = "7/304"; }
			} else if (district == "nmarket") {
				if (roll < 3) { events = "237/304"; }
				else if (roll < 5) { events = "238"; }
				else if (roll < 7) { events = "239"; }
				else if (roll < 9) { events = "43/304"; }
				else if (roll < 19) { events = `${Math.round(roll/2)+39}/304`; }
				else if (roll < 21) { events = "120"; }
				else if (roll < 23) { events = "126"; }
				else if (roll < 25) { events = "303"; }
				else if (roll < 27) { events = "303"; }
				else if (roll < 29) { events = "16/199"; }
				else if (roll < 31) { events = "17/200"; }
				else if (roll == 31) { events = "236/304"; }
				else if (roll == 32) { events = "237"; }
				else if (roll == 33) { events = "238"; }
				else if (roll == 34) { events = "239"; }
				else if (roll == 35) { events = "52/201"; }
				else if (roll == 36) { events = "53/202"; }
				else if (roll == 37) { events = "54/203"; }
				else if (roll == 38) { events = "58/211"; }
				else if (roll == 39) { events = "127"; }
				else if (roll == 40) { events = "121"; }
				else if (roll == 41) { events = "122"; }
				else if (roll == 42) { events = "133"; }
				else if (roll == 43) { events = "134"; }
				else if (roll == 44) { events = "137"; }
				else if (roll == 45) { events = "164"; }
				else if (roll == 46) { events = "18/209"; }
				else if (roll == 47) { events = "19/210"; }
				else if (roll == 48) { events = "20/207"; }
				else if (roll == 49) { events = "21/208"; }
				else if (roll == 50) { events = "22/209"; }
				else if (roll == 51) { events = "23/210"; }
				else if (roll == 52) { events = "24/211"; }
				else if (roll == 53) { events = "25/212"; }
				else if (roll == 54) { events = "26/213"; }
				else if (roll == 55) { events = "27/214"; }
				else if (roll == 56) { events = "29/215"; }
				else if (roll == 57) { events = "30/304"; }
				else if (roll == 58) { events = "32/304"; }
				else if (roll == 59) { events = "33/304"; }
				else if (roll == 60) { events = "78/304"; }
				else if (roll == 61) { events = "81/304"; }
				else if (roll == 62) { events = "91"; }
				else if (roll == 63) { events = "93"; }
				else if (roll == 64) { events = "94"; }
				else if (roll == 65) { events = "97/308"; }
				else if (roll == 66) { events = "103/304"; }
				else if (roll == 67) { events = "105/304"; }
				else if (roll == 68) { events = "117/304"; }
				else if (roll == 69) { events = "303/120"; }
				else if (roll == 70) { events = "123"; }
				else if (roll == 71) { events = "124"; }
				else if (roll == 72) { events = "126"; }
				else if (roll == 73) { events = "133"; }
				else if (roll == 74) { events = "134"; }
				else if (roll == 75) { events = "138"; }
				else if (roll == 76) { events = "141"; }
				else if (roll == 77) { events = "142"; }
				else if (roll == 78) { events = "145"; }
				else if (roll == 79) { events = "153"; }
				else if (roll == 80) { events = "156"; }
				else if (roll == 81) { events = "165"; }
				else if (roll == 82) { events = "167"; }
				else if (roll == 83) { events = "168"; }
				else if (roll == 84) { events = "303/173"; }
				else if (roll == 85) { events = "303"; }
				else if (roll == 86) { events = "191/305"; }
				else if (roll == 87) { events = "192"; }
				else if (roll == 88) { events = "194/305"; }
				else if (roll == 89) { events = "222"; }
				else if (roll == 90) { events = "237/306"; }
				else if (roll == 91) { events = "238/307"; }
				else if (roll == 92) { events = "239/308"; }
				else if (roll == 93) { events = "258"; }
				else if (roll == 94) { events = "263/310"; }
				else if (roll == 95) { events = "296/313"; }
				else if (roll == 96) { events = "297/317"; }
				else if (roll == 97) { events = "300/171"; }
				else if (roll == 98) { events = "301/172"; }
				else { events = "302/177"; }
			} else if (district == "oldtown") {
				if (roll < 11) { events = `${Math.round(roll/2)+42}/304`; }
				else if (roll < 13) { events = "48/305"; }
				else if (roll < 15) { events = "64/307"; }
				else if (roll < 17) { events = "73/308"; }
				else if (roll < 19) { events = "74/308"; }
				else if (roll < 21) { events = "120"; }
				else if (roll < 23) { events = "127"; }
				else if (roll < 25) { events = "17/304"; }
				else if (roll < 27) { events = "19/304"; }
				else if (roll < 29) { events = "78/304"; }
				else if (roll < 31) { events = "80/121"; }
				else if (roll == 31) { events = "258"; }
				else if (roll == 32) { events = "259/304"; }
				else if (roll == 33) { events = "260/304"; }
				else if (roll == 34) { events = "261"; }
				else if (roll == 35) { events = "262/304"; }
				else if (roll == 36) { events = "263/304"; }
				else if (roll == 37) { events = "264"; }
				else if (roll == 38) { events = "265"; }
				else if (roll == 39) { events = "49/304"; }
				else if (roll == 40) { events = "58"; }
				else if (roll == 41) { events = "59/304"; }
				else if (roll == 42) { events = "61/304"; }
				else if (roll == 43) { events = "62/304"; }
				else if (roll == 44) { events = "65/66"; }
				else if (roll == 45) { events = "67/304"; }
				else if (roll == 46) { events = "72/304"; }
				else if (roll == 47) { events = "121"; }
				else if (roll == 48) { events = "124"; }
				else if (roll == 49) { events = "126"; }
				else if (roll == 50) { events = "79/304"; }
				else if (roll == 51) { events = "81/304"; }
				else if (roll == 52) { events = "86/310"; }
				else if (roll == 53) { events = "90"; }
				else if (roll == 54) { events = "91"; }
				else if (roll == 55) { events = "92/95"; }
				else if (roll == 56) { events = "93"; }
				else if (roll == 57) { events = "94"; }
				else if (roll == 58) { events = "95"; }
				else if (roll == 59) { events = "96/308"; }
				else if (roll == 60) { events = "97/308"; }
				else if (roll == 61) { events = "98/304"; }
				else if (roll < 67) { events = `${roll+38}`; }
				else if (roll == 67) { events = "106/199"; }
				else if (roll == 68) { events = "110/200"; }
				else if (roll == 69) { events = "112"; }
				else if (roll == 70) { events = "114"; }
				else if (roll < 75) { events = `${roll+49}`; }
				else if (roll == 75) { events = "125"; }
				else if (roll == 76) { events = "129"; }
				else if (roll == 77) { events = "133"; }
				else if (roll == 78) { events = "136/201"; }
				else if (roll == 79) { events = "148"; }
				else if (roll == 80) { events = "152"; }
				else if (roll == 81) { events = "159"; }
				else if (roll == 82) { events = "170"; }
				else if (roll == 83) { events = "175"; }
				else if (roll == 84) { events = "177"; }
				else if (roll == 85) { events = "179"; }
				else if (roll == 86) { events = "189"; }
				else if (roll == 87) { events = "192"; }
				else if (roll == 88) { events = "203"; }
				else if (roll == 89) { events = "220"; }
				else if (roll == 90) { events = "228/171"; }
				else if (roll == 91) { events = "259/172"; }
				else if (roll == 92) { events = "260/177"; }
				else if (roll == 93) { events = "261"; }
				else if (roll == 94) { events = "262/216"; }
				else if (roll == 95) { events = "263/219"; }
				else if (roll == 96) { events = "264"; }
				else if (roll == 97) { events = "265"; }
				else if (roll == 98) { events = "266/304"; }
				else { events = "297/307"; }
			} else if (district == "riverg") {
				if (roll < 15) { events = `${Math.round(roll/2)+42}/304`; }
				else if (roll < 17) { events = "50/305"; }
				else if (roll < 19) { events = "73/308"; }
				else if (roll < 21) { events = "74/121"; }
				else if (roll < 23) { events = "120"; }
				else if (roll < 25) { events = "127"; }
				else if (roll < 27) { events = "20/304"; }
				else if (roll < 29) { events = "21/307"; }
				else if (roll < 31) { events = "40/310"; }
				else if (roll == 31) { events = "266"; }
				else if (roll == 32) { events = "58"; }
				else if (roll == 33) { events = "64"; }
				else if (roll == 34) { events = "67/304"; }
				else if (roll == 35) { events = "69/304"; }
				else if (roll == 36) { events = "72/304"; }
				else if (roll == 37) { events = "75/304"; }
				else if (roll < 41) { events = `${roll+73}`; }
				else if (roll == 41) { events = "126"; }
				else if (roll == 42) { events = "133"; }
				else if (roll < 46) { events = `${roll-28}/304`; }
				else if (roll == 46) { events = "19/304"; }
				else if (roll == 47) { events = "27/304"; }
				else if (roll == 48) { events = "35/304"; }
				else if (roll == 49) { events = "38"; }
				else if (roll == 50) { events = "39/304"; }
				else if (roll == 51) { events = "41/304"; }
				else if (roll == 52) { events = "42/304"; }
				else if (roll == 53) { events = "82/304"; }
				else if (roll == 54) { events = "87/304"; }
				else if (roll == 55) { events = "89/304"; }
				else if (roll == 56) { events = "90/304"; }
				else if (roll == 57) { events = "92/304"; }
				else if (roll == 58) { events = "93"; }
				else if (roll == 59) { events = "97/304"; }
				else if (roll == 60) { events = "98/304"; }
				else if (roll == 61) { events = "110/306"; }
				else if (roll == 62) { events = "114"; }
				else if (roll == 63) { events = "119"; }
				else if (roll == 64) { events = "128"; }
				else if (roll == 65) { events = "129"; }
				else if (roll == 66) { events = "141/120"; }
				else if (roll == 67) { events = "154"; }
				else if (roll == 68) { events = "156"; }
				else if (roll == 69) { events = "165/307"; }
				else if (roll == 70) { events = "170"; }
				else if (roll < 78) { events = `${roll-32}/304`; }
				else if (roll == 78) { events = "58"; }
				else if (roll == 79) { events = "59/199"; }
				else if (roll == 80) { events = "61/200"; }
				else if (roll == 81) { events = "62/202"; }
				else if (roll == 82) { events = "91/203"; }
				else if (roll == 83) { events = "111/112"; }
				else if (roll == 84) { events = "113"; }
				else if (roll == 85) { events = "115"; }
				else if (roll < 90) { events = `${roll+34}`; }
				else if (roll == 90) { events = "135"; }
				else if (roll == 91) { events = "136"; }
				else if (roll == 92) { events = "138"; }
				else if (roll == 93) { events = "145"; }
				else if (roll == 94) { events = "149/304"; }
				else if (roll == 95) { events = "150/304"; }
				else if (roll == 96) { events = "151"; }
				else if (roll == 97) { events = "166"; }
				else if (roll == 98) { events = "259/304"; }
				else { events = "271/171"; }
			} else if (district == "smarket") {
				if (roll < 3) { events = "236/304"; }
				else if (roll < 5) { events = "239/304"; }
				else if (roll < 7) { events = "56/304"; }
				else if (roll < 9) { events = "57/304"; }
				else if (roll < 21) { events = `${Math.round(roll/2)+38}/304`; }
				else if (roll < 23) { events = "71/304"; }
				else if (roll < 25) { events = "120"; }
				else if (roll < 29) { events = "303"; }
				else if (roll < 31) { events = "15/304"; }
				else if (roll == 31) { events = "237/304"; }
				else if (roll == 32) { events = "238/305"; }
				else if (roll == 33) { events = "52/305"; }
				else if (roll == 34) { events = "53/305"; }
				else if (roll == 35) { events = "54/171"; }
				else if (roll == 36) { events = "58/172"; }
				else if (roll == 37) { events = "59/307"; }
				else if (roll == 38) { events = "62/308"; }
				else if (roll == 39) { events = "76/119"; }
				else if (roll < 43) { events = `${roll+81}`; }
				else if (roll == 43) { events = "126"; }
				else if (roll == 44) { events = "134"; }
				else if (roll == 45) { events = "137"; }
				else if (roll == 46) { events = "16/138"; }
				else if (roll == 47) { events = "22/139"; }
				else if (roll == 48) { events = "31/140"; }
				else if (roll == 49) { events = "32/145"; }
				else if (roll == 50) { events = "33/161"; }
				else if (roll == 51) { events = "56/163"; }
				else if (roll == 52) { events = "57/166"; }
				else if (roll == 53) { events = "59/169"; }
				else if (roll == 54) { events = "60/304"; }
				else if (roll == 55) { events = "67/304"; }
				else if (roll < 60) { events = `${roll+15}/304`; }
				else if (roll == 60) { events = "82/304"; }
				else if (roll == 61) { events = "83/199"; }
				else if (roll == 62) { events = "88/200"; }
				else if (roll == 63) { events = "90/201"; }
				else if (roll == 64) { events = "91/203"; }
				else if (roll < 69) { events = `${roll+27}`; }
				else if (roll == 69) { events = "133/308"; }
				else if (roll == 70) { events = "97/308"; }
				else if (roll == 71) { events = "98/304"; }
				else if (roll == 72) { events = "109"; }
				else if (roll == 73) { events = "127/304"; }
				else if (roll == 74) { events = "113"; }
				else if (roll == 75) { events = "115"; }
				else if (roll == 76) { events = "116/308"; }
				else if (roll == 77) { events = "121"; }
				else if (roll == 78) { events = "122"; }
				else if (roll == 79) { events = "126"; }
				else if (roll == 80) { events = "130/310"; }
				else if (roll == 81) { events = "134"; }
				else if (roll == 82) { events = "136"; }
				else if (roll == 83) { events = "138"; }
				else if (roll == 84) { events = "143/310"; }
				else if (roll == 85) { events = "144/211"; }
				else if (roll == 86) { events = "146/209"; }
				else if (roll == 87) { events = "149/206"; }
				else if (roll == 88) { events = "151/207"; }
				else if (roll == 89) { events = "152/208"; }
				else if (roll == 90) { events = "154"; }
				else if (roll == 91) { events = "157"; }
				else if (roll == 92) { events = "158"; }
				else if (roll == 93) { events = "173"; }
				else if (roll == 94) { events = "297/209"; }
				else if (roll == 95) { events = "297/210"; }
				else if (roll == 96) { events = "298/211"; }
				else if (roll == 97) { events = "298/212"; }
				else if (roll == 98) { events = "299/213"; }
				else { events = "311/310"; }
			} else if (district == "temple") {
				if (roll < 3) { events = "267/304"; }
				else if (roll < 5) { events = "268/304"; }
				else if (roll < 13) { events = `${Math.round(roll/2)+267}/304`; }
				else if (roll < 15) { events = "278/304"; }
				else if (roll < 17) { events = "44/304"; }
				else if (roll < 19) { events = "45/304"; }
				else if (roll < 21) { events = "120"; }
				else if (roll < 23) { events = "126"; }
				else if (roll < 25) { events = "133"; }
				else if (roll < 27) { events = "134"; }
				else if (roll < 29) { events = "18/304"; }
				else if (roll < 31) { events = "28"; }
				else if (roll == 31) { events = "271/310"; }
				else if (roll == 32) { events = "274"; }
				else if (roll < 36) { events = `${roll+272}/307`; }
				else if (roll == 36) { events = "279"; }
				else if (roll == 37) { events = "269"; }
				else if (roll < 41) { events = `${roll+242}`; }
				else if (roll == 41) { events = "283/304"; }
				else if (roll == 42) { events = "284"; }
				else if (roll == 43) { events = "285"; }
				else if (roll < 47) { events = `${roll+77}`; }
				else if (roll == 47) { events = "268"; }
				else if (roll < 53) { events = `${roll+222}`; }
				else if (roll < 55) { events = "278/304"; }
				else if (roll == 55) { events = "15/304"; }
				else if (roll == 56) { events = "16/304"; }
				else if (roll == 57) { events = "24/304"; }
				else if (roll == 58) { events = "28/304"; }
				else if (roll == 59) { events = "42"; }
				else if (roll == 60) { events = "44/199"; }
				else if (roll == 61) { events = "45/200"; }
				else if (roll == 62) { events = "52/201"; }
				else if (roll == 63) { events = "58"; }
				else if (roll == 64) { events = "59/304"; }
				else if (roll == 65) { events = "60/304"; }
				else if (roll == 66) { events = "61/253"; }
				else if (roll == 67) { events = "65/251"; }
				else if (roll == 68) { events = "67/252"; }
				else if (roll == 69) { events = "68/254"; }
				else if (roll == 70) { events = "69/203"; }
				else if (roll == 71) { events = "70/211"; }
				else if (roll == 72) { events = "72/210"; }
				else if (roll == 73) { events = "73/211"; }
				else if (roll == 74) { events = "90"; }
				else if (roll == 75) { events = "91"; }
				else if (roll == 76) { events = "94"; }
				else if (roll < 79) { events = "303/304"; }
				else if (roll == 79) { events = "245/313"; }
				else if (roll == 80) { events = "247/317"; }
				else if (roll == 81) { events = "258"; }
				else if (roll == 82) { events = "303/209"; }
				else if (roll == 83) { events = "126"; }
				else if (roll == 84) { events = "156"; }
				else if (roll == 85) { events = "157"; }
				else if (roll == 86) { events = "150"; }
				else if (roll == 87) { events = "239/212"; }
				else if (roll == 88) { events = "262/213"; }
				else if (roll < 91) { events = "271"; }
				else if (roll == 91) { events = "272"; }
				else if (roll == 92) { events = "283/304"; }
				else if (roll == 93) { events = "297/304"; }
				else if (roll == 94) { events = "297/304"; }
				else if (roll == 95) { events = "129/304"; }
				else if (roll == 96) { events = "130/304"; }
				else if (roll == 97) { events = "141/304"; }
				else if (roll == 98) { events = "148"; }
				else { events = "304"; }
			} else if (district == "warrens") {
				if (roll < 3) { events = "44/199"; }
				else if (roll < 5) { events = "45/200"; }
				else if (roll < 7) { events = "50/201"; }
				else if (roll < 9) { events = "66/202"; }
				else if (roll < 11) { events = "133"; }
				else if (roll < 13) { events = "134"; }
				else if (roll < 15) { events = "136"; }
				else if (roll < 17) { events = "199"; }
				else if (roll < 19) { events = "210"; }
				else if (roll < 25) { events = `${Math.round(roll/2)+213}`; }
				else if (roll < 31) { events = `${Math.round(roll/2)+159}`; }
				else if (roll < 38) { events = `${roll+255}`; }
				else if (roll == 38) { events = "58"; }
				else if (roll < 49) { events = `${roll+161}`; }
				else if (roll < 61) { events = `${roll+152}`; }
				else if (roll == 61) { events = "160"; }
				else if (roll == 62) { events = "161"; }
				else if (roll == 63) { events = "163"; }
				else if (roll == 64) { events = "169"; }
				else if (roll == 65) { events = "171"; }
				else if (roll == 66) { events = "175"; }
				else if (roll == 67) { events = "177"; }
				else if (roll == 68) { events = "178"; }
				else if (roll == 69) { events = "180"; }
				else if (roll == 70) { events = "42"; }
				else if (roll == 71) { events = "311/310"; }
				else if (roll == 72) { events = "311"; }
				else if (roll == 73) { events = "311/317"; }
				else if (roll == 74) { events = "312"; }
				else if (roll == 75) { events = "137/312"; }
				else if (roll == 76) { events = "139/313"; }
				else if (roll == 77) { events = "303/308"; }
				else if (roll < 81) { events = "303/304"; }
				else if (roll == 81) { events = "138"; }
				else if (roll == 82) { events = "142"; }
				else if (roll == 83) { events = "145"; }
				else if (roll < 86) { events = "156"; }
				else if (roll == 86) { events = "199/292"; }
				else if (roll == 87) { events = "44/199"; }
				else if (roll == 88) { events = "45/253"; }
				else if (roll == 89) { events = "50/254"; }
				else if (roll == 90) { events = "58/256"; }
				else if (roll == 91) { events = "93"; }
				else if (roll == 92) { events = "94"; }
				else if (roll == 93) { events = "99"; }
				else if (roll == 94) { events = "100"; }
				else if (roll == 95) { events = "113"; }
				else if (roll == 96) { events = "115"; }
				else if (roll == 97) { events = "119"; }
				else if (roll == 98) { events = "171"; }
				else { events = "172"; }
			}

			/** At this point "events" has one or two event indices stored **/

			/** The massive table of events, 317 in total (1-317 [0 is blank]) **/
			const events_array = ["",
				`${Math.floor(Math.random()*2)+1} upper-class people (aristocrat* stats) walking hand in hand.`,
				`${Math.floor(Math.random()*8)+1} upper-class children on their way to or from school.`,
				`${Math.floor(Math.random()*6)+1} servants (commoner stats) on their way to or from work.`,
				`${Math.floor(Math.random()*2)+1} servants (commoner stats) running errands for their master or mistress.`,
				`${Math.floor(Math.random()*2)+1} well-dressed upper-class children playing with a cat.`,
				`${Math.floor(Math.random()*3)+1} drunken upper-class people (aristocrat* or noble stats) acting obnoxious and arrogant, sure that no one can or will touch them.`,
				"Female human (aristocrat* stats) with her dog on a leash.",
				"Male elf (aristocrat* stats) cleaning splashed mud from his expensive coat.",
				`${Math.floor(Math.random()*4)+5} upper-class children causing trouble.`,
				"Two young upper-class people (aristocrat* or noble stats) fighting a duel over some minor slight, each with an attendant (commoner stats).",
				`${Math.floor(Math.random()*3)+1} upper-class people (aristocrat* stats) and one commoner driver (commoner stats) in a speeding carriage, splashing mud everywhere`,
				"Wealthy human woman (aristocrat* stats) wearing a great deal of jewelry and throwing around a lot of money.",
				"A flying ship sailing overhead.",
				"An aeroship flying overhead.",
				"Male vendor (commoner stats) selling hot frosted rolls from a cart (2 cp).",
				"Male vendor (commoner stats) selling meat pies from a cart (9 cp).",
				"Female vendor (commoner stats) selling fresh fruit from a cart (2 cp).",
				"Human vendor (commoner stats) selling hot tea and coffee from a cart (3 cp). They are particularly attractive.",
				"Female vendor (commoner stats) selling jellied candies from a cart (1 cp).",
				"Human vendor (commoner stats) selling cooked meat on sticks from a cart (8 cp). They are particularly friendly and funny.",
				"Male vendor (commoner stats) selling beer from a keg in a cart (4 cp).",
				"Female vendor (commoner stats) selling painted mugs from a cart (3 cp).",
				"Male vendor (commoner stats) selling cheap jewelry out of a bag (1–30 sp).",
				"Male dwarf vendor (commoner stats) selling exotic creature skulls from a box (1–10 gp).",
				"Male elf vendor (commoner stats) selling glass bottles of all sizes and colors from a cart (3 sp).",
				"Female elf vendor (commoner stats) selling hats from a cart (1–10 gp).",
				"Male halfling vendor (commoner stats) selling dice, Dragonscales, and other games from a box (1–20 sp).",
				"Female halfling vendor (commoner stats) selling folded paper sculptures from a box (5 cp).",
				"Male vendor (commoner stats) selling illegal drugs out of a bag (1–100 sp).",
				"Male vendor (commoner stats) has spilled apples all over the ground and frantically tries to gather them up.",
				"Man (commoner stats) handing out flyers for a new restaurant.",
				"Male elf (commoner stats) handing out flyers for a new shop.",
				"Woman (commoner stats) handing out flyers announcing a coming fair, sale, or other event.",
				"Person (commoner stats) giving away kittens for free.",
				"Person (commoner stats) giving away puppies for free.",
				"Man (commoner stats) whittling a flute.",
				"Woman (commoner stats) crying because her husband left her.",
				"Commoner child looking for a lost dog.",
				`${Math.floor(Math.random()*4)+5} commoner children playing marbles or jacks on the ground`,
				`${Math.floor(Math.random()*4)+5} commoner children playing a chasing or hiding game`,
				`${Math.floor(Math.random()*2)+1} commoner children and a dog, all chasing around a ball`,
				`${Math.floor(Math.random()*4)+5} commoner teenagers causing trouble (stealing and running, knocking things over, throwing rocks)`,
				`${Math.floor(Math.random()*8)+1} commoner children on their way to or from school`,
				`${Math.floor(Math.random()*6)+1} people (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*2)+1} people (commoner stats) running errands`,
				`${Math.floor(Math.random()*2)+1} elves (commoner stats) running errands`,
				`${Math.floor(Math.random()*2)+1} dwarves (commoner stats) running errands`,
				`${Math.floor(Math.random()*2)+1} halflings (commoner stats) running errands`,
				`${Math.floor(Math.random()*2)+1} people (commoner stats) doing yard work`,
				`${Math.floor(Math.random()*2)+1} people (commoner stats) sweeping or hanging up washing outside`,
				`${Math.floor(Math.random()*2)+1} halflings (commoner stats) sweeping or hanging up washing outside`,
				`${Math.floor(Math.random()*6)+1} elves (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*4)+1} gnomes (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*4)+1} dwarves (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*2)+1} halflings (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*8)+1} people (commoner stats) on their way to or from work with heavy tools`,
				`${Math.floor(Math.random()*4)+1} dwarves (commoner stats) on their way to or from work with heavy tools`,
				"A woman (commoner stats) staring out a window.",
				"Man (commoner stats) handing out free broadsheets.",
				"Man handing out free broadsheets (actually a criminal selling drugs; use cultist, cult fanatic, or scout stats).",
				"Woman (commoner stats) selling broadsheets (1 cp).",
				"Crier (commoner stats) from the Bellringers’ Guild shouting out news.",
				"Man (commoner stats) missing one shoe, chasing a dog with a shoe in its mouth.",
				"Man (commoner stats) leaning against a wall, eating an apple, talking to whoever comes by.",
				"Blind man (commoner stats) in need of help getting to a specific location.",
				"Man (commoner stats) who has just been robbed.",
				`${Math.floor(Math.random()*3)+1} masons (expert* stats) repairing a damaged wall`,
				`${Math.floor(Math.random()*3)+1} dwarf masons (expert* stats) repairing a damaged wall`,
				"Carpenter (expert* stats) repairing a damaged wall, shutter, or door.",
				"Halfling carpenter (expert* stats) repairing a damaged wall, shutter, or door.",
				`${Math.floor(Math.random()*3)+1} carpenters (expert* stats) and ${Math.floor(Math.random()*6)+1} + 4 workers (commoner stats) working on a new building project`,
				"Roofer (expert* stats) repairing a damaged roof.",
				"Glazier (expert* stats) repairing a damaged window.",
				"Painter (expert* stats) painting a fence, wall, or windowsill.",
				"Painter painting a fence, wall, or windowsill (actually a hired killer observing a target; use assassin, scout, or spy stats).",
				`Architect (artisan* stats) and ${Math.floor(Math.random()*3)+1} assistants (commoner stats) surveying and planning a new building.`,
				"Dwarf architect (artisan* stats) surveying and planning a new building.",
				"Street entertainer (expert* or performer* stats) performs a juggling act moderately well.",
				"Halfling street entertainer (artisan*, expert*, or performer* stats) performs a juggling act particularly well.",
				"Street performer (artisan*, expert*, or performer* stats) performs a comedy act particularly well with antics and songs.",
				"Street performer (artisan*, expert*, or performer* stats) sings well, accompanied by ${Math.floor(Math.random()*3)+1} musicians (expert* stats).",
				"Street entertainer performs a mime act well, but is actually a pickpocket (expert* or scout stats).",
				"Street performer (commoner or expert* stats) plays the lute terribly, with passersby laughing and mocking.",
				"Gnome street performer (expert* or performer* stats) plays the fiddle well, collecting a great deal of money.",
				"Street entertainer (expert* stats) performs a puppetry act particularly well, with foolish antics from a puppet of a famous personality.",
				"Street magician (expert* or performer* stats, knows prestidigitation) performs using actual magic.",
				"Gnome street magician (expert* or performer* stats, knows prestidigitation) performs using actual magic.",
				`${Math.floor(Math.random()*4)+2} comedians (expert* stats) and their leader (performer* stats) insult and make jokes about passersby`,
				"Male painter (expert* stats) painting a street scene on a canvas on an easel.",
				"Male messenger (commoner stats) carrying a particularly heavy bundle.",
				"Male messenger (commoner stats) running with a message, jostling those he runs past.",
				"Woman (commoner stats) carrying a water bucket to or from the nearest well.",
				"Man (commoner stats) carrying a waste water bucket to or from the nearest sewer grate.",
				"Rat catcher (expert* stats) and their ratter dog, with a fresh haul of rat carcasses.",
				`${Math.floor(Math.random()*3)+1} rat hunters (commoner or expert* stats) coming up from a sewer grate`,
				`${Math.floor(Math.random()*3)+1} sewer workers (commoner stats) going down into the sewer`,
				`${Math.floor(Math.random()*2)+1} street sweepers (commoner stats) cleaning up the roadway`,
				`${Math.floor(Math.random()*2)+1} workers (commoner stats) repairing a street lamp pole`,
				"Warrior (bandit, disciple*, guard, or thug stats) walking with a pronounced limp, having just lost a fight.",
				"Lost foreigner (commoner or expert* stats) looking for help finding an inn",
				"Wizard (archmage, arcanist*, or mage stats) accompanied by a shield guardian on their way to a business meeting.",
				"Wizard (archmage, arcanist*, or mage stats) accompanied by a dwarf bodyguard (guard, defender*, or veteran stats) on their way to an appointment.",
				"Elf wizard (arcanist* or mage stats) looking to buy magic items.",
				"Male ranger (scout, spy, or tribal warrior stats) with a bear companion, having difficulty finding a specific address.",
				"Male litorian warrior (defender*, scout, or veteran stats) looking to sell a number of extra weapons.",
				"Female litorian ranger (scout, spy, or tribal warrior stats) with a panther companion, eating a turkey leg.",
				"Female druid (acolyte, druid, or ecclesiastic* stats) with a giant owl accompanying her out of town.",
				"Male monk (disciple* or experienced monk* stats), walking barefoot and alone, looking as if in a trance.",
				"A large male warrior (bandit, disciple*, guard, or thug stats) pushing his way through a crowd, not caring whom he angers (he’s looking for a fight).",
				"Male centaur (commoner stats) pulling a cart.",
				"Nearby building is on fire, and no one else has noticed.",
				"Nearby building is on fire, and the Fire Brigade is fighting the fire.",
				"Nearby building has very recently burned down or suffered from a major fire.",
				`${Math.floor(Math.random()*2)+1} spooked horses charging down the street, uncontrolled`,
				`${Math.floor(Math.random()*6)+5} people (commoner stats) outside a building accuse someone inside of wrongdoing and demand that they come out`,
				"Two laborers (commoner stats) pushing a cart overloaded with crates and barrels, which begins to tip over.",
				"A woman (commoner stats) looks for a valuable brooch that she dropped somewhere in the area.",
				"An Uraqi man (bandit, disciple*, guard, or thug stats) who does not speak Common needs help finding an inn.",
				"Two people (commoner stats) stand, kissing passionately.",
				`${Math.floor(Math.random()*8)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}) on patrol`,
				`${Math.floor(Math.random()*8)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}) on their way to or from a call`,
				`${Math.floor(Math.random()*8)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}) and one constable (@PDF[Ptolus|page=142]{p.142}), on patrol`,
				`${Math.floor(Math.random()*8)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}) and one constable (@PDF[Ptolus|page=142]{p.142}), on their way to or from a call`,
				`${Math.floor(Math.random()*6)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}) chase a thief (expert*, scout, or spy stats)`,
				"A City Watch guard (@PDF[Ptolus|page=142]{p.142}) tacking up a wanted poster or a new edict.",
				`${Math.floor(Math.random()*4)+2} Sisters of Silence (@PDF[Ptolus|page=128]{p.128}) on their way to or from an arrest`,
				`A tax collector making the rounds with ${Math.floor(Math.random()*6)+1} City Watch guards (@PDF[Ptolus|page=142]{p.142}).`,
				`${Math.floor(Math.random()*4)+1} laborers (commoner stats) throwing rocks at a bottle on a fence`,
				`${Math.floor(Math.random()*2)+1} loose (but not necessarily wild) dogs`,
				`${Math.floor(Math.random()*3)+1} laborers (commoner stats), a mule, and an overturned cart, with bags of flour scattered across the street`,
				`${Math.floor(Math.random()*3)+1} litorian laborers (commoner stats) sitting along the street, sharpening axes`,
				"A litorian warrior (bandit, guard, or thug stats) combing their mane.",
				`${Math.floor(Math.random()*4)+1} beggars (commoner stats) working`,
				`${Math.floor(Math.random()*4)+1} beggars (commoner stats) working (and spying for the Beggar King)`,
				"Two young men (commoner stats) wrestling.",
				"Two people (commoner stats) having a loud argument (maybe in a nearby building).",
				"A peddler (commoner or expert* stats) pushes a cart filled with pots and pans that makes a great deal of noise.",
				`${Math.floor(Math.random()*3)+1} prostitutes (commoner stats), looking for clients`,
				"A drunken warrior (bandit, defender*, guard, thug, or veteran stats), just looking for someplace to sleep it off.",
				"Two bouncers (guard or thug stats) toss out a drunken troublemaker from a pub, restaurant, or club.",
				"Male half-elf traveling merchant (expert* stats) carrying a large case of brushes.",
				"Male Harrow elf (artisan* or guard stats, knows a few wizard spells) watching passersby contemptuously.",
				"Female half-orc warrior (guard, defender*, or veteran stats) and male gnome bard (performer* stats) playing Dragonscales.",
				"A male paladin (guard or noble stats, knows a few paladin spells) apologizes profusely for accidentally knocking down a female worker (commoner stats).",
				`${Math.floor(Math.random()*2)+1} skulks, likely unseen unless they want to be visible (or unless the PCs can see invisibility and are observant)`,
				"Female sorcerer flying overhead, using a spell.",
				"A dragon flying high overhead.",
				`${Math.floor(Math.random()*4)+1} Shuul agents (@PDF[Ptolus|page=127]{p.127}) walking down the street, ignoring all around them`,
				`${Math.floor(Math.random()*2)+1} recruiters for the Order of Iron Might (guard or veteran stats), looking for prospective members`,
				`${Math.floor(Math.random()*2)+1} Fate Weavers (expert* stats) offering to read the threads of people passing by`,
				"Urthon Aedar walking down the street, causing quite a stir.",
				`${Math.floor(Math.random()*3)+1} Viridian Lords standing on a street corner, looking uncomfortable in the city`,
				`${Math.floor(Math.random()*3)+1} cp lying on the ground`,
				`${Math.floor(Math.random()*3)+1} sp lying on the ground`,
				`${Math.floor(Math.random()*3)+1} gp lying on the ground`,
				"A huge water-filled pothole in the middle of the street, tripping up passersby (DC 10 Acrobatics check to avoid).",
				"A new wanted poster for a murderer (100 gp reward).",
				"A posted notice looking for mercenaries to guard a traveling noble.",
				"A posted notice looking for adventurers to explore a ruined manor in Oldtown.",
				`${Math.floor(Math.random()*4)+2} teenagers (commoner stats) pelt passersby with eggs`,
				"Female human (commoner stats) who has just been robbed.",
				"Male elf (commoner stats) who has just been robbed.",
				`${Math.floor(Math.random()*6)+3} drunken warriors (bandit, guard, or thug stats), being loud and obnoxious`,
				"Male beggar (commoner or expert* stats) with a suspiciously large amount of money, on a spending spree.",
				"Pickpocket (scout or spy stats, with Sleight of Hand +5) picking pockets.",
				"Male human con artist (scout or spy stats) enticing people to play dice with him.",
				"Pickpocket (scout or spy stats) carefully looking for a mark.",
				"Thief (scout, spy, or thug stats) who has just stolen something from a shop or picked a pocket.",
				`${Math.floor(Math.random()*4)+5} laborers (commoner stats) and ${Math.floor(Math.random()*4)+1} + 2 warriors (guard stats) engage in a free-for-all drunken brawl`,
				"A thief (scout or spy stats) and ${Math.floor(Math.random()*4)+2} children, working as a pickpocket gang (the children provide a diversion).",
				"A swarm of rats.",
				"A dog, hungry and desperate.",
				"A laborer (commoner stats), severely injured and robbed.",
				`${Math.floor(Math.random()*3)+1} fishermen or laborers (commoner stats), diseased, working as beggars (they are afflicted with a random common disease)`,
				"Male half-orc barbarian (berserker stats, or bandit or thug stats with the Reckless ability of a berserker) belligerently addressing anyone he sees.",
				"Female half-elf wizard (acolyte or cult fanatic stats, with wizard spells) causing havoc with an unseen servant.",
				`${Math.floor(Math.random()*3)+1} ratmen, sneaking around in the shadows or the gutters`,
				`${Math.floor(Math.random()*3)+1} goblins, sneaking around in the shadows or the gutters, or on the rooftops of buildings`,
				"An owlbear that is crudely able to speak, claiming to have been a human transformed by an offended wizard.",
				"A dead animal lying in the road.",
				`${Math.floor(Math.random()*8)+1} dockworkers (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*6)+1} laborers (commoner stats) with a wagon full of import or export goods`,
				`${Math.floor(Math.random()*6)+1} sailors (expert* stats) on leave (50 percent chance they are drunk)`,
				`${Math.floor(Math.random()*6)+1} sailors (expert* stats) on their way to board a ship`,
				`${Math.floor(Math.random()*3)+1} ship’s officers (scout or spy stats, with the Leadership ability of a knight) on leave`,
				`${Math.floor(Math.random()*3)+1} ship’s officers (scout or spy stats, with the Leadership ability of a knight) on their way to board a ship`,
				`${Math.floor(Math.random()*4)+2} 1 herders (commoner or expert* stats) and ${Math.floor(Math.random()*4)+3} + 3 cows, goats, or sheep going to or from a ship`,
				`${Math.floor(Math.random()*4)+1} upper-class people (aristocrat* or noble stats) and ${Math.floor(Math.random()*4)+2} servants (commoner stats) who have just arrived in town`,
				`A family of ${Math.floor(Math.random()*4)+2} people (commoner stats) who have just arrived in town.`,
				`${Math.floor(Math.random()*4)+1} upper-class people (aristocrat* or noble stats) and ${Math.floor(Math.random()*4)+2} servants (commoner stats) preparing to leave town`,
				`A family of ${Math.floor(Math.random()*4)+2} people (commoner stats) preparing to leave town.`,
				"An exotically dressed traveler (artisan* or expert* stats) who is lost.",
				`A group of ${Math.floor(Math.random()*3)+3} adventurers (such as an arcanist*, performer*, priest, and spy, or an assassin, defender*, ecclesiastic*, and mage; any compatible alignments) on their way to or from a ship.`,
				`${Math.floor(Math.random()*8)+1} commoner children on their way to or from work`,
				`${Math.floor(Math.random()*4)+3} adventurers (such as an arcanist*, performer*, priest, and spy; any compatible alignments) pull a manticore in chains down the street toward the Brotherhood of Redemption`,
				`Two groups of ${Math.floor(Math.random()*4)+3} guilders (expert* stats) and ${Math.floor(Math.random()*3)+1} warriors (guard or thug stats) fighting in a labor dispute.`,
				`${Math.floor(Math.random()*3)+2} guilders (expert* stats) arguing over the price for labor`,
				"Male human (commoner stats) raving about creatures that can control his mind and make him do terrible things.",
				`${Math.floor(Math.random()*3)+1} sneaky thieves (scout stats) and burly thieves (thug stats) in a gang, looking for trouble`,
				`${Math.floor(Math.random()*4)+5} warriors (bandit or thug stats) working as slavers, looking for victims to kidnap`,
				`A forced conscription unit of ${Math.floor(Math.random()*4)+1} + 4 warriors (guard or thug stats) looking for victims to force into service on a ship moored at the Docks.`,
				"A prostitute (expert* stats), soliciting customers.",
				"A beggar (commoner stats), sleeping in an alley.",
				"A commoner child, homeless and orphaned, wandering aimlessly.",
				"A dog, injured and left for dead.",
				`${Math.floor(Math.random()*4)+1} commoner children, on the roof of a building, spitting on any who pass by`,
				"A gambler (expert*, scout, or spy stats) approaching those who look interested regarding an illegal gambling den nearby.",
				`${Math.floor(Math.random()*6)+1} hungry wild dogs (may be rabid)`,
				`${Math.floor(Math.random()*6)+5} hungry giant rats (may be rabid)`,
				`${Math.floor(Math.random()*3)+1} sneaky thieves (scout stats) and ${Math.floor(Math.random()*6)+1} burly thieves (thug stats) in a gang, mugging a shopkeeper (expert* stats)`,
				`${Math.floor(Math.random()*6)+1} ratmen, waiting in ambush`,
				`${Math.floor(Math.random()*10)+1} goblins, hiding in an alley, planning a raid`,
				`${Math.floor(Math.random()*4)+1} Ornu-Nom orcs, lying low, trying not to attract attention`,
				`${Math.floor(Math.random()*4)+1} Ornu-Nom orcs, confident and tough, looking for trouble`,
				"Male ogre, trying to mind his own business and stay out of trouble, hoping not to attract attention.",
				"Male ogre, confident and tough, not caring who sees him.",
				`${Math.floor(Math.random()*3)+1} lizardfolk beggars`,
				`${Math.floor(Math.random()*4)+1} lizardfolk thieves (scout stats), waiting in ambush`,
				`${Math.floor(Math.random()*3)+1} lizardfolk escaped slaves, hiding`,
				`${Math.floor(Math.random()*3)+1} lizardfolk warriors (guard or thug stats), trying to mind their own business`,
				"Female Harrow elf (arcanist* or mage stats), wearing a mask, ready to attack anyone who questions her presence.",
				`${Math.floor(Math.random()*2)+1} Vai assassins (assassin, scout, or spy stats), clinging to the shadows as they tail a target`,
				"Dagger lying on the ground, covered in blood.",
				"A great deal of broken glass lying all over the street.",
				"A large bloodstain covering the cobblestones of the road.",
				"Elf commoner child looking for a lost cat.",
				`${Math.floor(Math.random()*4)+1} elf children playing with a cat`,
				`${Math.floor(Math.random()*2)+1} elf commoner children on their way to or from school`,
				`${Math.floor(Math.random()*2)+1} centaurs (commoner stats) on their way to or from work`,
				`${Math.floor(Math.random()*2)+1} drunken mages (acolyte or arcanist*, with sorcerer or wizard spells), casting spells wantonly`,
				"Female centaur warrior (guard or veteran stats) galloping quickly through the street.",
				"An elf warrior (guard or spy stats) and a dwarf warrior (guard or priest stats) brawling over a perceived insult.",
				"A group of ${Math.floor(Math.random()*3)+1} + 2 adventurers (such as an arcanist*, performer*, priest, and spy; any compatible alignments) on their way to a mission.",
				`${Math.floor(Math.random()*3)+1} adventurers (such as an arcanist*, performer*, and priest, or an assassin, defender*, and ecclesiastic*; any compatible alignments) riding on a flying carpet`,
				"Male elf warrior (guard, spy, or veteran stats) riding a hippogriff flying overhead.",
				"Male dwarf warrior (guard or veteran stats) demanding his money back from a merchant who he claims sold him shoddy merchandise.",
				`${Math.floor(Math.random()*4)+2} herders (commoner or expert* stats) and ${Math.floor(Math.random()*4)+3} + 3 cows, goats, or sheep`,
				`${Math.floor(Math.random()*2)+1} farmers (commoner stats) and a wagon of produce`,
				"Two laborers (commoner stats) carrying a large keg between them.",
				`${Math.floor(Math.random()*4)+1} clerics (acolyte or ecclesiastic* stats) tending to a gravesite`,
				`${Math.floor(Math.random()*2)+1} paladins (guard stats with a few paladin spells) tending to a gravesite`,
				`${Math.floor(Math.random()*3)+1} gravediggers (commoner stats)`,
				`${Math.floor(Math.random()*6)+2} commoner children causing mischief amid the gravestones`,
				`${Math.floor(Math.random()*6)+1} people (commoner or expert* stats) on their way to or from a gravesite or tomb`,
				`${Math.floor(Math.random()*6)+1} people (commoner or expert* stats) on their way to or from a funeral service`,
				`Female necromancer (cult fanatic, ecclesiastic*, or priest stats) with ${Math.floor(Math.random()*6)+2} animated skeleton guards.`,
				`Funeral or funeral procession: a cleric (ecclesiastic* or priest stats) with ${Math.floor(Math.random()*3)+1} – 1 other clerics (acolyte stats) and ${Math.floor(Math.random()*6)+4} mourners (commoner stats).`,
				`${Math.floor(Math.random()*6)+1} Deathguilders (artisan* or expert* stats)`,
				`${Math.floor(Math.random()*3)+1} laborers (commoner stats) and guards (guard stats) gathering gravebloom (@PDF[Ptolus|page=518]{p.518})`,
				`${Math.floor(Math.random()*3)+1} demons (random type), wandering and looking for trouble`,
				"An ominous raven, staring intently.",
				"An unnerving, inexplicable chill.",
				`${Math.floor(Math.random()*3)+1} ghouls, sneaking around in the shadows or the gutters`,
				"A vampire spawn waits in ambush for a victim.",
				"A vampire spawn carries a message to its master.",
				"A warrior vampire waits in ambush for a victim.",
				`${Math.floor(Math.random()*2)+1} tieflings (scout, spy, or thug stats), looking to murder a victim and take their money`,
				`${Math.floor(Math.random()*4)+1} Keepers of the Veil (a mix of ecclesiastic*, knight, and thug stats), in a hurry`,
				`${Math.floor(Math.random()*2)+1} scribes, accountants, or clerks (expert* stats) on their way to or from work`,
				"A scribe (expert* stats) inexplicably writing down everything they overhear on the street.",
				`${Math.floor(Math.random()*6)+10} Commissar’s Men, marching`,
				"Imperial official (expert* stats), on their way to or from work.",
				"Imperial inspector (expert* stats) at work, filling out forms and observing something out in the open.",
				`${Math.floor(Math.random()*4)+1} Knights of the Pale (knight stats with a few paladin spells, or holy champion* stats) in a hurry`,
				`${Math.floor(Math.random()*4)+1} Knights of the Pale (knight stats with a few paladin spells, or holy champion* stats) on horseback`,
				"A hot air balloon floating overhead.",
				`${Math.floor(Math.random()*8)+1} commoner children on their way to or from religious school`,
				"Street preacher (acolyte, cultist, or expert* stats) haranguing passersby obnoxiously.",
				`${Math.floor(Math.random()*4)+3} adventurers (such as an arcanist*, performer*, priest, and spy, or an assassin, defender*, ecclesiastic*, and mage; any compatible alignments) carrying a wounded comrade to be healed`,
				`${Math.floor(Math.random()*4)+2} Sisters of Silence on their way to or from the Priory of Introspection`,
				`${Math.floor(Math.random()*4)+1} clerics (acolyte, cult fanatic, or priest stats) on their way to or from a temple`,
				`${Math.floor(Math.random()*4)+1} monks (disciple* stats) on their way to or from a temple`,
				`${Math.floor(Math.random()*4)+1} paladins (knight stats with a few paladin spells) on their way to or from a temple`,
				`${Math.floor(Math.random()*6)+1} self-flagellants (acolyte or commoner stats) flagellating themselves in public`,
				`${Math.floor(Math.random()*6)+1} monks (disciple* stats) chanting in public`,
				`A choir of ${Math.floor(Math.random()*6)+5} people (commoner stats) singing hymns in public.`,
				"Female cleric (acolyte, cult fanatic, or priest stats) preaching on the street.",
				`${Math.floor(Math.random()*6)+1} people (commoner stats) on their way to or from a religious service`,
				"Male human laborer (commoner stats), severely injured, hoping for healing.",
				"Male elf (commoner stats), severely injured, hoping for healing.",
				`A group of ${Math.floor(Math.random()*3)+3} adventurers (such as an arcanist*, performer*, priest, and spy; any compatible alignments) on their way to get healed.`,
				"Male cleric (ecclesiastic*, high priest*, or priest stats) with a retinue of attendants (acolyte stats), on the way to or from a temple.",
				"Two clerics (acolyte, cult fanatic, or priest stats) of opposing faiths arguing.",
				`${Math.floor(Math.random()*4)+2} Knights of the Dawn (knight stats with a few paladin spells, or holy champion* stats), looking elated and triumphant`,
				`${Math.floor(Math.random()*4)+1} Knights of the Dawn (knight stats with a few paladin spells, or holy champion* stats), looking beaten and dour`,
				`Two gangs of ${Math.floor(Math.random()*3)+1} thieves (expert* or scout stats) and enforcers (guard or thug stats), fighting.`,
				`${Math.floor(Math.random()*3)+1} giant cockroaches (giant fire beetle stats), scuttling along from one hidey hole to another`,
				`${Math.floor(Math.random()*3)+1} giant wolf spiders (Small size), scuttling along from one hidey hole to another`,
				"Male dark elf thief (scout or spy stats), skulking in the shadows, looking to waylay a victim.",
				"Male dark elf sorcerer (arcanist* stats), skulking in the shadows, looking to waylay a victim.",
				"An ochre jelly or gray ooze.",
				`${Math.floor(Math.random()*6)+1} ghouls, waiting in ambush`,
				`${Math.floor(Math.random()*2)+1} sahuagin`,
				`${Math.floor(Math.random()*4)+1} foreign sailors (expert* stats) who can’t speak Common, wandering about`,
				`${Math.floor(Math.random()*4)+1} laborers (commoner stats) carrying heavy crates`,
				"Fisherman (commoner stats) with a net full of fish.",
				`${Math.floor(Math.random()*4)+1} laborers or merchants (commoner or expert* stats) carrying armfuls of goods (leather, cloth, wood, etc.)`,
				`${Math.floor(Math.random()*2)+1} crafters (artisan* or expert* stats) sitting outside their workshop, working`,
				`${Math.floor(Math.random()*2)+1} crafters (artisan* or expert* stats) sitting outside their workshop, relaxing and taking a break`,
				"Male vendor (commoner stats) selling hats out of a bag.",
				"Female vendor (commoner stats) selling shoes from a cart.",
				"Male vendor (commoner stats) selling burlap sacks slung over his back.",
				"A crowd so thick it is difficult to get through quickly.",
				"Everything is quiet and still.",
				"A person (commoner stats) sleeping on the ground.",
				"A man (commoner stats) throws a shoe at a noisy cat.",
				"The sound of distant music, barely heard, fills the otherwise empty street or area.",
				"The sound of a baby crying fills the otherwise empty street or area.",
				"A sleepwalking man (commoner stats) stumbles down the street.",
				"Raccoons dig through a pile of trash.",
				"Seagulls fight over garbage in the street.",
				"A freshly dead corpse lies on the ground.",
				`${Math.floor(Math.random()*4)+2} shadows flit out of the darkness`,
				`${Math.floor(Math.random()*6)+2} zombies wander aimlessly`,
				`${Math.floor(Math.random()*3)+2} Forsaken cultists (guard or thug stats) and a priest (cult fanatic or priest stats) perform a ritual`,
				`${Math.floor(Math.random()*4)+1} Forsaken cultists (guard or thug stats) prowl about the gravestones`,
				`${Math.floor(Math.random()*4)+1} cultists (cultist, cult fanatic, guard, or thug stats) looking to kidnap someone for a sacrifice`
			];
			
			/** Define output variable **/
			let output = '';
			
			/** Check to see if there is a slash in events **/
			/** If so, add multiple events (one day, one night) **/
			if (events.indexOf("/") > -1) {
				let output_array = events.split("/");
				output = `<strong>(${district} day):</strong> ${events_array[output_array[0]]} || <strong>(${district} night):</strong> ${events_array[output_array[1]]}`;
			} else {
				output = `<strong>(${district} event):</strong> ${events_array[events]}`;
			}

			/** Format and send the response as a private message to me (Poetics) **/
			ChatMessage.create({
				user: game.user._id,
				content: output,
				whisper: ChatMessage.getWhisperRecipients("Poetics")
			});

        }
      },
      
	  /** Alternatively, the user can hit Cancel **/
	  two: {
        icon: '<i class="fas fa-times"></i>',
		label: "Cancel",
        callback: html => console.log("District event dialog canceled")
        }
    },
    close: html => console.log()
});
  
d.render(true);
