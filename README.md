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

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> FIRST SEQUENCE

### Event Summary: You're traveling down a path and you encounter a traveler.

#### You're given choices to either ignore, help or engage in conclict with a traveler.  
#### There is fucntionality in the code for different outcomes depending upon the the players choice of race.

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

 ### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> SECOND SEQUENCE

### Event Summary: You're given an oppurtunity to participate in a raiding party or not.

####  Player is prompted to join a raiding party or to pass on the raid. Two of the choices will lead to loot and one choice will lead to death.
#### There is functionality in the code for different outcome based on choices made by the player during the interaction.

<details>

<summary>Show/ Hide Code</summary>

    console.log(`Thundering hooves signal approach; a sharp cry warns, "Bandits!"`,
        `You’ve got a choice, lad, and listen up closely, because I like repeating myself. Do you join these here bandits and increase your chances of loot or would you rather play it safe?;`)
    console.log("1: Get out my way, choice giver, I’m taking this loot while I can!");
    console.log("2: I am carrying enough weight, I don’t need this on my conscience, I am going to move on.");
    console.log("3: ‘I am going to wait it out here and see what happens.’");
    
    decision = chooseFunc();
    //Player joins bandits. If Dwarf = specific dialogue. All = loot      
    if (decision === "1"){
        console.log("You're natural, kid! Ever thought of running for office?");
        if (species === "Dwarf"){
            console.log("'Fiery little guy, ain't he?'");
        }
        loot++;

    //Player avoids bandits. If Elf = specific dialogue. All = loot    
    } else if (decision === "2"){
        if (species === "Elf"){
            console.log(`I am going to wait it out here and see what happens.`);
        }
        loot++;

    //Player does nothing. If Human = specific dialogue. All = die.    
    } else {
        if (species === "Human"){
        console.log(`Nothing good can come of waiting’ ya gotta go out and take it!`);
        }
        console.log(`Caught between advancing forces and escaping raiders, you are killed in the collision.`)
        return false
    }


</details>


<br />



### <img src='./public/Terminlly-Medeval.png' width="55em" style='margin-right: 15px' /> THIRD SEQUENCE 

### Event Summary: 

#### 
#### 

<details>

<summary>Show/ Hide Code</summary>

    console.log("As you walk along, the woods around you become thicker and thicker. The sky darkens... it appears",
        "you have entered the Woods of Darkness.");
    console.log("1: Turn around.");
    console.log("2: Go to southern part of woods.");
    console.log("3: Go to northern part of woods.");
    
    decision = chooseFunc();
    //Player turns around
    if (decision === "1"){
        console.log("'Fuck that.' You say. You decide to turn around and not risk it.");
        if (species === "Dwarf" || species === "Elf" || species === "Human"){
            console.log("You hurry back to the main path.");
        }

    //Player goes south. All = loot
    } else if (decision === "2"){
        console.log("You decide to head south further into the woods.");
        if (species === "Dwarf" || species === "Human"){
            console.log("As you walk along, you come across a pile of disturbed soil. You brush away some of",
                    "the dirt to reveal a pile of poorly hidden gold! Nice.");
            loot++;
        } else {
            console.log("As you walk along, you come across a rusted old chest! You open it to find a glowing",
                    "pair of boots. They look powerful. Nice loot acquiring!");
            loot++;
        }

    //Player goes north. All = loot
    } else {
        console.log("You decide to head north further into the woods.");
        if (species === "Dwarf" || species === "Elf"){
            console.log("As you walk along, you find a hole in the ground. There's a bunch of gold in it.");
            loot++;
        } else {
            console.log("As you walk along, you see a tree with what looks like a face... suddenly, the tree",
                "springs to life and says, 'Lucky traveler! You have run into me, the Tree of Abundance. Take",
                "this loot as a little treat.'");
            loot++;
            }
    }

</details>


<br />

