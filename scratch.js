
// ARRAY = LIST

const listOfFriends = ["Dawn", "Mayank", "Steve"]
// listOfFriends is a const variable with an array in it

// Access info in an array
listOfFriends[2] // Steve

listOfFriends[1] += " Saxena"

// Arrays are sandwiches
// [] pieces of bread
// Arrays have an order and indexes

const sandwich = ["mayo", "tomato", "bacon"]



// OBJECT = THING

let friend = {
    lastName: "Saxena", // property
    currentClass: "Javascript", // property
    name: "Mayank", // property
}
// friend is a variable that is set to an object with 3 properties

// information is grouped together

// Access info in an object
friend.name
friend.currentClass

// Objects are burritos
// {} tortillas
// Objects do not have an order, they have properties


// If friend is a let variable instead of a const variable
// we could throw out the object and put in something entirely different
friend = 3



// DATA TYPES
// boolean
// string
// number
// null/undefined
// array
// object




// REAL WORLD
// ecommerce

const products = [
    {
        id: 0,
        title: "Special Shoes",
        brand: "Nike",
        price: 500
    },
    {
        id: 1,
        title: "Shirt",
        brand: "Adidas",
        price: 30
    }
]

const itemsInCart = [
    {
        id: 0,
        quantity: 3,
        product: {
            id: 0,
            title: "Special Shoes",
            brand: "Nike",
            price: 500
        }
    }
]

// The brand of the product of the first item of the cart
// The first cart item's product's brand
itemsInCart[0].product.brand


const jsonString = `{
  "name": "Patrick",
  "address": {
    "city": "Atlanta",
    "state": "Georgia",
    "zipCode": 88343
  },
  "procedures": [
    {
        "id": 0,
        "type": "surgery"
    }
  ]
}`
// backticks `` quotation marks "" single quotation marks '' all produce a string
// parse from JSON (parse from a string in JSON format)
// parse means turn it from one format into another

const patient = JSON.parse(jsonString)
// patient will be this:
// const patientWillBe = {
//   "name": "Patrick",
//   "address": {
//     "city": "Atlanta",
//     "state": "Georgia",
//     "zipCode": 88343
//   },
//   "procedures": [
//     {
//         "id": 0,
//         "type": "surgery"
//     }
//   ]
// }
console.log(patient)


const arrayJsonString = `[
    {
        "id": 0,
        "title": "Special Shoes",
        "brand-name": "Nike",
        "price": 500
    },
    {
        "id": 1,
        "title": "Shirt",
        "brand-name": "Adidas",
        "price": 30
    }
]`

const parsedArray = JSON.parse(arrayJsonString)

// Weird thing
// Indexing into an object at a property name
// Because we can't do this: parsedArray[0].brand-name
parsedArray[0]["brand-name"]


async function fetchData() {
    // Hey superheroapi.com, can I have your data?
    // We get a string in JSON format
    const heroJSONString = await fetch(
        "https://www.superheroapi.com/api.php/1079471338910705/731"
    ).then((response) => response.text());

    // Now it's Javascriptified to actually access the properties and things
    const heroObject = JSON.parse(heroJSONString)

    console.log(heroObject.name)
}
fetchData()




// OOP = let's make everything an object
// Let's make a class to make an object with

// Making an object by hand:
const madeByHandProduct = {
    id: 0,
    title: "Special Shoes",
    brand: "Nike",
    price: 500
}
const madeByHandProduct2 = {
    id: 0,
    title: "Shirt",
    brand: "Adidas",
    price: 30
}

// A very weird way to make an object
const weirdlyMadeProduct = {
    // this is an empty object
}
weirdlyMadeProduct.id = 0
weirdlyMadeProduct.title = "Special Shoes"
weirdlyMadeProduct.brand = "Nike"
weirdlyMadeProduct.price = 500

// Classes are like a blueprint or a recipe
// It's a plan for how to make things

// class names ALWAYS start with a capital letter
class Product {
    // A function that builds the object for us
    // constructor() {
    //     // Use "this" which means the object we're building
    //     // "this" is basically like weirdlyMadeProduct
    //     this.id = 0
    //     this.title = "Special Shoes"
    //     this.brand = "Nike"
    //     this.price = 500
    // }

    // constructor is special for classes, we never use it anywhere else
    // has to be called constructor
    constructor(title, brand, price) { // title = "Special Shoes"
        // Use "this" which means the object we're building
        // "this" is basically like weirdlyMadeProduct
        this.id = 0
        this.title = title
        this.brand = brand
        this.price = price
    }
}

const classMadeProduct = new Product("Special Shoes", "Nike", 500)
const classMadeProduct2 = new Product("Shirt", "Adidas", 30)

// When you see "new ClassName" think "constructor of that Class"

console.log(madeByHandProduct)
console.log(weirdlyMadeProduct)
console.log(classMadeProduct)

console.log(classMadeProduct.id) // THIS WORKS
console.log(Product.id) // DOES NOT WORK



// OOP says EVERY FUNCTION SHOULD BE A METHOD
// Method is just a fancy word for a function that's in a property (or ON an object)
// OOP is just a way to structure and organize the code it doesn't provide or remove functionality

class ColorGuessingGame {

    playGame() {
        const correct = this.checkGuess()
    }

    checkGuess() {
        return true 
    }
}

const game = new ColorGuessingGame()
game.playGame()

// Concepts
// Polymorphism
// Inheritance
// Encapsulation

// NON OOP

function playGame() {
    const correct = checkGuess()
}

function checkGuess() {
    return true
}

playGame()

// Concepts
// Functional Programming (kind of)
// pure functions
// immutable state
// type system
// modules
// callbacks
// asynchronous


// try catch is used when there's a possible error that you CANNOT prevent
// The classic one is the internet going out
// Talking across the internet can error out if the internet goes out

// If you're going to throw make sure that something will catch it



// PASSED BY REFERENCE

// DATA TYPES PASSED BY VALUE
// boolean
// string
// number

// DATA TYPES PASSED BY REFERENCE
// array
// object


// Passed by value means it's copied into a new variable

let myAge = 33
let mitchellsAge = myAge // copy 33 into mitchellsAge

myAge++

console.log(myAge) // 34
console.log(mitchellsAge) // 33


// Passed by reference means both variables are pointed to the same thing

let myHouse = { address: "123 main st", color: "blue" }
let mitchellsHouse = myHouse // points mitchellsHouse to the object on line 315

myHouse.color = "bright pink"

console.log(myHouse) // { address: "123 main st", color: "brightPink" }
console.log(mitchellsHouse) // { address: "123 main st", color: "brightPink" }



// How this effects const

const age = 3
age++ // error because reassign

const user = { age: 3}
user.age++ // no error because no reassign of user, just reassign of the age property
user = { age: 4 } // error because reassign


const list = ["a", "b", "c"]
list.push("d") // no reassign, all good
list = ["a", "b", "c", "d"] // reassign, no good


if((["a", "b"]) === (["a", "b"])) { // FALSE
    alert("This is impossible!")
}


// You text your friend a picture and it's passed by value
// If they draw a moustache on the picture you don't see that on your phone
// You text your friend a map pointer and it's passed by reference
// If they draw a moustache on the restaurant you see that when you go there


// This is how we would make it by hand
const reactBootcamp = {
    name: "React",
    level: "Advanced",
    students: [

    ],
    registerStudents() {
        // code here
    },
    listStudents() {
        // code here
    }
}

// If the array is empty
if(reactBootcamp.students.length === 0) {
    
}