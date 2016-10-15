//make sure code is loaded after jQuery is initialized
$(document).ready(function(){

	//function for showing effects
	$("#hide").mouseover(function(){
		$("#1").hide("slow");//.delay(1500).show("slow");
	});

	$("#show").click(function(){
		$("#1").show("slow");
	});

	$("#b2").dblclick(function(){
		$("#2").slideUp(500).delay(1000).slideDown(500);
	});
	
	$("#b3").hover(function(){
		$("#3").fadeOut(2000).delay(1000).fadeIn(1000);
	});	
	
	$("#b4").mouseleave(function(){
		$("div").animate(
		{
			left:'250px'
		});
	});

});

// Create a button to stop all animations on the page:
$( "<button type='button'></button>" )
    .text( "Stop All Animations" )
    .on( "click", function() {
        $( "body *" ).filter( ":animated" ).stop();
    })
    .appendTo( document.body );
