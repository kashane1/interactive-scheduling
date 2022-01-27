// need to start by assigning element variables
var block1 = $('block1');
var block2 = $('block2');
var block3 = $('block3');
var block4 = $('block4');
var block5 = $('block5');
var block6 = $('block6');
var block7 = $('block7');
var block8 = $('block8');
var block9 = $('block9');

// this one line is all i need to jquery the id current day, and then append a brand new p tag with the moment() nested inside it
$( "#currentDay" ).append( "<p>" + moment().format('Do MMMM, YYYY') + "</p>" );

// then i want to build each li of the list, which i was able to mostly do on the html
// was easy enough to build the li with the css classes given to us 


// after some thought i think i need to use this for changing the color
// moment().startOf('day').fromNow();        // 21 hours ago
var hoursPast = moment().startOf('day').fromNow();
console.log(hoursPast);
if (hoursPast > 9 || hoursPast ===  "a day ago") {
    $("#block1").children("textarea").attr({
        backgroundColor: "grey",
        background: 'solid'
    });
}