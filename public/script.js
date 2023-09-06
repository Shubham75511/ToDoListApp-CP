
// Array of month names for formatting
const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
];
// Array of suffixes for days
const daySuffixes = ["st", "nd", "rd", "th"];

// Get the current date
const currentDate = new Date();

// Get the day of the week
const dayOfWeek = currentDate.toLocaleDateString("en-US", { weekday: "long" });

// Get the month and day
const month = monthNames[currentDate.getMonth()];
const day = currentDate.getDate();
const daySuffix = daySuffixes[(day >= 11 && day <= 13) ? 3 : (day % 10) - 1] || daySuffixes[3];

// Format the final date string
const formattedDate = `${dayOfWeek}, ${month} ${day}${daySuffix}`;
document.getElementById("demo").innerHTML = formattedDate;



