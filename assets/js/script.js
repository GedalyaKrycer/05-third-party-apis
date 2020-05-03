// Displays current date in the header using moment.js API
$("#currentDay").text(moment().format('dddd ll'));

// Array to capture all of the TextArea Id
var textAreaArray = [
    $("#nineAmInput"), 
    $("#tenAmInput"),
    $("#elevenAmInput"),
    $("#twelvePmInput"),
    $("#onePmInput"),
    $("#twoPmInput"),
    $("#threePmInput"),
    $("#fourPmInput"),
    $("#fivePmInput")
]; 









// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist