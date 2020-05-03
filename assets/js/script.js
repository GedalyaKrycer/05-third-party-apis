// Saves current time to variable
var now = moment();
console.log(now.set('hour', 9))

// Array to capture all of the TextArea Id
let nineAmInput = $("#nineAmInput"); 
let tenAmInput = $("#tenAmInput"); 
let elevenAmInput = $("#elevenAmInput"); 
let twelvePmInput = $("#twelvePmInput"); 
let onePmInput = $("#onePmInput"); 
let twoPmInput = $("#twoPmInput"); 
let threePmInput = $("#threePmInput"); 
let fourPmInput = $("#fourPmInput"); 
let fivePmInput = $("#fivePmInput"); 


// Assigns a time to each textArea Element in an object
let textAreaTimeDesignations = {
    nineAmInput: now.set('hour', 9),
    tenAmInput: now.set('hour', 10),
    elevenAmInput: now.set('hour', 11),
    twelvePmInput: now.set('hour', 12),
    onePmInput: now.set('hour', 13),
    twoPmInput: now.set('hour', 14),
    threePmInput: now.set('hour', 15),
    fourPmInput: now.set('hour', 16),
    fivePmInput: now.set('hour', 20)
};

// Creates an array from the object above
let textAreaTimeArray = Object.values(textAreaTimeDesignations);

console.log(textAreaTimeArray);



// —————————————————————————————————————————————————————————————————————


// Displays current date in the header using moment.js API
$("#currentDay").text(moment().format('dddd ll'));


// —————————————————————————————————————————————————————————————————————


// Loops through textArea hours 
for (let i of textAreaTimeArray) {
    if (now === now) {

        // Sets background to red
        $(textAreaTimeArray[i]).addClass("present");
    } else if (now === now.isAfter()) {
        
        // Sets background to green
        $(textAreaTimeArray[i]).addClass("future");
    } else {
        
        // Sets background to grey
        $(textAreaTimeArray[i]).addClass("past");
    }
    
};











// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist