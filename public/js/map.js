function hovIn() {
 var areaID = $(this).attr('id');
 //alert('['+areaID+']');
  if (areaID == 'gaya') {
   $('#myDiv').show();
  }
  if (areaID == 'samved') {
   $('#myDiv1').show();
  }
  if (areaID == 'kanchipuram') {
   $('#myDiv2').show();
  }
}
function hovOut() {
  $('#myDiv').hide();
}
$('map area').hover(hovIn, hovOut);


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("seeMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "see more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "see less";
    moreText.style.display = "inline";
  }
}
