// turn based game with chests with loot

// Ask for name & race (elf dwarf human) & dwarf racism

// Create initial prompt - more creativity
// Engage in simple conversation ("are you there? are you alive?")
// "What do you want to do today?" -give them choices and ideas
// choice prompt (1 2 3)
// Add wallet to purchase items
// Add inventory (armor weapons that kind of thing)

// * Abdullah's part
// Event: raid against bandits (pros and cons for choices)
// Narrator dialogue (start):
// 'You’ve got a choice, lad, and listen up closely, because I don’t like repeating myself. Do you join these here bandits and increase your chances of loot or would you rather play it safe?'
// * CHOICE 1 : LOOT
// Player dialogue, upon choice :
// ‘Get out my way, choice giver, I’m taking this loot while I can.’
// Narrator dialogue, if Dwarf :
// 'Fiery little guy, ain't he?'
// Result:
// Your raid with bandits results in loot.
// * CHOICE 2: LOOT
// Player Dialogue, upon Choice:
// ‘I’ve mulled it over and I am carrying enough weight, I don’t need this on my conscience, I am going to move on.’
// Narrator dialogue, if Elf : 
// ‘a two-shoe goodie if I’ve ever seen one.’
// Result:
// ‘You’re able to acquire  loot as the raiding party drops loot in your path during their escape.’
// * CHOICE 3: DEATH
// Player dialogue, upon choice:
// ‘I am going to wait it out here and see what happens.’
// Narrator dialogue, if Human :
// ‘Nothing good can come of waiting’ ya gotta go out and take it!’
// Result:
// ‘Caught between advancing forces and escaping raiders, you are killed in the collision.’


// * Kayla’s part
// Event: encounter random person
// Narrator dialogue:
// "As you are meandering down your path, you encounter a traveler."
// * CHOICE 1: Ignore. NO LOOT
// Narrator dialogue:
// "Ignore them. You are very shy after all… best not to make eye contact."
// Result if Elf:
// You glide past the traveller without being seen. Great work!
// Result if Human:
// The traveller waves at you as you pass. You want to be friendly, so you wave back. But as it turns out, there was another passerby behind you… the traveller was waving to them. You pretend nothing happened. Carry on with your meandering. 
// Result if Dwarf:
// You and the traveller give each other an up-nod as you pass. Nice. 
// * CHOICE 2: Help. LOOT (if Elf or Dwarf)
// Narrator dialogue:
// "Ask the traveler if they need help. It would be nice to have a companion if things go well."
// Result if Elf:
// “Hello friend, how are your travels? Need any help?” You say. “Well yes actually I was looking for a companion to help me find the nearest village. I’m also over encumbered, so if you would, take my extra sword and shield. They’re too much for me to carry.” They give you a sword and shield and you move along to the nearest village together.
// +20 Adventure Loot
// Result if Dwarf:
// “Hello friend, how are your travels? Need any help?” You say. “Well yes actually I was looking for a companion to help me find the nearest village. In fact, I’ll pay you! I’m very desperate. Take these 20 coins.” They give you 20 coins and you move along to the nearest village together.
// + 20 Adventure Loot
// Result if Human:
// You call out to the traveller. “Hello friend, I was just passing by and wondered —“ They glare at you and interrupts, “A human eh? I’ll keep my distance, thank you. Move along before I change my mind about killing you on the spot.” Oh my, a speciesist. You best avoid. Hurry along before something bad happens.
// No Loot
// * CHOICE 3: Fight! LOOT (if Elf or Human)
// Narrator dialogue:
// "Fight them! You could use some extra loot."
// Result if Elf or Human:
// You leap in front of the traveler and brandish your weapon. “Fight me you bastard!” You yell. After some excellent swordsmanship, you defeat them! Great work. You earned some loot.
// +20 Adventure Loot
// Result if Dwarf:
// You leap in front of the traveler and brandish your weapon. “Fight me you bastard!” You yell. They leap back at you with their weapon. It’s a struggle, and the two of you are unevenly matched! You’re too short! The traveler sees an opening in your armor and slashes at it. It is a deep wound. You fall back, dazed! They have bested you! The traveler laughs and walks off. You see a bright light… it’s all over.
// Game over!

// Event: walk into the woods of darkness
// Narrator dialogue:
// "As you walk along, the woods around you become thicker and thicker. The sky darkens... it appears you have entered the Woods of Darkness."
// * CHOICE 1: Turn around. NO LOOT
// Narrator dialogue:
// "Fuck that." You say. You decide to turn around and not risk it.
// Result if Elf, Dwarf, or Human:
// You hurry back to the main path.
// * CHOICE 2: Go to southern part of  woods. LOOT
// Narrator dialogue: "You decide to head south further into the woods, "
// * CHOICE 3: 



// event: A wild snorlax 
// dialog scenario: A wild snorlax appears on your adventure, blocking the entrance path to the mystical shop.
// choice 1 Poke him with your weapon
// reaction 1: (dwarf) pokes him with his mighty sword but all the snorlax sees is a tiny dude 
//      with a toothpick stabbing him and rolls on top of you going back to sleep
// result: you died.
// reaction 2: (elf & human) stab the snorlax and it immediately wakes up and moves out of the way
// result: you progress with no money
// choice 2: Tell him a funny joke
// reaction 1: (dwarf): Hey Snorlax! You can always rely on a dwarf, we'll never look down on you.
// reaction 2: (elf): 3 elves walk in a bar. One starts to hug the wooden interior, 
//      "one stands high up on the bar and the last one stands in the darkest corner and glares..."" 
//      "The other guest es look at them and then at the dwarven Barkeeper and ask:"You not gonna stop them?" "
//      "The Barkeeper just shrugs and says:"Nah, don't bother."
//      "If they leave they might come back and bring a blood elf and no one wants to see THAT!".
// reaction 3: (human): A high elf, a wood elf, and a dark elf walked into a bar, BANG! A dwarf walked under it.
// result (for 1-3): Snorlax jolts up laughing and hands you a gold rock as tip for that wonderful joke. 
// choice 3: Squeeze past him
// reaction 1: (dwarf) As a dwarf, you narrowly slip past the snorlax when they exhale, successfully making it to the shop.
// result: you progress with no money
// reaction 2: (elf and human) You try to push yourself past the snorlax but then it suddenly 
//      inhales for a massive yawn squishing you between the rock and its massive belly. 
// result: you died


// event: mystical shop (different outcomes for how much money you have)
// dialog scenario:
// choice 1: Take a free handout:
// final decision 1 (too little money) You pick up a binding slave contract. You are now a slave to capitolism
//      and are forced to work for the shop owner for the rest of your life.
// result: you live but at what cost?
// choice 2: Purchase a mystery item (requires some money)
// final decision 2 (medium amount of money) You open a mystery box that contains an SSS rank item! 
// result: You are now an SSS rank adventurer and can take on any challenge in your future!
// choice 3: Hand over all 3 adventure earnings to shop keeper
// final decision 3 (BIG $$$) You buy the whole shop and become the shopkeeper
// result: you are now the shopkeeper, congrats!!


/* CODE STRUCTURE */
// Name?
// race?
//  event #1
// "dialog"
// "choices"
// prompt
// code
// event #2