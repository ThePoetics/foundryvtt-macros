// A snippet to grab a random player and whisper that name to you
var characters = ["Callie","Alian","Dilia","Zelphia","Torrin"];  // Change!
var rand = Math.random()*characters.length;
rand = Math.floor(rand);
var outcome = characters[rand];

ChatMessage.create({
     user: game.user._id,
     content: `<strong>Random Player:</strong> ${outcome}`,
     whisper: ChatMessage.getWhisperRecipients("Poetics")  // Change!
});
