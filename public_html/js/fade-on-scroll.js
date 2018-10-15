/* This is the file where we have all javascript code. Each function should have a comment with the name of the author and purpose of the function*/
//-----Priti------
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
//-----Priti------

  // --------Menu Alvar------
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

<<<<<<< HEAD



//-------End Menu Alvar-------
=======
//---carrousell---------------
/*
$(document).ready(function() {
  $(".testimonial-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $(".testimonial-carousel-controls .prev"),
    nextArrow: $(".testimonial-carousel-controls .next")
  });
});
*/
//-----------fin carousell

// End Alvar
// =================== Contact page Google Maps - Svetla =========
function myMap() {
    var malmo = {lat: 55.611293, lng: 12.994258};
    var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: malmo
  // mapTypeId: google.maps.MapTypeId.HYBRID
    });
    var marker = new google.maps.Marker({
            position: malmo,
            map: map
    });

    // =================== END Contact page Google Maps - Svetla =========
>>>>>>> dee2516ebb3a62f5abde91c590c676d03568fb27
