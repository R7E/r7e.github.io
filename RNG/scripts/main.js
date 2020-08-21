
$(function() {

    // Populate using an object literal
    // Used for making new stuff on my laptop

    WTF.init({

        heading: [
            "It's time to kill the party",
        ],
        response: [
            "*snort*",       
        ],
        template: [
            "@animal is @looking a @description @object",

        ],
        animal: [
            "doőg",            
        ],
        payment: [
            "hansomly",
        ],
        looking: [
            "looking for",
        ],
        trouble: [

        ],
        activity: [
            "running around",
        ],
        object: [
            "hat",
        ],
        description: [
            "red",    
        ],

    
        "monster": [
            "Ogre",
        ],
        odesc: [
            "red",
        ]
    });

    // Populate using a JSON file
    //  WTF.init('content.json');
    // needs to have a web server for ajax. https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
    
    // // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
