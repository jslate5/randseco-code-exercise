const { exit } = require("yargs")

// * Use JavaScript to remove the duplicates from:
 let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
 let unique = []
 arr.forEach((element, index) => {
     if(!unique.includes(arr[index])){
         unique.push(element)
     }
 })
arr = unique
console.log("The array without duplicates is: " + arr)

// * Check if this string is a palindrome

let string = "madam"
let backwards = ""
for(let i=string.length; i>=0; i--){
    backwards += string.charAt(i)
}
console.log(string + " backwards is " + backwards)
if(string === backwards){
    console.log("This is a palindrome")
} else console.log("This is not a palindrome")

// * Find the factorial of the following

let number = 5;
let start = number;
let total = 1;
for(let i=number; number>0; number--){
    total *= number
}
console.log("The factorial of " + start  + " is " + total)


// * Write an small html page, then use JavaScript to obtain values from any api and display on the page.
    //See /app directory

// * In your own words, describe how you would protect against cross-site scripting in a React app without using libraries.
    //The simpelest way to protect against XSS attaks in React is to embed user input in JSX. Instead
    //of modyfing the DOM directly, encapsulating user input witin { } protects the app because it will
    //be converted a string before it is rendered. For example, if you had `const input = <div>{name} <script>alert("You are being attacked")</script></div>`,
    //the script would not execute because it is processed as a string.

// * You have twelve quarters, thirteen dimes, eight nickels and four pennies. Write a function that calculates the fewest number of coins and what denominations they are to get $2.63.

// Input cointaining the NUMBER of quarters, dimes, nickels, and pennies -- in this order
// calculate([12, 13, 8, 4], 2.63)
function calculate(coins, total){
    let current = 0 //Keeps track of running total dollar amount
    let numQ = 0 //Current number of quarters used
    let numD = 0 //Current number of dimes used
    let numN = 0 //Current number of nickels used
    let numP = 0 //Current number of pennies used

    for(let i=coins[0]; i>0; i--){    //Add coins according to their value until the exact value has been reached, or adding another coin will exceed the target value
        if(current + 0.25 >= total){
            break
        }
        else{
            current += 0.25
            numQ++
        }
    }

    for(let i=coins[1]; i>0; i--){
        if(current + 0.10 >= total){
            break
        }
        else{
            current += 0.10
            numD++
        }
    }

    for(let i=coins[2]; i>0; i--){
        if(current + 0.05 >= total){
            break
        }
        else{
            current += 0.05
            numN++
        }
    }

    for(let i=coins[3]; i>0; i--){
        if(current + 0.01 >= total){
            break
        }
        else{
            current += 0.01
            numP++
        }
    }

    if(numQ + numD + numN + numP === coins[0] + coins[1] + coins[2] + coins[3]){
        console.log("Cannot reach target value with given number of coins")
        exit(0)
    }

    console.log("In order to reach $" + total + ":")
    console.log("Number of quarters: " + numQ)
    console.log("Number of dimes: " + numD)
    console.log("Number of nickels: " + numN)
    console.log("Number of pennies: " + numP)
}
calculate([12, 13, 8, 4], 2.63)
