//toggle
$(document).ready(function() {
  $("#box1").click(function() {
    $("#design").toggle();
    $("#design-img").toggle();
  });

  $("#box2").click(function() {
    $("#development").toggle();
    $("#development-img").toggle();
  });

  $("#box3").click(function() {
    $("#product").toggle();
    $("#product-img").toggle();
  });
});

//portfio hover show
$(document).ready(function() {
  $("#work1").hover(function() {
    $("#show1").toggle();
  });

  $("#work2").hover(function() {
    $("#show2").toggle();
  });

  $("#work3").hover(function() {
    $("#show3").toggle();
  });

  $("#work4").hover(function() {
    $("#show4").toggle();
  });

  $("#work5").hover(function() {
    $("#show5").toggle();
  });

  $("#work6").hover(function() {
    $("#show6").toggle();
  });

  $("#work7").hover(function() {
    $("#show7").toggle();
  });

  $("#work8").hover(function() {
    $("#show8").toggle();
  });
});

//form function
function myMessage() {
  var name = document.getElementById("name").value; //mce-FNAME
  var email = document.getElementById("email").value; //mce-EMAIL
  var message = document.getElementById("comment").value; //mce-MMERGE2

  if (email !== "" && name !== "" && message !== "") {
    // document.getElementById("pop").innerHTML =
    alert("Hello" + " " + name + " we have received your message. we wiil reach out to you soon");
  } else if (email == "" || name !== "" || message !== "") {
    alert("Please fill in all the details");
  }
}
