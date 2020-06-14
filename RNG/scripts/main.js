
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "It's time to kill the party",
            "I got nothing, how about",
            "Scraping the bottom of the barrel, how about you try something like",
            "This one is totally cool",
            "I can shake things up a little",
            "best idea yet",
            "they will talk about this one for years"
        ],
        response: [
            "*snort*",
            "No, give me another one",
            "Too predictable",
            "Um, no",
            "Did that last week",
            "interesting, but no",
            "that will give my players nightmares",
            "hard pass on that one",
            "you didn't try at all with that",
            "yawn"
        ],
        template: [
            "@person is @looking a @description @object",
            "A @description @animal is @activity while @activity",
            "@person stole a @description @object from @person, they will pay @payment to get it back",
            "A @animal is lost, @person will pay @payment for it's safe return",
            "A @animal has killed and will kill again if not stopped, @person will pay @payment for it's head",
            "deep in the woods is a cave that contains the @description @object",
            "@person says that @person needs to disapear, they will pay @payment"
        ],
        animal: [
            "dog",
            "cat",
            "rabbit",
            "owlbear",
            "goblin",
            "orc",
            "dragon",
            "frog",
            "unicorn",
            "horse",
            "slug",
            "yeti",
            "troll",
            "ogre"
            
        ],
        payment: [
            "hansomly",
            "100 gold",
            "500 gold",
            "2 copper",
            "travel expenses",
            "one slice cake and a birhtday hat",
            "in magical components",
            "a rusty old key with a strange engraving",
            "10 gold",
            "20 gold",
            "30 gold",
            "40 gold",
            "50 gold",
            "60 gold",
            "70 gold",
            "80 gold",
            "90 gold",
            "200 gold",
            "300 gold",
            "400 gold",
            "600 gold",
            "in blood",

        ],
        person: [
            "the mayor",
            "the local theives guild",
            "a child on the street",
            "An aspiring actor",
            "someone lurking in the shadows",
            "the town drunk",
            "a stranger who wandered into town",
            "the king",
            "an old woman",
            "the farmer's daughter",
            "A farmer",
            "The farmer's daughter's boyfriend",
            "the cook",
            "the local magic store owner",
            "bar tender",
            "black smith",
            "the wizard",
            "the mage",
        ],
        looking: [
            "looking for",
            "searching for",
            "hunting for",
            "gathering up",
            "paying hansomly for",
            "screaming about",
            "hearings whisperings of",
            "reading in a dusty old book that once",
            "talking loudly about"
        ],
        trouble: [

        ],
        activity: [
            "running around",
            "dancing",
            "puffing up",
            "rampaging through the city",
            "entereing the kings court",
            "stopping to smell the roses",
            "threatening bystanders",
            "making a mess",
            "attacking people",
            "breathing fire",
            "totally wanting to kill something",
            "plotting something evil",
            "staring down the party",
            "flying around",
            "eating people"

        ],
        object: [
            "hat",
            "sword",
            "gem",
            "dragon jaw bone",
            "glass bauble",
            "statue",
            "amulet",
            "book",
            "scroll",
            "mace",
            "treasure chest",
            "bow and arrow set",
            "mug",
            "pet cat",
            "set of armor",
            "jar with a hand in it",
            "jar with magical essence in it",
            "healing potions"
        ],
        description: [
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "teal",
            "rainbow",
            "silver",
            "gold",
            "brown",
            "black",
            "bloody",
            "tiny",
            "huge",
            "intricately carved wood",
            "intricately carved stone",
            "intricately etched metal",
            "intricately engraved crystal",
            "intricately sculpted earthen",
            "roughly carved wood",
            "roughly carved stone",
            "roughly hammered metal",
            "roughly chiseld crystal",
            "roughly sculpted earthen",
            "massive",
            "diminuative",
            "smelly",
            "fine",
            "masterwork",
            "artifact",
            "fluffy",
            "undead"
        ]
    });

    // // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});