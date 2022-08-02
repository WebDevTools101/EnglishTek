window.setTimeout(function() {
	$(".alert").fadeTo(500, 0).slideUp(500, function(){
	    $(this).remove(); 
	});
}, 2000);


//display passoword
function showpass() {
  var x = document.getElementById("myPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
