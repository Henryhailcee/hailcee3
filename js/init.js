$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $("#nav-placeholder").load("nav.html");
    $('.carousel.carousel-slider').carousel
    ({
      fullWidth: true,
      indicators: true,

    });
    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5500);
}
  });
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("d").innerHTML = days + "d ";
    document.getElementById("h").innerHTML = hours + "h ";
    document.getElementById("m").innerHTML = minutes + "m "
    document.getElementById("s").innerHTML = seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("d").innerHTML = "EXPIRED";
      document.getElementById("h").innerHTML = "EXPIRED";
      document.getElementById("m").innerHTML = "EXPIRED";
      document.getElementById("s").innerHTML = "EXPIRED";
    }
  }, 1000);
  $.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("hform");
   //var button = document.getElementById("my-form-button");
   var status = document.getElementById("status");

   // Success and Error functions for after the form is submitted

   function success() {
     form.reset();
     status.classList.add('success');
     status.innerHTML = "Thanks!";
   }

   function error() {
     status.classList.add('error');
     status.innerHTML = "There was a problem.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }
