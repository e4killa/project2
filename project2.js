// Tyrone Ruffin
// SDI 1301
// Project 2

// My Variables
var Myname =  "Tyrone Ruffin" // String
var tuitionCost = 60000 // Number
var sDiProjects = [ 
    "week1",
    "week2",
    "week3",
    "week4"
]; // Array
var hardCourse = (true); // boolean

// My output
console.log(" Hello Class My name is " +  Myname + ".");
console.log(" I am currently in SDI class at Full Sail university");
console.log(" In this class we have 4 main projects.");

// My conditionals
  if (tuitionCost <= 60000) {
    tuitionCost = tuitionCost - 450;
    console.log(" If I fail this course I will be paying more than " + tuitionCost + " in tuiton.");
  } else {
    console.log(" If I pass this class I will only be paying " + tuitionCost + " in tuition.");
  }

if(hardCourse === true) {
     (hardCourse = hardCourse)
     console.log(" In my opinion it is " + hardCourse + " that this class is pretty hard" + ".");
} else {
    console.log(" This class is moderate in difficulty" + ".");
};

