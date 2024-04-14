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
			<option value="general">(General Event)</option>
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
			<option value="weekly">(Weekly Event)</option>
		  </select>
        </div>
      </form>`,
    buttons: {
      one: {
        icon: '<i class="fas fa-check"></i>',
		label: "OK",
		callback: html => {
			
			/** Define selected district and d100 result **/
			let district = html.find("[name=dist]")[0].value;
			let roll = Math.floor(Math.random() * 100)+1;
			console.log("District event dialog selection: " + district + " " + roll);

			/** Table of results **/
			/** I chose to filter  by district first since each district has long strings of common events **/
			/** The slash constitutes a deliminator between day and night events, to be handled later **/
			/** Using else ifs lets me be lazy with many result searches */
			/** The handy use of the awk command allowed me to compile these much more easily than by hand **/
			
			let events = '';
			if (district == "general") {

				events = Math.floor(Math.random()*334);
				/** Generic events created/compiled by Poetics **/
				const generic_array = [
					'A PC sees a beautiful woman sunbathing on a nearby rooftop. He’s spotted and waved over.',
					'A back alley hides a sinkhole that chutes the party on a slalom slide down into part of the dungeon.',
					'A badly-dressed man is walking the streets, muttering to himself. He looks lost. ',
					'A band of bards are singing grossly flattering songs about the Commissar. They were not hired by him.',
					'A boisterous game of dice captivates a dingy alley as two men make sport of their fortunes, inviting passersby to try their luck on the roll of a dice.',
					'A bounty hunter tracks his target.',
					'A chatty bard walks alongside the party. Time for an exposition dump!',
					'A cheery pie vendor claims her treats are baked with fruit from the enchanted orchards of far-off lands. She offers free samples, and patrons find themselves momentarily lost in euphoric taste sensations.',
					'A child asks the PCs to help him find his pet dog. But this simple task leads them somewhere where they don’t belong.',
					'A circus is set up just outside of town. A barker cajoles you to “come inside and see what wonders it holds.”',
					'A cleric accuses Kirstol Dallimothan of being a silver dragon in disguise.',
					'A cloaked figure appears, enigmatic in demeanor, selling an ostensibly majestic sword with an equally imposing curse—beware the blade that bites its master.',
					'A collection of dolls, each intricately fashioned to resemble various city officials, can be found at a quiet stall. The dollmaker assures you that they’re just toys and definitely not for casting curses.',
					'A couple is arguing loudly about their relationship. Another couple is watching them and laughing at them.',
					'A couple of men are selling magic items. The items are rare and powerful, but not ethical to use.',
					'A desperate man—whiskered and wild-eyed—warns of vampiric ratmen haunting the shadows below.',
					'A devout cleric approaches with religious fervor, eager to invite the party to a celebration at the local thieves’ guild—a rare occasion where mischief and reverence collide in harmonious camaraderie.',
					'A disheveled man with a tankard in hand sells similar sewer maps beside a pub. He swears by their accuracy with a drunken solemnity that makes it difficult to judge whether he’s a genius or a fool.',
					'A drunk man is trying to walk home. He’s not in anyone’s way.',
					'A famous adventurer was hurriedly approaching the PCs, yet he dropped dead mid-stride. Why was he coming toward your table?',
					'A festival celebrating the harvest season takes place, with food and drink stands set up throughout the city.',
					'A fireball erupts from a home, blowing up a water barrel, generating a cloud of mist. It appears the PCs are in the middle of a domestic dispute between partners, one a wizard and one a sorcerer.',
					'A florist’s stall overflows with an array of exotic blooms, releasing intoxicating scents into the air. The florist claims that each flower has a unique property, from inducing sleep to acting as a love charm.',
					'A furrier displays pelts of unusual creatures, some shimmering with unnatural hues. He claims they’re from beasts of far-off lands, though skeptics whisper about magical tampering.',
					'A gathering of children becomes unruly as they pelt a statue with stones. Reprimanded by an adult, the game quickly ends as they scatter into the nooks of the city.',
					'A sailor is throwing goblin statues into the bay. But why?',
					'A group is lamenting their experience at a new tavern, warning others to avoid it due to poor service and watered-down drinks.',
					'A group of 2d6+5 men are arguing about whether or not they should start a war.',
					'A group of 3d4 merchants are arguing about prices in front of their shop.',
					'A group of adventurers seeks help from the town\'s sage to decipher an ancient map.',
					'A group of adventurers sets out on a quest to retrieve a stolen magical artifact from a nearby dungeon.',
					'A group of adventurers sets out to explore an abandoned fortress rumored to hold hidden treasure.',
					'A group of adventurers sets out to explore an abandoned temple rumored to hold ancient treasures.',
					'A group of adventurers sets out to explore an unexplored cave system near the city.',
					'A group of armored guards are escorting a prisoner through the streets, the prisoner is rumored to be a notorious criminal.',
					'A group of artists is seeking models for their life drawing sessions.',
					'A group of children are fighting over a ball. A small dog is involved.',
					'A group of children are playing a game. They are trying to catch a rat.',
					'A group of children are playing in the street. One child has a wooden sword and is pretending to be a knight. The other children are pretending to be his prisoners.',
					'A group of children are playing tag in the street. They’re not in anyone’s way.',
					'A group of children are playing with a ball. One of them will throw it over the wall of a nearby estate, and the others will run after it.',
					'A group of children are playing with a ball. The ball is enchanted, and when an adult kicks it, it comes back to you like a boomerang. If you throw it in the air, it will return to you after a few minutes. If you throw it into the air and then run away, it will chase after you like a dog!',
					'A group of children are playing with a ball. The ball is enchanted, and when an adult kicks it, it explodes into a cloud of lightning!',
					'A group of children are playing with a ball. They are kicking it back and forth to each other, laughing and having a good time.',
					'A group of children are playing with dolls. They are pretending that one doll is a princess and the others are her servants. If the players approach, they will ask them to join in the game.',
					'A group of drunkards are arguing over the price of a barrel of wine.',
					'A group of dwarves are in the middle of setting up a festival in the city. They are offering free food and entertainment for the residents of the city.',
					'A group of halfling women debate the change in weather, insisting instead that the days are growing warmer, much to the confusion of onlookers.',
					'A group of healers hosts a workshop on natural remedies and herbalism.',
					'A group of homeless people are huddled around a fire. One of the homeless people has a large beard. The homeless people are drinking wine.',
					'A group of kobolds found a home in the sewers beneath an alchemist’s shop. The chemicals have done strange things to them…',
					'A group of men and women are gathered around a circular board. They are playing a game of chance. The game appears to be rigged – the same man keeps winning.',
					'A group of men are all wearing the same set of armor. They are trying to get a nearby shopkeeper to buy it from them. They say that it is enchanted. They want 20 gold pieces each for them.',
					'A group of men are gathered around a small fire in the street, telling stories about their adventures. They’re not bothering anyone.',
					'A group of men are gathered around an outdoor bazaar, selling copper coins that they claim are worth silver coins.',
					'A group of men are grumbling about the ticket prices for a new play. They’re haggling among themselves, trying to determine a fair price before they approach the box office with an offer.',
					'A group of men are talking about a nobleman\'s daughter. They say that she is beautiful, but very cold and arrogant.',
					'A group of monks are walking through the streets, offering blessings and healing to those in need. If players are in need of healing, the monks will gladly offer their services in exchange for a small donation.',
					'A group of musicians performs a concert featuring music from various cultures and time periods.',
					'A group of musicians performs a concert featuring music inspired by epic tales and heroic deeds',
					'A group of musicians performs a concert featuring music inspired by myth and legend.',
					'A group of people are arguing over whether or not the nearby dungeons are dangerous to explore.',
					'A group of people are arguing over whether or not they should go into the nearby dungeon.',
					'A group of people are begging for help. One of their group has been cursed. They want someone to cure the curse. The curse is just a minor annoyance.',
					'A group of people are selling ‘magical’ potions and scrolls. They are actually selling potions that induce laughter and cause paralysis.',
					'A group of scholars hosts a debate on a current topic or issue facing the city.',
					'A group of scholars hosts a debate on the merits and drawbacks of various forms of magic.',
					'A group of scholars hosts a debate on the merits of different schools of magic.',
					'A group of scholars hosts a debate on the merits of different schools of philosophy.',
					'A group of scholars hosts a lecture series on various topics, including history, science, and philosophy.',
					'A group of scholars seeks volunteers to help translate ancient texts from a distant land.',
					'A group of soldiers is standing guard outside a building on the corner of a street in the city. The soldiers are protecting something inside that no one else knows about yet.',
					'A group of street urchins are playing a game involving a live toad and a stick. If players try to stop them, the urchins will challenge them to a game and offer a small reward if they win.',
					'A group of street urchins pickpocket one of the players.',
					'A group of teenagers dare each other to enter an abandoned mansion said to be haunted. Do you join in on the dare?',
					'A group of town guards mistake the players for wanted criminals and chase them through the streets, leading to a high-speed chase and mob-like chaos.',
					'A group of traveling performers sets up a circus-like performance in the city square.',
					'A group of women are gossiping about a local married couple who have been fighting a lot lately.',
					'A group of women are gossiping about someone in the city. They say that she is a witch who lures people into her house and then eats them. They say that she has been seen chasing children into her house.',
					'A group of young kids are playing hide-and-seek in the park nearby. They keep counting to ten over and over again while they hide from each other. They are having a good time laughing and giggling while they play their game.',
					'A pair of young lovers is sitting on a wall, talking quietly.',
					'A group of young men are standing in front of their house. One of the young men has a wooden staff. The other young men have wooden maces.',
					'A group of young, rude nobles are racing horses through the streets and nearly ride down the characters.',
					'A group of youths sing a harmonic, yet scathing ballad about a local thieves’ guild, not realizing the potential wrath they might invoke from the unsavory characters they mock.',
					'A hunched old man at a street crossing insists on telling fortunes for a copper piece. His predictions are vague but unnervingly accurate.',
					'A legendary paladin renowned for victory in battle and training many acolytes has gone missing, seemingly having turned their back on the order. Can they be found again in a time of need?',
					'A little girl is watching you from the alley. The next time you glance over, you see a wolf run away.',
					'A little kid falls in front of a charging stagecoach.',
					'A loaded wagon travels past the party along Main Street, but it has no apparent means of propulsion.',
					'A local baker announces the launch of a new pastry creation at their shop.',
					'A local bard is seeking musicians and performers to join their traveling troupe.',
					'A local brewery introduces a new seasonal beer, hosting tastings and contests.',
					'A local hero named Gjallerabru is famed for standing alone against an invading horde. But it appears that he somehow cheated death, because death’s emissary has come a-lookin’.',
					'A local innkeeper hosts a charity event to raise funds for an orphanage in need.',
					'A local tavern hosts a game night featuring popular tabletop games like chess and backgammon.',
					'A local tavern is holding a talent contest for musicians and performers.',
					'A local tavern is hosting a "taste-off" competition between different breweries.',
					'A loud thundering noise. A group of 2d4 goblins on horseback are riding down the street.',
					'A man and a woman are arguing about what to name their new baby. They are standing in the middle of the street, holding a baby wrapped in blankets.',
					'A man and a woman are walking down the street, arguing about what to name their new baby.',
					'A man and a woman are walking down the street, arguing about what to name their new baby. They stumble and fall, dropping the baby onto the ground. The baby starts crying, but is quickly silenced by its parents.',
					'A man attempts to sell you a ring for 10 gp. If you buy it, it will be a ring of polymorph finger that has been cleaned and polished.',
					'A man has been spotted selling a strange elixir that he claims can cure any disease. He keeps a low profile and does not want to draw attention to himself.',
					'A man in robes bumps into you and says ‘Oh, pardon me’. He will then walk away quickly laughing. If you look down, you will see a pouch full of gold has fallen from his robes.',
					'A man in tattered robes stands on a street corner, handing out pamphlets about an imminent doomsday. He speaks with such conviction that a few citizens stop to listen, entranced by his apocalyptic tales.',
					'A man is offering cheap food and water to people. The food and water are bad quality and will likely cause harm to anyone who eats or drinks them. A sign says ‘Fresh food! Cheap prices!’',
					'A furtive man is offering magic items for sale at an incredibly cheap price. The items are slightly less powerful than normal items of their type and will break after one use.',
					'A man is offering maps to a nearby dungeon at a cheap price. The maps are slightly inaccurate and will lead players into a trap.',
					'A man is selling an unusual animal. It’s an unusually large rat that can actually talk.',
					'A man is selling apples and pears from a cart that’s covered in blood. The apples and pears are bruised and rotten.',
					'A man is selling apples. He is the best apple seller in the city. Apples cost 1 copper per apple.',
					'A man is selling damaged goods at a discount price. The items are actually quite good, but he is trying to cover up the fact that he has been stealing from merchants. He is hoping that the players will not realize this.',
					'A man is selling expensive maps to a dungeon that does not actually exist.',
					'A man is selling maps of the area for one silver piece. They\'re actually maps of another area, with landmarks changed to make them look like the area where you\'re playing.',
					'A man is selling maps of the city. The maps appear to be detailed and up-to-date, showing even the most recent changes in the streets and landmarks.',
					'A man is selling maps that show the location of a nearby dungeon.',
					'A man is selling maps to a dungeon that does not actually exist.',
					'A man is selling maps. They are accurate maps of the city, but they are very old. They cost 1 copper per map. He sells about one map a week and doesn’t look like he’s ever going to get rich from it.',
					'A man is selling paintings of famous creatures to people as they walk by. He will sell you one for 1 copper piece.',
					'A man is selling paintings of famous people to people as they walk by. He will sell you one for 1 copper piece.',
					'A man is selling roses. They are very cheap, but they are all wilted.',
					'A man is selling vegetables. The vegetables are sitting on top of a large metal shield.',
					'A man is selling very old maps.',
					'A man is standing in the middle of the street, yelling at no one in particular about how lazy everyone is in this town.',
					'A man is standing on a box, preaching to the crowds. They are listening intently and nodding in agreement.',
					'A man is standing on a street corner, shouting about the end of the world. He is dressed in rags, and is visibly delirious. If anyone tries to talk to him, he will ramble about how the gods are angry with the city, and will warn about great disasters to come. He is actually a mad prophet.',
					'A man is standing on the side of the road, talking to a large dog that is standing on its hind legs.',
					'A man is standing on the street, shouting about the end of the world. When questioned, he says he saw a vision in a dream.',
					'A man is standing outside the tavern, yelling at the bard, saying that he stole his favorite hat. He says that it has his initials on it, so he knows it\'s his hat. He says that he\'s going to get his sword and kill the bard for stealing his hat. The man storms into the tavern, but can\'t find the bard, who is hiding under a table. The man storms back out of the tavern, yelling at everyone to watch out for that damn bard, because he\'s a thief and he\'ll steal your hat!',
					'A man is walking down the street, crying and wailing. He says that he was robbed of everything except his pants. He is asking for help. When people approach, he asks for money. He says he doesn’t even have any pants. He just wants money.',
					'A man is walking down the street, singing a song. He is drunk. He is stumbling and slurring his words.',
					'A man is walking down the street, singing laments about his lost love. He is drunk and appears to be on his way to the nearest bar.',
					'A man needs help finding his wife. He is being followed by a group of men who are demanding she be returned to them. They are threatening to kill him if she is not returned to them soon.',
					'A man offers to sell you a potion of cure light wounds for 10 gp. If you buy it, it will be a really good potion labeled as vinegar in a bottle.',
					'A man peddling sewer maps claims they’re accurate. His breath smells of strong ale, casting doubt on his reliability.',
					'A man runs up to the players in a panic, claiming that a powerful sorcerer has turned him into a chicken.',
					'A man tells you he is a sorcerer, and he will show you his magic wand.',
					'A man wearing a red robe is shouting into the street. If players talk to him, he\'ll say that he\'s a member of a wizard\'s rival\'s school of magic, and he\'s here to warn the city that their wizard\'s magic is bad and dangerous. He will keep talking until the players give him gold or go away. If they listen to him, they learn that the city\'s wizard is named Blorkum and he is a warlock. He is actually a pretty nice and honest guy who has never harmed anyone.',
					'A man with a clipboard is standing on the corner. He is looking for people who will participate in a physical study.',
					'A map seller stands atop a crate, waving intricately drawn maps of the city for all to see. “Get your detailed city guides here!” he exclaims. The maps include notes on shortcuts, points of interest, and even recommended eateries.',
					'A melancholic vendor offers a selection of sweets that resemble rat skulls a little too closely for comfort. “Candied fruit, unique taste,” he claims, but one must wonder if there’s more to these treats than meets the eye.',
					'A merchant proffers tiny vials filled with a mysterious potent liquid, promising Herculean strength to those who imbibe it pre-endeavor. Some townsfolk seem tempted, but others question if it’s merely strong spirits in disguise.',
					'A monstrous mount lumbers into town. It is ridden by a gnome.',
					'A mother and her two children are begging for food or money. The mother is holding a baby in her arms.',
					'A naked bard asks for directions to the nearest inn where he left his clothes and money.',
					'A new apothecary opens, offering rare herbs and potions for sale.',
					'A new healer has come to town, the most grievous wounds are healed good as new. Unfortunately, he’s a charlatan clouding the victims mind so they only think they’re back to full health. The wounds still exist and it’s only a matter of time until they flare up again…',
					'A new inn opens, offering comfortable lodgings and a warm meal for weary travelers.',
					'A note slides under the door of your room. On it are the words, “Good luck tomorrow. You’re going to need it.”',
					'A plague of rats has befallen the best bakery in town. A fat and greedy wererat can’t resist nightly visits in rat form to gorge himself on the delicious treats.',
					'A popular tavern is hosting a "name that drink" contest for new beverages.',
					'A popular tavern is hosting a special event for patrons who have completed quests in the past.',
					'A powerful fighter hires the characters to lock him up for the night. He has contracted lycanthropy and is afraid he will do something he will regret. He is also afraid the pack that infected him might come to find him.',
					'A priestess is leading a group of children around the city. They are all wearing bright red robes. If players approach, she will try to drag the children away.',
					'A prominent businessman, well-known as honest and good-natured, disappears. The PCs stumble across his body, tattooed with symbols of an evil deity. Was he a cult’s victim or a member?',
					'A quaint game among children capturing the innocence of imagination—they entangle their fingers with strings, inviting unsuspecting adults to play along. The rules are simple; evade the traps, outwit your peers, and enjoy a hearty laugh.',
					'A ragged street preacher imploringly asks for alms. When he receives a few coins, he dashes with unexpected vigor, vanishing as quickly as he appeared, leaving benefactors befuddled and lighter of coin.',
					'A renowned adventurer returns to their hometown for a meet-and-greet event.',
					'A renowned healer returns to their hometown for a meet-and-greet event.',
					'A reputed palmist reads hands, his table overflowing with trinkets purported to enhance his sight. He holds an audience captive with revelations that seem too personal to be mere guesses.',
					'A row among merchants, all of whom accuse the other of treacherous dealings and market manipulation. Only time will tell if their collective finger-pointing will lead to an open brawl or mutual understanding.',
					'A scruffy man, with an unsteady gait and liquor on his breath, hawks old, stained maps he insists show the underbelly of the city—the sewers. The maps are a jumble of lines, and whether they hold any real value is anyone’s guess.',
					'A scuffle turns heads as a lone figure is set upon by thugs. Those who intervene find themselves embroiled in a battle against street toughs adamant about punishing the stranger.',
					'A seasoned entrepreneur named Marlon, set up upon a temporary stall, peddles an assortment of artifacts—each a silent witness to history’s forgotten conflicts. These relics of yore carry the potential for greatness and the scent of past bloodshed.',
					'A set of shackles lies outside the city jail.',
					'A shady figure in the shadows near an alley entrance entices thrill-seekers with maps to the city’s secretive catacombs, promising untold wealth to those who follow his leads. His assurance of riches from worlds beyond piques curiosity, even if such tales seem far-fetched.',
					'A shopping list for potions lies on the street.',
					'A skin-and-bones man stands ranting at the intersection. Every now and then, he warns passing folks about the dire possibilities of goblin invasion from the sewers, his wild gestures and unsettling smirk making people question his sobriety.',
					'A small orphan girl is terrified and shares a wild story about another child at the orphanage who is biting everyone.',
					'A small potion shop is being overrun by rats. The players can help the owner get rid of them or use their skills to find out why the rats are drawn to the shop in the first place.',
					'A smiling merchant roasts rats, frogs, and squirrels on sticks. He offers a bite to the PCs.',
					'A smiling woman has set up tables laden with adorable kitten statuettes. They catch the light and the hearts of passersby, who can’t help but appreciate their craftsmanship.',
					'A stone-faced guard patrols near the town gate, wearing a plumed helmet much too large. When asked, he admits it’s a penalty for losing a bet with his captain—a reminder to stay solemn in his duties.',
					'A storyteller tells a random story about a creature from an exotic “Monster Guide Book.” The creature suddenly appears from around the corner!',
					'A street artist is painting an unflattering portrait of the city’s noble houses',
					'A street corner hosts an unfortunate drunkard belting out slurred songs about a hidden treasure. His claims are as questionable as his sobriety, yet they spark curiosity among the eavesdropping crowd.',
					'A street performer is juggling. He is really bad at it. If players give him a copper he will quit and leave in a huff.',
					'A street performer looks like he is dancing on a tightrope. He is really just stumbling around. If players give him a copper he will stumble over and demand more money.',
					'A street race is about to start and the prize is a bag of gold coins. Do you participate in the race?',
					'A street urchin attempts to pickpocket you but fails. Will you forgive them and offer them a chance to earn some honest coin?',
					'A tavern owner captured a troll. Patrons are paying 5GP to ‘rastle it.',
					'A tavern patron tells the PCs to repent of their sins. He knows details.',
					'A thief is trying to steal from a merchant\'s cart. The merchant is a gruff dwarf, who will chase him off if he catches him.',
					'A traveling minstrel challenges the wisest looking member of the party to a storytelling contest.',
					'A troupe of acrobats performs breathtaking feats in the plaza, drawing a crowd of admirers. Amid their flips and spins, they surreptitiously pick pockets—a theft act hidden in plain sight.',
					'A wizard is trying to sell a potion that he claims will heal any wound.',
					'A woman is selling books about local landmarks and culture. She’s doing rather well for herself.',
					'A woman is selling flowers on the street. She will sell you one for 1 copper piece.',
					'A woman is selling rare gems. The gems are actually fakes, but she doesn’t know that.',
					'A woman is standing on a balcony, yelling at someone in her house.',
					'A woman keeps exclaiming about lost keys. When approached, she explains a riddle given to her by a fortune teller, implying that whoever solves it will open the door to great wealth.',
					'A woman offers to sell you a potion of cure light wounds for 10 gp. If you buy it, it will be vinegar in a bottle labeled as a potion.',
					'A young boy has gone missing from his home. Everyone assumes him dead, except his mother swears she can still hear him. Turns out, there’s a tunnel system under the city where a creature is holding him hostage.',
					'A young woman approaches the PCs, insisting one of the party is her husband who went missing two years ago. The other townsfolk agree, despite the PC not knowing her.',
					'A young woman wearing a flowing cloak is walking down the street, singing to herself.',
					'Amid the town’s bustling activities, a man’s vehement warnings against the dangers lurking within the city’s sewage system strike an odd combination of anxiety and bemusement among his audience.',
					'Amidst this bustling market, another merchant is hastily trying to sell bags of beans while shouting “Thieves!” at any who dare to approach his wares. Is this an elaborate distraction or a genuine plea for help?',
					'An adventurer returns from a successful quest and shares their story in a tavern.',
					'An alchemist is seeking volunteers to test their latest potion, with prizes for participants.',
					'An antique dealer sells an old mirror, hinting at its mystical property to show the past. For some, it’s a novelty; for others, it offers a tantalizing possibility of reliving bygone days.',
					'An archaeological society is seeking volunteers to help excavate an ancient ruin site.',
					'An arrow strikes the shop sign just above you, a message wrapped around the shaft.',
					'An art exhibition featuring works by local artists opens at the city\'s gallery.',
					'An art exhibition featuring works from renowned artists is held at the city\'s museum.',
					'An attractive maiden flirts with you. Her very large husband notices.',
					'An auction house is selling off rare and valuable items, including some magical relics.',
					'An eccentric inventor is showing off their latest creation - a mechanical dragon that can breathe fire. However, the dragon malfunctions and goes on a rampage through the city. The players must stop it before it causes too much destruction.',
					'An ecstatic shop owner presses a cigar into your hands and proclaims, “It’s a girl!”',
					'An elderly man is sitting on a park bench, eating lunch. He is reading and seems unbothered by the chaos around him.',
					'An elderly man unrolls scrolls with a flourish, offering ancient wisdom at a price. But as he recites excerpts, which sound more like nonsensical ramblings, most scoff and carry on their way.',
					'An elderly merchant’s pitch to sell a mirror of the past creates a ripple of interest. Whether he holds a relic of time or a well-polished looking glass is a question that tempts those with nostalgia or curiosity in their hearts.',
					'An exotic pet merchant presents a cage with a creature that looks like a cross between a cat and a lizard. He swears it can hunt down any vermin and even claims to eat small terrors in the night.',
					'An improvised comedy troupe turns everyday squabbles into a side-splitting spectacle. Their spot-on improvisation and wit draw in titular donations from the amused crowd.',
					'An innocuous scene of halfling kids chased by seemingly villainous orcs takes a surprising turn as the orcs turn out to be playing along, the halfling kids screaming in delight rather than fear.',
					'An inviting aroma leads you to a food cart where a quarrelling couple throws ingredients into a pot, each claiming their recipe is superior. The result is a surprisingly delightful stew, creating quite the line.',
					'An overweight town guard, panting heavily, chases someone who nears the PCs.',
					'An owlbear makes its nest in the horse stables. It’s only trying to protect its eggs.',
					'An underground fighting tournament takes place in an undisclosed location, drawing challengers from all over the region.',
					'Another woman further down the street is hawking books, the covers bearing titles of the return from death’s embrace. While varied in authorship and era, they exude an eerie consistency—tales of the dead reincarnate.',
					'Art merchants, with their swathes of canvas and brilliant pigments, set the stage for a day rich in color and commerce. For those astute enough to discern the strokes of a master from an amateur’s effort, investment in the right piece might yield returns beyond the canvas’s edge.',
					'At a nearby vendor’s stall, simple candles appear amongst the goods. The merchant claims they are made with a magical formula, able to burn indefinitely.',
					'At a tavern’s entrance, a few irate patrons are in the midst of a heated debate. They warn incoming customers about the poor quality of libations, advising against the house ale as strongly as though it were poisoned.',
					'At the center of a captivated crowd, an old crone weaves elaborate tales of legendary beasts that once clashed above and beneath where the city now sprawls. Her morbid prophecies of their return lend a chilling air, leaving some to wonder if there is truth in her words.',
					'At the edge of paranoia, a man threatens the populace with apocalyptic visions of goblin forces emerging from the sewers.',
					'At the temple’s foot, a schism of thought—magic and its moral compass become the crux of heated arguments between priests. Their divine dialectic beckons the party to weigh in on the ethical points of arcane practices.',
					'Breaking the city’s humdrum, a man’s frantic claims of ogres hiding in the sewage system adds a layer of excitement or perhaps unwarranted fear.',
					'Children animate the streets with cries of “Bandits and Raiders,” their excitement palpable as they scheme to plunder imaginary gold from the “lord’s vault.” What’s play to the children, however, could spark real trouble if misinterpreted.',
					'Dozens of oozes are floating in the bay, blocking ship traffic. How did they get there?',
					'Dr. Robert, a self-proclaimed wizard of great repute, operates from a makeshift booth tucked away in a side street. He boasts a glittering elixir claimed to cure any malady. Desperate souls come with coins in hand, though skepticism looms about the potion’s veracity.',
					'Four men are arguing in the street over a barrel of wine. The men will have bloodshot eyes and will be drunk.',
					'Four old women are gossiping in front of their house. One of the old women has a wooden staff.',
					'Gerald, a local doodler turned cartographer, shows off his supposedly treasure-laden maps, more a product of imagination than exploration. A good draught of ale might loosen his imagination and the price.',
					'Gnomes are holding a sidewalk sale! They have any number of strange and fascinating contraptions.',
					'Hordes of rats swarm down the streets, devouring food and garbage.',
					'In a bustling square, a flamboyant character displays a tray of sparkling necklaces and rings, claiming they’re crafted with fine silver and gold. He assures potential customers of a “once-in-a-lifetime” discount, but there’s a clear air of deceit about him.',
					'In a corner, a shoe vendor hawks her wears with a twist. Claiming herself as an elf in search of kin, she offers intricate stories of far-flung forests in exchange for silver-coins-and-a-pair-of-shoes deal.',
					'In a panic, another merchant frantically attempts to sell his stash of barrels before they start to leak, threatening to spoil whatever mysterious contents lie within.',
					'In a peculiar magic show, residents attempt to glimpse their reflections in a large mirror. Vanity, or is there something more mystical at play? Dare the party peer into its depths and see what gazes back?',
					'Locals brandish a mirror in a vain attempt to capture elusive reflections—whether of strangers, friends, or otherworldly entities is anyone’s guess.',
					'A man’s drunken rambling about his brush with a vampire takes a serious tone when he implores someone to destroy the vampire’s remains. A tedious trip later, the party faces an unexpected predicament—the remains are of man’s deceased dog.',
					'In the midst of an uproar, an argument between merchants unfurls that price-fixing cheap knock-offs could drain their competitors and monopolize the market, resulting in an unsettling power shift.',
					'In the plaza, raucous laughter cascades from a play mocking the local lordship. The jests, however, draw the ire of the law, and as the constables approach, the party’s sense of justice is put to the test. Do they defend freedom of speech or avoid confrontation?',
					'Kitten. A little kitten is sitting on the street. It’s not doing anything.',
					'Ladies clothing and under clothing are strewn just outside the doors of the PCs room at the inn. How did these get here?',
					'Locals discuss the bitter chill in the air, remarking that winter seems to be arriving early this year.',
					'Looting. A group of 3d6+5 bandits are looting a shop. They are armed with short swords and short bows. They will fight to the death.',
					'Marlon, a keen collector of discarded weaponries, boasts a robust collection of arms and armors scavenged from forsaken fortresses. His wares hold the allure of history, battles long fought and sieges weathered. They may not be the finest quality, but they carry a sense of nostalgia.',
					'Merchants from distant lands unfurl their collections in a vibrant display of commerce. Hidden amongst the wares lies the challenge of discerning genuine treasures from well-crafted replicas designed to befuddle the unwary.',
					'Nearby, a group of middle-aged men lean against a wall, fervently discussing a new theatrical play famed across the city. Their brows are furrowed over the exorbitant prices, and they’re collectively brainstorming creative ways to get discounted tickets without appearing cheap.',
					'Ogres in the sewers? The raving claim from a corner prophet draws a murmur of fear and skepticism. Yet, if his words hold a grain of truth, courage and readiness could be the light that purges shadow from the depths.',
					'On the corner, a man displays copper charms fashioned into rat silhouettes, declaring they will ward off vermin. Locals glance with intrigue, pondering if superstition is worth the modest investment.',
					'On the street corner, a vendor is selling what he claims are silver and gold jewelry at surprisingly low prices. Skepticism abounds but the offer tempts some passersby.',
					'One merchant seems particularly keen on disposing of his stock, which includes a suit of +1 plate armor, or so he claims. Closer inspection reveals it to be an elaborate ruse crafted from paper-machee decoy for the unobservant buyer.',
					'One of the town wells allegedly has curative properties. It has caused the gradual expansion of the walls to the point where some citizens have taken to living down there.',
					'Pigeons are carrying small messages, begging for money.',
					'Reports come in about a ghost haunting a dark alley in a city, and anyone investigating the ghost ends up dead. The story is an elaborate hoax created to keep people away while crooks are attempting to break into a vault of a nearby building.',
					'Ruffians attempt to shake the PCs down in an alley.',
					'Rumor has it there is an underground fight club in the warehouse district. They’ve been tasked with finding it and shutting it down. But will they want to join instead?',
					'Setting up their canvas for a grand show, a group of art merchants discuss the arrival of affluent patrons and the grand fortune they hope to amass.',
					'Shiny objects have been disappearing all over town. There seem to be an awful lot of crows hanging around lately, but it couldn’t possibly be them. Could it?',
					'Soldiers march with intent, tales of recent skirmishes trailing their boots. Yet, beneath the valorous veneer, disillusion ferments. Engage them in conversation, and a sobering narrative of conflict unfurls.',
					'Soldiers, fresh from the fray, shoulder tales of valor as easily as their battered shields. Yet beneath their storied scars lurks a truth untold—a battle’s glory is often overshadowed by the grim reality of combat’s aftermath.',
					'Some hapless citizen is harassed by a ruffian named Biffe. Will the characters step in to save him?',
					'Something goes wrong during a magical performance by a gnome mage. A simple trick summons a beast from another dimension and it attacks the audience and PCs. Is the gnome responsible of is there a more sinister actor pulling the strings?',
					'The PCs are hired to transport live cargo to the house of a noblewoman. One gets fed after midnight.',
					'The PCs feel like they are being followed as they stroll through the docks. Who is hunting them?',
					'The city guard announces a new law enforcement initiative to improve public safety.',
					'The city\'s alchemist guild announces a competition for the best new potion or elixir.',
					'The city\'s apothecary guild announces a contest for the best new healing salve or ointment.',
					'The city\'s blacksmith guild announces a contest for the best new armor design.',
					'The city\'s blacksmith guild announces a contest for the best new weapon design.',
					'The city\'s library holds a book fair showcasing new releases from local authors.',
					'The city\'s library hosts a book signing event featuring popular authors from around the region.',
					'The city\'s library hosts a book signing event featuring popular authors from around the world.',
					'The city\'s library hosts a lecture on the history of magical artifacts.',
					'The city\'s library hosts a workshop on the basics of spellcraft and magic theory.',
					'The city\'s park hosts a series of outdoor concerts featuring local musicians.',
					'The city\'s theater troupe announces auditions for new members and upcoming performances.',
					'The city\'s wizard academy hosts an open house for prospective students.',
					'The city’s grand plaza lies in disarray—a group of children using a historic cat statue as their plaything. It’s all fun and games until a stricter, vindictive group of adults approach, leading to a confrontation—the party caught in the middle.',
					'The city’s renowned chocolateer has gone missing! The rewards for his safe return are substantial. If only there was a trail to follow…',
					'The great oak in the town square has blossomed leaves of tremendous color. Magenta, azure, and puce adorn its branches. Which would be great, except birds refuse to roost among the leaves, and it’s giving off a foul odor.',
					'The local apothecary announces a contest to create the best new potion or elixir.',
					'The local apothecary announces a contest to create the best new remedy or cure.',
					'The local apothecary announces a new, rare herb has arrived and is available for purchase.',
					'The local blacksmith announces a contest to design the best new piece of armor or weapon.',
					'The local blacksmith announces a contest to design the best new weapon or piece of armor.',
					'The local innkeeper has baked the MOST DELICIOUS strawberry rhubarb pie. Nobody can stop eating once they start.',
					'The local magistrate is out of town. A group of men are sitting in front of his office arguing about money owed to them.',
					'The local tavern holds a contest to find the best brewer of ale or mead.',
					'The local tavern hosts a contest to find the best storyteller in the city.',
					'The local tavern is hosting a "bard-off" competition, with prizes for the best performance.',
					'The local temple holds a charity event to raise funds for those in need within the community.',
					'The local theater troupe puts on a performance of a classic fairy tale or fable.',
					'The local theater troupe puts on a performance of a classic play or story.',
					'The local theater troupe puts on a performance of a contemporary play or story.',
					'The local thieves’ guild is looking for new members. They are looking for anyone willing to do their bidding, no matter how menial. They have no requirements other than being able to keep their mouth shut. They are also always seeking information about their competition. If players ask about joining, they will invite them to a meeting and offer them a chance to prove themselves by stealing something for them.',
					'The local wizard tower is glowing orange.',
					'The players come across a group of old ladies selling homemade goods. If they purchase something, they will discover that the treats are actually magical and provide bonuses to certain abilities. However, there is a slight chance that they may experience unexpected side effects.',
					'The players come across a street vendor selling "magical" trinkets. Upon closer inspection, the trinkets are revealed to be fake. But as the players start to walk away, they hear a faint whisper calling out to them, tempting them to buy something from the vendor.',
					'The players stumble upon a group of bards having a rap battle. They are all evenly matched, but the last bard pulls out a magical lute and blows the competition away.',
					'The players stumble upon a group of cultists trying to summon a demon, but things don\'t go as planned and the demon turns out to be a dud.',
					'The rhythmic clatter of dice echoes against the walls of the city, where two enthusiastic gamblers seek companions to share in their game of chance. A roll here could mean easy coin or hard lessons in the fickle nature of fortune.',
					'The same street bears witness to another chaos—an ape running amok, its captors struggling to control it. The uncanny amusement disintegrates rapidly into terror as their attempts go awry, pulling the party into the unexpected disaster.',
					'The song of innocence turns into a cacophony as a group of children engage in a dangerous game, hurling stones at one another’s heads.',
					'The street performance captures attention with a troupe imitating a familiar band of adventurers—remarkably similar to the party. Chuckles and cheers abound as the escapades unfold, the flattery of imitation not lost on the actual heroes.',
					'The town gallows hasn’t been used in decades, but one morning a swollen noose is found swinging from the beam. When the rope-maker is found to be missing, the plot only thickens…',
					'The local tax collector has been kidnapped. Curiously enough, all of his gold was left behind; whoever took him wanted the man, not the money…',
					'The town\'s blacksmith is hosting an open house to showcase their latest work.',
					'The town\'s tailor introduces new fabrics and designs for custom-made clothing.',
					'The whispers of a con artists’ group out to dupe the city under the disguise of doomsday prophets makes the rounds. Pious robes mask the deceitful hearts as they harness faux-divine powers to protect their ill-gotten wealth.',
					'Theological arguments echo from a temple’s steps as two clerical factions spar over the righteousness of magic. One champions benevolence, the other power. Their discord poses a conundrum—does one school deserve the party’s aid?',
					'Three goblins are running through the city, chasing each other. No one is paying attention to them because they’re gnome illusionists having some fun.',
					'Three half-elven bards are singing a song about a local hero.',
					'Three individuals stand by the smithy, engaged in a robust debate over a claim to riches. One, a storyteller type with wild gesticulations, insists he has seen a cave glittering with gold, but his companions suspect it’s nothing more than ale-inspired fantasy.',
					'Three mischievous children work on tipping over an occupied outhouse.',
					'Tired peasants are heading towards the city. They need a place to stay for the night. They are willing to pay for rooms.',
					'Townsfolk have been reporting sightings of strange creatures around town. But when questioned about it the next day, it’s like they didn’t see anything.',
					'Treasure buried in a nearby dungeon sets the foundation for fierce debates over its whereabouts, as treasure hunters, scholars, and adventurers alike converge with maps and scrolls to dispute its true location.',
					'Two elderly men are arguing over which one of them ran faster as boys.',
					'Two gangs of goblins are seen marching towards the city from opposite directions, one wearing red sashes, the other blue.',
					'Two guards hold a wanted poster. They carefully study the party as they pass by.',
					'Two jugglers toss flaming torches to each other with alarming casualness. They shout challenges to the growing audience, suggesting tasks for them to make the show even more thrilling—for a few silvers, of course.',
					'Two men are arguing about something. They’re not bothering anyone.',
					'Two men are fighting in the street. One man has a metal breastplate and a sword. The other man has a metal helmet and a metal shield. The men are wrestling.',
					'Two men are fighting over a gold coin that’s covered in blood.',
					'Two other adventuring groups are arguing just outside the tavern.',
					'Under the bridge downtown, a body has been found. Exotic spices and peppers surround the crime scene.',
					'Unexpectedly, a young man approaches the party. The young man is wearing a red cloak and is carrying a wooden staff. The young man will ask the party if they want to join the cult of the Staff of Fire.',
					'Upon returning to your room at the inn, you discover a body on the floor with a dagger just adjacent. You hear guards storming up the stairs.',
					'When a wagon carrying a gigantic cage rolls up into town, the people are struck with curiosity. But when the tarpaulin is removed, there is only a strikingly cute turtle. “Thing’s vicious. Don’t let those enticing eyes fool ya. And don’t look at it too long.”',
					'When the armor and weapons at the blacksmith’s forge suddenly become animated, the surrounding area evacuates. A particularly large suit of armor shouts, “I shall defend my birthplace!”',
					'While walking through a park, you come across an injured animal. Will you try to help heal it?',
					'With a salesman’s charm and an ear for good gossip, Gerald invites onlookers to peruse his collection of hand-drawn maps. A sip of fine spirit might sway him to part with his creations—provided the tales accompanying them hold water.',
					'With a tone of cautionary fervor, a woman warns of the vampiric threat lurking in the sewers. But is she a harbinger of truth, or is her ‘quest’ merely the ramblings of a fantastical mind?',
					'Wrapped in scarves and thick coats, a cluster of city dwellers exchange commiserations over the encroaching cold, some superstitiously claiming that an eternal winter is nigh.',
					'A yawning alderman stumbles into the street, too drunk to stand.',
					'You hear a strange sound coming from a nearby alley and when you investigate you find a group of people playing an unusual game.',
					'You see a group of 3d10 elves walking down the street, on their way to Oldtown.',
					'You see a group of children playing with a wooden puppet. If you talk to them, you learn that their father is a wood carver who is also a member of a "secret society."',
					'You see a group of people worshipping a statue in the middle of the city. They say that it is the statue of an ancient god, and that if anyone touches it, they will be cursed.',
					'You see a man offering to sell a magic wand. It\'s not very powerful, but it is cheap.',
					'You see a man-sized shadow just around the block waving its arms at you. “Over here, quickly, I’ve caught one!”',
					'A half-orc is wandering around the streets, babbling, he seems to be looking for something. He has a small sack of treasure on his back, and he keeps looking behind him as if someone is following him.'
				];

				/** If pulling from the general pool, skip the rest of the script **/
				let output = `<strong>(Generic Event):</strong> ${generic_array[events]}`;
				/** Format and send the response as a private message to me (Poetics) **/
				ChatMessage.create({
					user: game.user._id,
					content: output,
					whisper: ChatMessage.getWhisperRecipients("Poetics")
				});
				return;		
			
			} else if (district == "docks") {
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
			} else if (district == "weekly") {
				/** Weekly events are unique in that they don't follow the normal **/
				/** Event breakdown. It is a simple d100 roll to determine an outcome **/
				/** Thus this section posts the whisper and ends without running the **/
				/** rest of the script **/
				if (roll < 4) { events = 'A ship bearing exotic cargo arrives in the Docks.'; }
				else if (roll < 7) { events = ' Two rival gangs clash in the streets, with much bloodshed.'; }
				else if (roll < 11) { events = 'Strong winds off the Bay of Ptolus damage a few buildings.'; }
				else if (roll < 13) { events = 'A stopped-up sewer line sends sewage back up into homes and the street.'; }
				else if (roll == 13) { events = 'A member of a noble house gets married.'; }
				else if (roll == 14) { events = 'An earth tremor shakes the town and causes minor damage, particularly in the Warrens.'; }
				else if (roll < 17) { events = 'Dysentery spreads through Midtown.'; }
				else if (roll < 19) { events = 'Vandals deface temples in the Temple District.'; }
				else if (roll < 21) { events = 'An Imperial envoy from Empress Addares or Emperor Segaci comes to town to meet with the Commissar.'; }
				else if (roll < 24) { events = 'One of the religions with a temple in the city splits into two groups in a notable schism.'; }
				else if (roll < 27) { events = 'Bandits plague travelers heading north out of the city.'; }
				else if (roll < 30) { events = 'A well-known pirate ship preys upon vessels coming into and leaving Ptolus.'; }
				else if (roll == 30) { events = 'The Commissar announces higher taxes for the coming year, and the people grow dissatisfied.'; }
				else if (roll < 33) { events = 'Troubles in another city cause the number of immigrants arriving in Ptolus to increase.'; }
				else if (roll < 37) { events = 'A public execution of a well-known criminal is conducted in Oldtown.'; }
				else if (roll < 40) { events = 'A new major building project starts in the city.'; }
				else if (roll == 40) { events = 'An older, prominent building in the city collapses.'; }
				else if (roll == 41) { events = 'The veterans of the Gnoll Wars hold a parade, attended by the Commissar.'; }
				else if (roll < 44) { events = 'Fire destroys an entire city block.'; }
				else if (roll < 46) { events = 'A well-known and well-liked minstrel dies.'; }
				else if (roll == 46) { events = 'A popular merchant in the South Market is accused of murdering their spouse.'; }
				else if (roll == 47) { events = 'Children disappear, kidnapped by an evil cult.'; }
				else if (roll == 48) { events = 'A hailstorm causes damage to various buildings in the city.'; }
				else if (roll < 51) { events = 'A new fashion or fad spreads through the city.'; }
				else if (roll < 54) { events = 'A major new restaurant opens.'; }
				else if (roll < 57) { events = 'Two feuding guilds allow a confrontation between its members to grow violent.'; }
				else if (roll == 57) { events = 'A concerned group of citizens protests the actions of the Sisterhood of Silence.'; }
				else if (roll == 58) { events = 'One of the bridges over the King’s River threatens collapse, and people avoid it.'; }
				else if (roll == 59) { events = 'Someone vandalizes a statue of a past Commissar in Oldtown.'; }
				else if (roll == 60) { events = 'Fishermen in the harbor report a week of terrible catches.'; }
				else if (roll == 61) { events = 'Strange graffiti begins appearing throughout town, its meaning unclear.'; }
				else if (roll < 65) { events = 'A group of knights or adventurers is lauded as heroes for dealing with some sinister threat.'; }
				else if (roll < 69) { events = 'A particular temple sponsors a feast and celebration.'; }
				else if (roll < 71) { events = 'The City Watch cracks down on certain illegal gambling establishments and brothels.'; }
				else if (roll < 74) { events = 'The republican movement stages a rally in Oldtown.'; }
				else if (roll < 76) { events = 'A spate of robberies occurs in the Nobles’ Quarter.'; }
				else if (roll < 78) { events = 'The ratmen in the sewers are getting either more desperate or more daring in their raids on the surface.'; }
				else if (roll == 78) { events = 'Lights are seen with greater frequency in the windows of Goth Gulgamel.'; }
				else if (roll < 81) { events = 'A carnival sets up south of the city with a freak show, games of chance, and lots of food.'; }
				else if (roll == 81) { events = 'An organization attempts to raise money to repair the Clock Tower in Oldtown.'; }
				else if (roll == 82) { events = 'A demon from the Dark Reliquary terrorizes a neighborhood before the Knights of the Pale deal with it.'; }
				else if (roll == 83) { events = 'The King’s River reaches very low levels, making the sewage and garbage in it thick and malodorous.'; }
				else if (roll < 87) { events = 'Two merchants have a price war.'; }
				else if (roll < 90) { events = 'A new play or show opens in one of the theaters, to great acclaim.'; }
				else if (roll < 92) { events = 'Someone makes an attempt on the life of a well-known public figure.'; }
				else if (roll < 94) { events = 'Ghosts are reported with increasing frequency in a certain location in the city.'; }
				else if (roll == 94) { events = 'Litorians, beginning to sour on urban life, leave the city in numbers.'; }
				else if (roll < 97) { events = 'Fugitives escape from the Prison or one of the madhouses.'; }
				else if (roll < 98) { events = 'The City Watch and Commissar’s Men scour the city for a particular criminal.'; }
				else { events = 'A newcomer replaces a retiring longtime member of the City Council’s Assembly.'; }
				
				let output = `<strong>(Weekly Event):</strong> ${events}`;
				/** Format and send the response as a private message to me (Poetics) **/
				ChatMessage.create({
					user: game.user._id,
					content: output,
					whisper: ChatMessage.getWhisperRecipients("Poetics")
				});
				return;	
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
			/** If so, add multiple events **/
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
      
	  /** Alternatively, the user hits Cancel **/
	  two: {
        icon: '<i class="fas fa-times"></i>',
		label: "Cancel",
        callback: html => console.log("District event dialog canceled")
        }
    },
    close: html => console.log()
});
  
d.render(true);
