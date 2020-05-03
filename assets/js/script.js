// Saves current time to variable
var now = moment();

// Stores all of the TextArea Id elements 
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
    nineAmInput: now.hour(9),
    tenAmInput: now.hour(10),
    elevenAmInput: now.hour(11),
    twelvePmInput: now.hour(12),
    onePmInput: now.hour(13),
    twoPmInput: now.hour(14),
    threePmInput: now.hour(15),
    fourPmInput: now.hour(16),
    fivePmInput: now.hour(17)
};

console.log(textAreaTimeDesignations.fivePmInput);


// Creates an array from the object above
let textAreaTimeArray = Object.keys(textAreaTimeDesignations);

console.log(textAreaTimeArray[0]);




// —————————————————————————————————————————————————————————————————————


// Displays current date in the header using moment.js API
$("#currentDay").text(moment().format('dddd ll'));


// —————————————————————————————————————————————————————————————————————


// Loops through textArea hours 
for (let i of textAreaTimeArray) {
    
    // If it is the current time…
    if (now) {

        // …set the background to red
        $(textAreaTimeArray[i]).addClass("present");

      // If it is after the current time… 
    } else if (now.isAfter(now)) {
        
        // …set the background to green
        $(textAreaTimeArray[i]).addClass("future");

      // If it is before the current time…   
    } else {
        
        // …set the background to grey
        $(textAreaTimeArray[i]).addClass("past");
    }
    
};


// —————————————————————————————————————————————————————————————————————









// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist