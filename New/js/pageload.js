$("#bg").hide();
$("#pagecontent").load("home.html");

function loadtask(pagename){
	$('#pagecontent').fadeOut('slow', function(){
	     $("#pagecontent").hide().load(pagename + ".html").hide().delay(500).fadeIn("slow");
	     $("#close-button").click();

	     if (pagename == "home"){
		     $("#bg").delay(500).fadeOut("slow");
	     } 
	     else {
			 $("#bg").delay(500).fadeIn("slow");
	     }
	     
	     
	     
	});
}