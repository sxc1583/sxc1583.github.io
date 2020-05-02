function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var modal = document.getElementsByClassName('modal');
var img = document.getElementsByClassName("modal-img");
var span = document.getElementsByClassName("close");
img[0].onclick = function() {
    modal[0].style.display = "block";
}
img[1].onclick = function() {
    modal[1].style.display = "block";
}
img[2].onclick = function() {
    modal[2].style.display = "block";
}
img[3].onclick = function() {
    modal[3].style.display = "block";
}
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}
span[3].onclick = function() {
    modal[3].style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Window.onclick not working as intended
