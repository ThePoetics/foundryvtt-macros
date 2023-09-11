// Creates a contact with the name and picture of a token's actor

const newcontact = {
	"name":canvas.tokens.controlled[0].actor.name,
	"type":"contact",
	"img":canvas.tokens.controlled[0].actor.img,
	"system.description.value":canvas.tokens.controlled[0].actor.system.description.value
};
Item.create(newcontact);
