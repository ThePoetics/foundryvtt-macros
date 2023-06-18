// This script pulls 7 "generic" news headlines from an appropriately-named table,
// then three more from a specific table which has headlines including a placeholder
// "COMPANY" where corporation names (from an assicated table) can be drawn.
//
// End result is a list of 10 headlines, in random order, suitable for inclusion in 
// a Shadowrun game for atmopheric flavor. I created my own tables and will not be 
// distributing them, owing to CGL's restrictive license on sharing in-universe content.

const g_news = game.tables.getName("General News Headlines");
const g_draws = await g_news.drawMany(7, {displayChat: false});

const c_name = game.tables.getName("Corporation Names");
const c_name_draws = await c_name.drawMany(3, {displayChat: false});

const c_news = game.tables.getName("Corporate News Headlines");
const c_draws = await c_news.drawMany(3, {displayChat: false});

var output = new Array();

output.push( "<br />○ " + c_draws.results[0].text.replace(/COMPANY/, c_name_draws.results[0].text) );
output.push( "<br />○ " + c_draws.results[1].text.replace(/COMPANY/, c_name_draws.results[1].text) );
output.push( "<br />○ " + c_draws.results[2].text.replace(/COMPANY/, c_name_draws.results[2].text) );
g_draws.results.forEach( r => output.push( "<br />○ " + r.text ));

output.shuffleArray


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

ChatMessage.create({
	user: game.user._id,
	content: output,
        whisper: ChatMessage.getWhisperRecipients("USERNAME")
});
