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

// Add rows for each time
for(i=1; i < 10; i++)
{
  var timeRow = $("<div>").attr({class: "row mb-5", id: i}).appendTo(".container");
}

// Add Time column
// If the time is between 9-12 then make the 9-12 divs
for(i = 9; i < 13; i++)
{
  for(j = 1; j < 5; j++)
  {
  $("<div>").attr({id: i, class: "col m-2"}).text(i + " a.m.").appendTo(timeRow.attr("id", j));
  }
  for(j = 5; j < 13; j++)
{
  $("<div>").text(i + " p.m.").attr({id: i, class: "col m-2"}).appendTo(".container");
}
}


// for user input and a save button.