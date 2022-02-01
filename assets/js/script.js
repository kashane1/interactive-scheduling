// this one line is all i need to jquery the id current day, and then append a brand new p tag with the moment() nested inside it
$( "#currentDay" ).append( "<p>" + moment().format('dddd, MMMM Do YYYY, h:mm:ss a') + "</p>" );
function clockTick() {
    var time = setInterval(function(){
        var time = moment();
        $("#currentDay").children("p").text(time.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
}
clockTick(); // extra // i wanted to show the time ticking on the screen

// after some thought i think i need to use this for changing the color
// moment().startOf('day').fromNow();        // 21 hours ago
// after trying that route, decided to go with this way and it works alot better
var currentHour = moment().format('h');
var amOrPm = moment().format('a'); 

// settings that turn blocks grey after currentHour passes that time block
if ((currentHour >= 10 && amOrPm === 'am') || (currentHour >= 1 && amOrPm === 'pm')) {
    $("#block1").children("textarea").css("backgroundColor", "lightgrey");
}
if ((currentHour >= 11 && amOrPm === 'am') || (currentHour >= 1 && amOrPm === 'pm')) {
    $("#block2").children("textarea").css("backgroundColor", "lightgrey");
}
if ((currentHour >= 12 && amOrPm === 'pm') || (currentHour >= 1 && amOrPm === 'pm')) {
    $("#block3").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 1 && amOrPm === 'pm') {
    $("#block4").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 2 && amOrPm === 'pm') {
    $("#block5").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 3 && amOrPm === 'pm') {
    $("#block6").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 4 && amOrPm === 'pm') {
    $("#block7").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 5 && amOrPm === 'pm') {
    $("#block8").children("textarea").css("backgroundColor", "lightgrey");
}
if (currentHour >= 6 && amOrPm === 'pm') {
    $("#block9").children("textarea").css("backgroundColor", "lightgrey");
}

// then setting the color orange for the when the currentHour is in that time block
if (currentHour == 9 && amOrPm === 'am') {
    $("#block1").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 10 && amOrPm === 'am') {
    $("#block2").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 11 && amOrPm === 'am') {
    $("#block3").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 12 && amOrPm === 'pm') {
    $("#block4").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 1 && amOrPm === 'pm') {
    $("#block5").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 2 && amOrPm === 'pm') {
    $("#block6").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 3 && amOrPm === 'pm') {
    $("#block7").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 4 && amOrPm === 'pm') {
    $("#block8").children("textarea").css("backgroundColor", "red");
}
if (currentHour == 5 && amOrPm === 'pm') {
    $("#block9").children("textarea").css("backgroundColor", "red");
}

// now need to create local storage for each unique textarea when save button is clicked
$("#block1").children("button").click(function() {
    localStorage.setItem("blocktext1", $("#block1").children("textarea").val())
});
$("#block2").children("button").click(function() {
    localStorage.setItem("blocktext2", $("#block2").children("textarea").val())
});
$("#block3").children("button").click(function() {
    localStorage.setItem("blocktext3", $("#block3").children("textarea").val())
});
$("#block4").children("button").click(function() {
    localStorage.setItem("blocktext4", $("#block4").children("textarea").val())
});
$("#block5").children("button").click(function() {
    localStorage.setItem("blocktext5", $("#block5").children("textarea").val())
});
$("#block6").children("button").click(function() {
    localStorage.setItem("blocktext6", $("#block6").children("textarea").val())
});
$("#block7").children("button").click(function() {
    localStorage.setItem("blocktext7", $("#block7").children("textarea").val())
});
$("#block8").children("button").click(function() {
    localStorage.setItem("blocktext8", $("#block8").children("textarea").val())
});
$("#block9").children("button").click(function() {
    localStorage.setItem("blocktext9", $("#block9").children("textarea").val())
});

// i got this loop to work on page load to grab all local storage and fill each timeblock with saved entries
for (var i = 1; i<10 ; i++){
    $("#block" + i + "").children("textarea").val(localStorage.getItem("blocktext"+i+""));
};  

// idk if this is possible rn
// i was trying for a combined way of saving each text area on each button click
// for (var i = 1; i<10 ; i++){
//     $("#block" + i).children("button").click(function() {
//         var storeText = $("#block" + i).children("textarea").val()
//         localStorage.setItem("blocktext" + i, storeText)
//     });
// };