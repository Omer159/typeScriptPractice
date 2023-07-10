// question2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let  nameOfFriends: string  = "Omer";
console.log(`Hello ${nameOfFriends}, would you like to learn some Python today?`);



// question3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nameFormat: string = "Omer";
let toUpperCase = nameFormat.toUpperCase();
let toLowerCase = nameFormat.toLowerCase();
let toTitleCase = nameFormat.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(`${nameFormat} UpperCased: ${toUpperCase} ,${nameFormat} LowerCased: ${toLowerCase}, TitleCased:${toTitleCase}`);





// question4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let famousPerson: string = "LeviAckerman"
let quote : string = "giveup your dreams and die."
console.log (`${famousPerson} once said : "${quote}"`)




// question5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_Person: string = "Sir Zia Khan"
let myMessage : string = "you're fascinating, I admire you sir"
console.log (`My Message To ${famous_Person} : ${myMessage}`)



// question6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let strippedName : string = "Omer"
let strippedName2 : string = "Shafiq"

console.log (`Name Is In Next Line  \n ${strippedName} \t ${strippedName2} ` )





// question7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log (4+4)
console.log (12-4)
console.log (4*2)
console.log (16/2)





// question8
// You should create four lines that look like this: console.log(5 + 3)

console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)



// question9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNumber: number= 777

console.log (`Omer's Favourite Number Is ${favNumber}`)





// question10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// program 1
// here we've first initialized the variable with type and stored string data in it.
 let  nameOfFriend: string  = "Omer";
//  here we have printed the output with variable in the middle by using ${} syntax. 
 console.log(`Hello ${nameOfFriend}, would you like to learn some Python today?`);


// program 2
let nameFormatting: string = "Omer";
// in this line we converted variable into upper and lowercases
let toUpperCased = nameFormatting.toUpperCase();let toLowerCased = nameFormatting.toLowerCase();
// we've used replace(/\b\w/b) command to select the fisrt alphabet  every letter then used function to uppercase the particular charecter.
let toTitleCased = nameFormatting.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// here we've printed the desired outputs.
console.log(`${nameFormatting} UpperCased: ${toUpperCased} ,${nameFormatting} LowerCased: ${toLowerCased}, TitleCased:${toTitleCased}`);




// question11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myOtherFriends: string[] = ['Omer' , 'Ahmed' , 'Onais' , 'Anas' , 'Immad' , ' Ahmed_hashmi']

for (let friend of myOtherFriends){
    console.log (`One Of My Friend is ${friend}`);
}






// question12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let myFriends: string[] = ['Omer' , 'Ahmed' , 'Onais' , 'Anas' , 'Immad' , ' Ahmed hashmi']

for (let friend of myFriends){
    console.log (`Hello ${friend}, hope you're doing fine `);}






// question13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let myFavTranspotation : String[] = ["airline" , "train" ,"daewoo" , "uber" , "R6 Bike"]

console.log(`I would like to travel in ${myFavTranspotation[0]}`)
console.log(`I would like to travel with my friends in ${myFavTranspotation[1]}`)
console.log(`I would like to travel intercity in  ${myFavTranspotation[2]}`)
console.log(`I would like to go mall in ${myFavTranspotation[3]}`)
console.log(`I would like to travel for fun in my ${myFavTranspotation[4]}`)





// question14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner./

let myFriendsIWantToInviteOnSecondDinner: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']

for (let friend of myFriendsIWantToInviteOnSecondDinner){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}




// question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let myFriendsIWantToInviteOnThirdDinner: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']
console.log (` \n ${myFriendsIWantToInviteOnThirdDinner[2]} will not be able to come  \n`)
myFriendsIWantToInviteOnThirdDinner.splice(2,1)
myFriendsIWantToInviteOnThirdDinner.push("Mustafa")
for (let friend of myFriendsIWantToInviteOnThirdDinner){
    console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}




// question16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

 let myFriendsIWantToInvite: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']
 console.log (` \n ${myFriendsIWantToInvite[2]} will not be able to come  \n`)
 myFriendsIWantToInvite.splice(2,1)
 myFriendsIWantToInvite.push("Mustafa")
//   to add the guest in the begining of array
 myFriendsIWantToInvite.unshift("Omer")
 //   to add the guest in the begining of array
 myFriendsIWantToInvite.push("Ahmed") 
 for (let friend of myFriendsIWantToInvite){
     console.log (`Hello ${friend}, hope you're doing fine, would you join me on dinner on weekend `);}

    console.log ("Hey guys, I can only invite  found the bigger table so now I can invite you'll , happy dinner :)")

// question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let myCoolFriendsIWantToInvite: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']

console.log ("Due to limited space we are inviting only few members")

while (myCoolFriendsIWantToInvite.length > 2){
    let uninvitedFriend = myCoolFriendsIWantToInvite.pop()
    console.log (`sorry ${uninvitedFriend} you're not invited now`)}

for (let invitedFriend of myCoolFriendsIWantToInvite){
    console.log (`dear ${invitedFriend} , you're still invited `)
}

myCoolFriendsIWantToInvite.pop()
myCoolFriendsIWantToInvite.pop()
console.log (myCoolFriendsIWantToInvite)





// question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.

let locations: string[] = [ "newyork" , "lasvegas" , "tokyo" , "amastardam"]

console.log ("OriginalOrder")
console.log (locations)

console.log ("AlphabeticalOrder")
let alphabeticalOrder: string [] = [...locations].sort()
console.log (alphabeticalOrder)

console.log ("OriginalOrder Again")
console.log (locations)

console.log ("ReverseOrder")
let reverseAlphabeticalOrder: string []  = ([...locations].sort((alphabet,reverse) => reverse.localeCompare(alphabet)))
console.log (reverseAlphabeticalOrder)

console.log ("OriginalOrder Again")
console.log (locations)

console.log ("ReversedOrder")
let reversedOrder: string [] = [...locations].reverse()
console.log (reversedOrder )

console.log("ReversedAgain")
let reversedOrderAgain: string [] = [...reversedOrder].reverse()
console.log (reversedOrderAgain )

console.log("SortedOriginalError")
let sortedArray: string [] = locations.sort()
console.log (sortedArray)



// question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let mySchoolFriendsIWantToInvite: string[] = ['Muddassir' , 'OmerKhan' , 'MaazAhmed' , 'Tariq' , 'Immad']


while (mySchoolFriendsIWantToInvite.length > 2){
    let uninvitedFriend = mySchoolFriendsIWantToInvite.pop()}
    let  countArray: string []= []

     
for (let  invitedFriend  of mySchoolFriendsIWantToInvite){
    countArray.push(invitedFriend)
    }
console.log(countArray.length)



// question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let progrmmmingLanguages: string [] = [ 'c++' , 'c' , 'c#' , 'java' , 'javascript' , 'ruby' , 'php' , 'css' , 'python']

for (let language of progrmmmingLanguages){
    console.log (language)
}


// question 21
// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type userDetail = {

    readonly DBnumber : number 
    userName : string
    email : string 
    password : number
    isAdmin? : boolean
}

let  newUser : userDetail = {

    DBnumber :101 ,
    userName : "omer" ,
    email : 'omershafiqu3@gmail.com' ,
    password : 123456789 ,
    isAdmin : true
};

console.log(newUser)

//question 21
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// storing number in string array for error
// let myFriendsIWantToInvite17: string[] = ['Muddassir' , 123 , 'MaazAhmed' , 'Tariq' , 'Immad']

let myFriendsIWantToInvite17: string[] = ['Muddassir' , 'MaazAhmed' , 'Tariq' , 'Immad']
console.log (myFriendsIWantToInvite17)





// question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let racingCar = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(racingCar == 'subaru') 


let anime = 'onePiece';
console.log("Is anime == 'subaru'? I predict True.")
console.log(anime == 'onePiece') 

let bestFootballer = 'Messiii';
console.log("Is bestFootballer == 'Messiii'? I predict True.")
console.log(bestFootballer == 'Messiii') 

let mySibling = 'talha';
console.log("Is mySibling == 'talha'? I predict True.")
console.log(mySibling == 'talha') 

let bike = 'yamahaR6';
console.log("Is bike == 'yamahaR6'? I predict True.")
console.log(bike == 'yamahaR6') 

let city = 'karachi';
console.log("Is city == 'karachi'? I predict True.")
console.log(city == 'lahore') 

let favColor = 'yellow';
console.log("Is favColor == 'yellow'? I predict True.")
console.log(favColor == '') 

let occupation = 'programming';
console.log("Is occupation == 'programming'? I predict True.")
console.log(occupation == 'gardening') 

let favCountry = 'Denmark';
console.log("Is favCountry == 'Denmark'? I predict True.")
console.log(favColor == 'USA') 

let favShow = 'Intersteller';
console.log("Is favShow == 'intersteller'? I predict True.")
console.log(favShow == 'indianaJhons') 


// question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let num2 = 2
console.log(num2 == 3)

let string2 = '2'
console.log(string2 == '2')

let one = 1
console.log(one != 1)

let anotherOne = '1'
console.log(anotherOne === '1' )

let word = "OMER"
let newWord  =word.toLowerCase()
console.log(newWord === "omer" )

console.log (11<12)
console.log (11>12)
console.log (11>=12)
console.log (11<=12)

let firstPerson = 'omerShafiq'
let secondPerson = 'omerIkram'
if (firstPerson[0] && secondPerson[0] == 'o'){
    console.log("both omer start fro 'O'")
}
if (firstPerson[0] || secondPerson[0] == 'o'){
    console.log("atleast one started from'O'")
}


if (firstPerson.length > secondPerson.length ){
    console.log(`${firstPerson} name is bigger`)
}else{
console.log(`${secondPerson} name is bigger`)
}

let myFriendsIWantToInvite1: string[] = ['Muddassir' , 'MaazAhmed' , 'Tariq' , 'Immad']

for (let searchingFriend of myFriendsIWantToInvite1){
    if (searchingFriend === "Omer"){
        console.log (`${searchingFriend} is present in array at index `)
    }else {
        console.log (`Omer aint present `)
        break;
    }}




// question 25;
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


let alienColor: string = "green"

if (alienColor == "green"){
    console.log ("player earned 5 points")
}

let anotherAlienColor: string = "Red"

if (anotherAlienColor == "green"){
    console.log ("player earned 5 points")
}





// question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


let gameAlienColor: string = "green"

if (gameAlienColor == "green"){
    console.log ("player earned 5 points")
}
else {
    console.log ("player earned 10 points")
}

let anotherGameAlienColor: string = "Red"


if (anotherGameAlienColor == "green"){
    console.log ("player earned 5 points")
}
else {
    console.log ("player earned 10 points")
}

// question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.


let gameAlienColor31: string = "green"

if (gameAlienColor31 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor31 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor31 == "red"){
    console.log ("player earned 15 points")
}

let gameAlienColor32: string = "yellow"

if (gameAlienColor32 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor32 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor32 == "red"){
    console.log ("player earned 15 points")
}


let gameAlienColor33: string = "red"

if (gameAlienColor33 == "green"){
    console.log ("player earned 5 points")
}
else if (gameAlienColor33 == "yellow"){
    console.log ("player earned 10 points")
}
else if (gameAlienColor33 == "red"){
    console.log ("player earned 15 points")
}


// questiom 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 

let person :number = 2

if ( person < 2) {
    console.log("person is baby")
}
else if ( person >= 2 && person <=4) {
    console.log("person is toddler")
}
else if ( person >= 4 && person <=13) {
    console.log("person is kid")
}

else if ( person >= 13 && person <=20) {
    console.log("person is teenagers")
}

else if ( person >= 20 && person <=65) {
    console.log("person is adult")
}

else if ( person >= 65) {
    console.log("person is elder")
}
else {
    console.log("your given value is wrong")
}


// question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favFruits : string [] = ['mango' , 'peach', 'pineapple' , 'banana', 'apple']

for (let fruits of favFruits){

    if (fruits == 'mango') {
    console.log('You really like mangos!');
    }

    if (fruits == 'peach') {
        console.log('You really like peach!');
        }

    if (fruits == 'pineapple') {
        console.log('You really like pineapple!');
        }

    if (fruits == 'banana') {
            console.log('You really like bananas!');
            }
    if (fruits == 'apple') {
                console.log('You really like apples!');
                }
}


// question 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usersOfSite: string[] = ['omer' , 'onais' , 'talha' , 'rohan' , 'admin']

for (let user of usersOfSite){

        if (user == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        break;
        }
        else if (user != 'admin'){
        console.log(`Welcome ${user}, how are you`);
        }}
        

// question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let usersOfAnotherSite: string[] = ['omer' , 'abdulHadi' , 'muneeb' , 'Mustafa']

    if (usersOfAnotherSite.length == 0 ) {
    console.log('We need to find some users!');
    }
    else {
    console.log(`we have some users`);
    }

    for (let user of usersOfAnotherSite){

        if(usersOfAnotherSite.length != 0 ){
            usersOfAnotherSite.pop()
            usersOfAnotherSite.pop()
            
        }}
    console.log(usersOfAnotherSite)
    console.log("array is now empty")


//question 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.



let currentUsers : string[] = ["Ahmed" , 'OER' , 'Immad' , 'Anas' , 'Ahmedhashmi']
let newUsers : string[] = ["Ahmed" , 'Omer' , 'Amin' , 'Sara' , 'Elishba']


for (let newUser of newUsers){
    let usernameTaken : boolean = false;
    for (let currentUser of currentUsers) {
            if (newUser.toLowerCase() === currentUser.toLowerCase()){
            usernameTaken = true
            break
            }}
if (usernameTaken == true){
    console.log (`${newUser} is taken`)
                }
else{
    console.log (`${newUser} is available`)
 }       
        
        
}


       

//question 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let ordinalNumber : number[] = [1,2,3,4,5,6,7,8,9]
for (let num of ordinalNumber) {
    if (num == 1){
        console.log('1st')
    }
    if (num == 2){
        console.log('2nd')
    }
    if (num == 3){
        console.log('3rd')
    }
    if (num == 4){
        console.log('4th')
    }
    if (num == 5){
        console.log('5th')
    }
    if (num == 6){
        console.log('6th')
    }
    if (num == 7){
        console.log('7th')
    }
    if (num == 8){
        console.log('8th')
    }
    if (num == 9){
        console.log('9th')
    }
}

//question 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let myTypeOfPizza : string[] = ["peperoni pizza" , 'arabian pizza' , 'cheesy delight pizza' , 'extra creamy pizza']

myTypeOfPizza.forEach(pizza => {
    console.log (`I like ${pizza} so much`)
});

console.log (`
I absolutely love pizza! Its mouthwatering flavors and delicious toppings make it one of my all-time favorite foods. Whether it's a ${myTypeOfPizza[0]} or a ${myTypeOfPizza[2]}, pizza always brings me immense joy. I could eat it every day without ever getting tired of its cheesy goodness.`)



//question 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let commonAnimal : string []= ["cat" , 'dog' , 'rabbit' , 'wolf'] 
let commonCharecterstics : string [] = ["nails" , "ears" , 'nose' , 'teeth']


for (let animal of commonAnimal){
    console.log(`A ${animal} would be a great pet`)
}

console.log(`they all have the same ${commonCharecterstics[0]}, ${commonCharecterstics[1]} ,${commonCharecterstics[2]} and ${commonCharecterstics[3]} `)


//question 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

let shirtSize = (text: string  , size: number) => {
    console.log(`${text} - ${size}`);
}

shirtSize("Messi", 10)
shirtSize("Ronaldo" , 7)



//question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const size = ["large",'medium'] as const
let largeShirt = (msg:string,  size:string ) => {
    if (size == "medium" || size == "large" ){
        console.log (`${msg} size : ${size}`)
    }
    else {
        console.log (`${msg} size : S,XL`)
    }
}
largeShirt( " I love TypeScript" , "X")






//question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

let describeCity = (city: string  , country : string = "unknown country") => {
    console.log (`${city} is in ${country}`)
}

describeCity ("Lahore" , "Pakistan")
describeCity ("Amastardam")
describeCity ("Mombay" , "India")



//question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"



let cityCountry = (city: string  , country : string) => {
    console.log (`"${city},${country}"`)
}

cityCountry ("Lahore" , "Pakistan")
cityCountry ("Amastardam", "Netherlands")
cityCountry ("Mombay" , "India")











export {}