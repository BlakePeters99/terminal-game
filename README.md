# <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px'/> Terminlly-Medeval

#### This game was created by Blake Peters, Kayla Bristol and Abdullah Durrani
 
 
 
<br />

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> The Name of the Game  
 
<br />
 
 The goal of this game is to navigate through various choices and scenarios to gather loot, interact with characters, and survive adventures without dying. Each decision affects the story's progression and outcome.


<br />

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> It Begins

#### The player enters a name and selects a species—'Human', 'Elf', or 'Dwarf'. 

    function game() {
    let species, loot = 0, decision;
    // Prompts user for name
    const username = prompt('What is your name? ');
    console.log(`Hello ${username}`);

    // Prompts user for class choice that will also be used in future  
    console.log('Pick a species: Dwarf, Elf, or Human: ');
    console.log("1: Dwarf");
    console.log("2: Elf");
    console.log("3: Human");

    // Player chooses species
    decision = chooseFunc();
    if (decision === "1"){
        species = "Dwarf"
    } else if (decision === "2"){
        species = "Elf"    
    } else {
        species = "Human"
    }
  

<br />

#### note: the game uses 'if else' statements to vary experiences based on species choice.


<br />

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> First Sequence

### Event Summary: You're traveling down a path and you encounter a traveler.

#### You're given choices to either ignore, help or engage in conclict with a traveler. Two of the choices leads to loot one choice leads to death. 
#### There are variations in interactions depending upon your race selection.

<details>

<summary>Show/ Hide Code</summary>

    console.log("As you are meandering down your path, you encounter a traveler.");
    console.log("1: Ignore.");
    console.log("2: Help.");
    console.log("3: Fight!");
    
    decision = chooseFunc();
    // Player ignores traveler
    if (decision === "1"){
        console.log("Ignore them. You are very shy after all… best not to make eye contact.");
        // In first choice if species is dwarf 
        if (species === "Dwarf"){
            console.log("You and the traveler give each other an up-nod as you pass. Nice.");
        } else if (species === "Elf"){
            console.log("You glide past the traveller without being seen. Great work!");
        } else {
            console.log("The traveller waves at you as you pass. You want to be friendly, so you wave back.",
                    "But as it turns out, there was another passerby behind you… the traveller was waving to them.",
                    "You pretend nothing happened. Carry on with your meandering.");
        }

    // Player helps traveler. If Dwarf or Elf = loot
    } else if (decision === "2"){
        console.log("Ask the traveler if they need help. It would be nice to have a companion if things go well.");
        if (species === "Dwarf"){
            console.log("Hello friend, how are your travels? Need any help?” You say. “Well yes actually I was looking",
                    "for a companion to help me find the nearest village. In fact, I`ll pay you! I`m very desperate.",
                    "Take these 20 coins.” They give you 20 coins and you move along to the nearest village together.");
            // Player gains 1 loot
            loot++;
        } else if (species === "Elf"){
            console.log("Hello friend, how are your travels? Need any help?” You say. “Well yes actually I was looking",
                    "for a companion to help me find the nearest village. I`m also over encumbered, so if you would, take" ,
                    "my extra sword and shield. They`re too much for me to carry.” They give you a sword and shield and you",
                    "move along to the nearest village together.");
            loot++;
        } else {
            console.log("You call out to the traveller. “Hello friend, I was just passing by and wondered —“ They glare",
                    "at you and interrupts, “A human eh? I`ll keep my distance, thank you. Move along before I change my",
                    "mind about killing you on the spot.” Oh my, a speciesist. You best avoid. Hurry along before",
                    "something bad happens.");
        }

    // Player fights traveler. If Elf or Human = loot, if Dwarf = die
    } else {
        console.log("Fight them! You could use some extra loot.");
        if (species === "Elf" || species === "Human"){
            console.log("You leap in front of the traveler and brandish your weapon. “Fight me you bastard!” You yell.",
                    "After some excellent swordsmanship, you defeat them! Great work. You earned some loot.");
            loot++;
        } else {
            console.log("You leap in front of the traveler and brandish your weapon. “Fight me you bastard!”",
                    "You yell. They leap back at you with their weapon. It`s a struggle, and the two of you are unevenly",
                    "matched! You`re too short! The traveler sees an opening in your armor and slashes at it. It is",
                    "a deep wound. You fall back, dazed! They have bested you! The traveler laughs and walks off. You see",
                    "a bright light… it`s all over.");
            // Player dies
            return false
        }
    }

</details>


<br />



<br />

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> Second Sequence

### Event Summary: You're traveling down a path and you encounter a traveler.

####  
#### 

<details>

<summary>Show/ Hide Code</summary>

</details>


<br />


