
// Concepts for the React Class
// 1) Functions calling other functions
// 3) Passing parameters and returning
// 3) Arrays of objects or other combinations of objects and arrays
// 4) Arrow functions (making functions)
// 5) Looping over arrays of objects
// 6) Boolean logic (using <=, &&, ||)
// 7) JSON is one way we can format data (we can turn things back and forth from JSON)
// 8) try-catch is a thing and it has a format that I can look up
// 9) validation is a thing that we do a lot as developers

// Data Types
// basic: string, boolean, number, null, undefined
// complicated: object, array


// How the computer simplified accessing inside objects and arrays
// Starts fromt he left hand side and simplifies over
// user.firstName
// posts[2].text
// when it sees square brackets and a number (generally speaking) it's going to index into an array
// when it sees square brackets and a string then it's going to look for a property with that name on the object
// when it sees a dot and then a property name it's going to look for a property on an object

// In other languages you can only make objects with a class
// In Javascript we make them without a class more often than we make them with a class

// Making an object freehand
// method = function that's in a property (or on an object)
const email = {
    id: 0, // nothing magical about it, but extremely common like a SSN for an object
    // these are methods
    sayHello: () => alert("hi!"),
    sayGoodbye() {
        alert("bye!")
    }
}

// Javascript this magic word
// can only be used inside of a method
// it is really only used with OOP
// it's rarely used in modern JS
// it's a little buggy in JS (with arrow functions and normal functions)



let tasks = [
    {
        text: "Laundry",
        tags: [
            "home",
            "annoying"
        ]
    },
    {
        text: "Emails",
        tags: [
            "work"
        ]
    },
]

// They liked this so much they made it it's own data format
// Called JSON
// The only difference basically is that the property names have to be in quotation marks
// You can either make a .json file and put data in JSON format inside
// Or you can take some data and turn it into JSON (usually a string of JSON) 
// or take some JSON (usually in a string) and turn it into that languages data format


tasks[1].tags[0] // "work"

const emailTask = tasks[1] // { text: "Emails", tags: [ "work" ] }
emailTask.tags[0] // "work"

const emailTags = tasks[1].tags // [ "work" ]
emailTags[0] // "work"


const emailTaskThing = tasks[1] // { text: "Emails", tags: [ "work" ] }
const emailTagsThing = emailTaskThing.tags // [ "work" ]
emailTagsThing[0] // "work"

const myHeroes = [
    {
        response: "success",
        id: "731",
        name: "Zoom",
        powerstats: {
            "intelligence": "50",
            "strength": "10",
            "speed": "100",
            "durability": "28",
            "power": "100",
            "combat": "28"
        },
        biography: {
            // These quotation marks have to stay because of the dashes -
            "full-name": "Hunter Zolomon",
            "alter-egos": "No alter egos found.",
            aliases: [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "Flash Secret Files #3",
            publisher: "DC Comics",
            alignment: "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "181 lb",
                "81 kg"
            ],
            "eye-color": "Red",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "-",
            "base": "Keystone City, Kansas"
        },
        "connections": {
            "group-affiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
            "relatives": "Ashley Zolomon (ex-wife)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1384.jpg"
        }
    },
    {
        response: "success",
        id: "731",
        name: "Zoom",
        powerstats: {
            "intelligence": "50",
            "strength": "10",
            "speed": "100",
            "durability": "28",
            "power": "100",
            "combat": "28"
        },
        biography: {
            // These quotation marks have to stay because of the dashes -
            "full-name": "Hunter Zolomon",
            "alter-egos": "No alter egos found.",
            aliases: [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "Flash Secret Files #3",
            publisher: "DC Comics",
            alignment: "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "181 lb",
                "81 kg"
            ],
            "eye-color": "Red",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "-",
            "base": "Keystone City, Kansas"
        },
        "connections": {
            "group-affiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
            "relatives": "Ashley Zolomon (ex-wife)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1384.jpg"
        }
    }
]

// If we are trying to access a property with a dash in it, we have to use square brackets and quotation marks

//heroInJS.appearance["eye-color"]


// We use try-catch when there's an error that could happen and we can't prevent that error from happening
// #1 reason is if you're talking across the internet and you can't prevent the internet from going out
// You CAN throw errors yourself and then catch them - rarer thing to do in Javascript


// blueprint to make it potentially easier to make objects
class Message {
    // set up any properties for us
    constructor(author, message) { // these parameters are temporary bowls holding our ingredients to make our object soup
        // we can use "this" to access the object we are currently constructing
        this.id = 0
        this.author = author
        this.message = message
        this.read = false
        // this.markAsRed = function() {
        //     this.read = true
        // }
    }

    markAsRead() {
        this.read = true
    }
}

// If you see the magic word "new" it's calling the constructor
// when we put a function in a property, we call it a method
// if you see something.something() we're calling a method
// console.log() is calling the log method on the console object

const message1 = {
    id: 0,
    author: "Natalie",
    message: "Hello!",
    read: false,
    // markAsRead() {
    markAsRead: function() {
        // "this" looks around at where it is and uses that object
        this.read = true
    }
}

const message2 = new Message("Natalie", "Hello!")

console.log(message1, message2)

message1.markAsRead()
message2.markAsRead()

console.log(message1, message2)