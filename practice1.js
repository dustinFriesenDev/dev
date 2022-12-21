// Tweeter counter
var tweet = prompt("hi how are you");
var length = tweet.length;
var remainder = 240 - length;
console.log(tweet.length);
alert("You typed " + length + " characters and have " + remainder + " remaining.");

// Tweeter maintain 140 characters
var tweet = prompt("Compose tweet");
var tweet140 = tweet.slice(0,140);
alert(tweet140);
alert(prompt("compse tweet").slice(0,140));

// Capitalize name
var tweet = prompt("What is your name?");
var name = tweet.slice(0,1).toUpperCase() + tweet.slice(1,tweet.length).toLowerCase();
alert("Hi " + name + "!");
