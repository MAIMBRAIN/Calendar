// Set todays date underneath the description in the currentDay id
// Day / month / day

var today = new Date();
var dateFormat = {weekday: 'long', month:'long', day:'numeric'}
var d = today.toLocaleDateString(day="numeric");

// Ordinal Date function
const nth = function(d) 
{
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) 
    {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
}

// Today's current date
$("#currentDay").html(today.toLocaleDateString("en-US", dateFormat) + nth());

// Updates the page's current hour
function hourUpdater() {
  // Get the current hour
  var currentHour = moment().hours();

  // Loops over each time block
  $(".time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (hourBlock < currentHour) {
      $(this).addClass("past");
    } 
    else if (hourBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourUpdater();

// Check time if it needs to be updated
var interval = setInterval(hourUpdater, 15000);

// listen for save button clicks
$(".saveBtn").on("click", function() {
  // get nearby values
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save in localStorage
  localStorage.setItem(time, value);
});

// Load saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
