/* This is the file where we have all javascript code. Each function should have a comment with the name of the author and purpose of the function*/

function mOver() {

       var x = document.getElementById("firstShape");
       if (x.className === "firstShape") {
           x.className = "box loading";
       } else {
           x.className = "triangle-up loading";
       }
   }



function mOut() {

   var x = document.getElementById("firstShape");
   if (x.className === "firstShape") {
       x.className = "triangle-up loading";
   } else {
       x.className = "box loading";
   }
}


// selectAlphaMode(previousWidth);

function setAlpha(alpha) {
    $("nav").css("background-color","rgba(0, 0, 0, " + alpha + ")");
}


// setAlpha(0.5);

function calcAlpha() {

    let alpha = 0;
    // defines a variable for how long to go up in the html document
     // calling the jquery function to pick current scroll location
    let scroll = $(document).scrollTop();
    //at which pixel does the fade start begin
    const fadeStart = 0;

    //at which pixel does the fade stop
    const fadeStop = 200;

    // difference between start and stop
    const fadeLength = fadeStop - fadeStart;
    // transparency level parameter alpha set based on current scroll level
    if (scroll < fadeStart) {
        alpha = 0;
    } else if (scroll < fadeStop) {
        alpha = (scroll - fadeStart) / fadeLength;
    } else {
        alpha = 1;
    }
    // returns the transparency alpha level based on scroll position
    return alpha;
}


  // Menu Alvar
  function myFunction() {
    var x = document.getElementById("myTopnav");
    // elem menu
    var y1 = document.getElementById("home");
    var y2 = document.getElementById("work");
    var y3 = document.getElementById("contact");
    var y4 = document.getElementById("about");
    if (x.className === "topnav") {
        x.className += " responsive";
        y1.className += " slideInRight delay-2s";
        y2.className += " slideInRight delay-2s";
        y3.className += " slideInRight delay-2s";
        y4.className += " slideInRight delay-2s";

    } else {
        x.className = "topnav";
        y1.className = "animated slideOutRight delay-2s";
        y1.className = "animated";
        y2.className = "animated";
        y3.className = "animated";
        y4.className = "animated";

    }
}

// End Alvar
