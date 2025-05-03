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




// Objects are burritos


const gameBoard = [
    [null, null, "queen", null, null],
    [null, "king", null, null, null],
]

gameBoard[1][1]


// COMES OUT TO AN OBJECT.propertyName



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

let message = "Here are your tasks:\n\n"

for(let i = 0; i < tasks.length; i++) {
    // Another option: We could do this: const task = tasks[i] and then task.text on the next line
    // message += task.text + " (" + task.tags.join(", ") + ")\n"

    message += tasks[i].text + " (" + tasks[i].tags.join(", ") + ")\n"

    // Another option: message += `${tasks[i].text} (${tasks[i].tags.join(", ")})\n`
}

console.log(message)

// Here are your tasks:
// * Laundry (home, annoying)
// * Emails (work)


// JSON is a data storage format
// alternatives are: Excel, SQL, CSV, Access, XML

const jsonString = '[{"text": "Laundry","tags": ["home","annoying"]},{"text": "Emails","tags": ["work"]}]'

const csvString = "text,Laundry,tags,home,annoying"

const jsonString2 = `
[{
  "id": 1,
  "first_name": "Harper",
  "last_name": "Arnould",
  "email": "harnould0@360.cn",
  "gender": "Male",
  "ip_address": "234.39.191.38"
}, {
  "id": 2,
  "first_name": "Maia",
  "last_name": "Glazyer",
  "email": "mglazyer1@topsy.com",
  "gender": "Female",
  "ip_address": "196.56.123.101"
}, {
  "id": 3,
  "first_name": "Raphaela",
  "last_name": "Reding",
  "email": "rreding2@yellowpages.com",
  "gender": "Female",
  "ip_address": "90.176.136.241"
}, {
  "id": 4,
  "first_name": "Ricki",
  "last_name": "McInerney",
  "email": "rmcinerney3@mashable.com",
  "gender": "Female",
  "ip_address": "114.215.154.113"
}
`
JSON.parse(jsonString)



// JSON and Error Handling
JSON.parse(jsonString)
JSON.stringify(tasks)

try {
  // code that could error and you can't prevent it
} catch(error) {
  // what to do if it does error
}

// this will go with fetching code in Week 5




// Object Oriented = structure of code where all the functions are attached to objects
// Extremely object oriented: Java
// Javascript is much more Function-oriented (Functional programming)


// Class = blueprint for an object that we can use to stamp out new objects
// method = function that's in a property

class User {
    // constructor is the code to run to construct the object's properties
    constructor(userName, userAge) {
        this.name = userName
        this.age = userAge
        this.sayHi1 = function() { console.log("Hello!") }
    }

    sayHi2() { console.log("Hello!") }
}

// new ClassName() think constructor()
const user1 = new User("Natalie", 35)
const user2 = { name: "Natalie", age: 35, sayHi1: function() { console.log("Hello!") }, sayHi2: function() { console.log("Hello!") } }

console.log(user1)
console.log(user2)


// METHODS

// OOP: Why put functions on an object? For organization
// Object oriented most common outside of Javascript

class UserPerson {
    // constructor is the code to run to construct the object's properties
    constructor(userName, userAge) {
        this.name = userName
        this.age = userAge
        this.sayHi1 = function() { console.log("Hello!") }
    }

    // This is not common in Javascript but it is outside of it!
    setAge(newAge) { 
        this.age = newAge 
    }
}

// Remix or a sample of another class
class AdminUser extends UserPerson {
    constructor(userName, userAge, adminStatus) {
        super(userName, userAge) // call the constructor of what I extend
        this.adminStatus = adminStatus
    }
}

// Modern Javascript: Why put functions on an object? To pass functions around
// Function oriented most common inside Javascript

const dataForCopyButton = {
    text: "Copy",
    color: "gray",
    onClick: function() { console.log("Copied the text!") }
}

const dataForPasteButton = {
    text: "Paste",
    color: "darkgray",
    onClick: function() { console.log("Pasted!") }
}



// Javascript Data Types

// Passed by Value
// boolean
// string
// number

let myAge = 35
let spouseAge = myAge // copies the value 35 into spouseAge
myAge++
console.log(myAge) // 36
console.log(spouseAge) // 35

// Passed by Reference
// Why? Because they're huge
// object
// array

let myFavoriteMusic = ["Taylor Swift", "Sabrina Carpenter"]
let daughterFavorite = myFavoriteMusic // points this variable to the same array
myFavoriteMusic.push("Heavy Metal")
console.log(myFavoriteMusic) // ["Taylor Swift", "Sabrina Carpenter", "Heavy Metal"]
console.log(daughterFavorite) // ["Taylor Swift", "Sabrina Carpenter", "Heavy Metal"]
