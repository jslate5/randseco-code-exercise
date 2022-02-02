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

// * In your own words, describe how you would protect against cross-site scripting in a React app without using libraries.

// * You have twelve quarters, thirteen dimes, eight nickels and four pennies. Write a function that calculates the fewest number of coins and what denominations they are to get $2.63.