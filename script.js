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

$("#currentDay").html(today.toLocaleDateString("en-US", dateFormat) + nth());

// Dynamically add blocks to display each hour of the day with space 
// for user input and a save button.