/*fade on scroll
autor: Priti
created october 3 2018
*/
// defines how many  pixels  in the viewport breakpoint
const breakpoint = $(".wrapper").width();

/// define the initial width of the view port
let previousWidth = $(window).width();

selectAlphaMode(previousWidth);

$(window).resize(function(){
    let width =  $(window).width();

    if((width < breakpoint && previousWidth >= breakpoint) || (width >= breakpoint && previousWidth < breakpoint)) {
        selectAlphaMode(width);
    }
    previousWidth = width;
});

// toggle scroll bar transparency as per viewport width
function selectAlphaMode(width) {
    if (width < breakpoint) {
        $(document).scroll().off();
        setAlpha(1);
    } else {
        setAlpha(calcAlpha());
        $(document).scroll(function(){
        setAlpha(calcAlpha());
        });
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


  // Menu Alvar-----
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





