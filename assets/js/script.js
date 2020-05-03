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


// Assigns a time to each textArea Element in an object and stored it as an attribut on that html element
let textAreaTimeDesignations = {
    nineAmTime: $(nineAmInput).attr("data-hour", now.hour(9)),
    tenAmTime: $(nineAmInput).attr("data-hour", now.hour(10)),
    elevenAmTime: $(nineAmInput).attr("data-hour", now.hour(11)),
    twelvePmTime: $(nineAmInput).attr("data-hour", now.hour(12)),
    onePmTime: $(nineAmInput).attr("data-hour", now.hour(13)),
    twoPmTime: $(nineAmInput).attr("data-hour", now.hour(14)),
    threePmTime: $(nineAmInput).attr("data-hour", now.hour(15)),
    fourPmTime: $(nineAmInput).attr("data-hour", now.hour(16)),
    fivePmTime: $(nineAmInput).attr("data-hour", now.hour(17))
};

console.log(textAreaTimeDesignations.nineAmTime);


// Creates an array from the object above
let textAreaTimeArray = Object.values(textAreaTimeDesignations);





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

$("button").on("click", function(event) {
    event.preventDefault();

    // Set up values to gather on button click
    localStorage.setItem('input9', JSON.stringify(nineAmInput));
    localStorage.setItem('input10', JSON.stringify(tenAmInput));
    localStorage.setItem('input11', JSON.stringify(elevenAmInput));
    localStorage.setItem('input12', JSON.stringify(twelvePmInput));
    localStorage.setItem('input1', JSON.stringify(onePmInput));
    localStorage.setItem('input2', JSON.stringify(twoPmInput));
    localStorage.setItem('input3', JSON.stringify(threePmInput));
    localStorage.setItem('input4', JSON.stringify(fourPmInput));
    localStorage.setItem('input5', JSON.stringify(fivePmInput));
    
});








// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist