//Array to store stars objects
var stars=[];

// Global variables to store our browser's window size
var browserWidth;
var browserHeight;

// Specify the number of stars you want visible
var numberOfStars = 50;

// Flag to reset the position of the snowflakes
var resetPosition = false;

// Handle accessibility
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Handle animation accessibility preferences 
function setAccessibilityState() {
    if (reduceMotionQuery.matches) {
      enableAnimations = false;
    } else { 
      enableAnimations = true;
    }
  }

setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

// It all starts here...
function setup() {
    if (enableAnimations) {
      window.addEventListener("DOMContentLoaded", generateStars, false);
      window.addEventListener("resize", setResetFlag, false);
  }}
setup();

function generateStars(){
// get our snowflake element from the DOM and store it
  var originalStar=document.querySelector(".stars");
//querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

// access our star element's parent container
var starContainer=originalStar.parentNode
originalStar.style.display='block';

 // get our browser's size
browserWidth=document.documentElement.clientWidth;
browserHeight = document.documentElement.clientHeight;
//Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

// create each individual snowflake
for (var i=0; i<numberOfStars; i++){
// clone our original snowflake and add it to snowflakeContainer
    var starClone=originalStar.cloneNode(true);
    starContainer.appendChild(starClone);


// set our snowflake's initial position and related properties
var initialXPos=getPosition(50,browserWidth);
var initialYPos=getPosition(50,browserHeight);
var speed = 5 + Math.random() * 40;

// create our Snowflake object
var starObject=new Star(starClone,speed,initialXPos,initialYPos);
stars.push(starObject);
}
// remove the original snowflake because we no longer need it visible
starContainer.removeChild(originalStar);

    moveStars();
}

function moveStars() {
if (enableAnimations) {
      for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
      }      }
    
// Reset the position of all the snowflakes to a new value
if (resetPosition){
    browserWidth=document.documentElement.clientWidth;
    browserHeight=document .documentElement.clientHeight;
    
    for(var i=0; i<stars.length;i++){
        
    }
}

}
