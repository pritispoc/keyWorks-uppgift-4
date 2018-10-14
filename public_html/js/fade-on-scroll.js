/* This is the file where we have all javascript code. Each function should have a comment with the name of the author and purpose of the function*/

function mOver() {

       var x = document.getElementById("firstShape");
       if (x.className === "firstShape") {
           x.className = "box ";
       } else {
           x.className = "triangle-up ";
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
