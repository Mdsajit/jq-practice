$(document).ready(function(){

  

$("#hiderOne").click(function(){
	$("p").hide("slow");
});

$("#hider").click(function(){
	$(".spnTen").hide("fast", function(){
		//use arguments callee so we dont need a named function
		$("#hider").prev().hide("fast", arguments.callee );
	});
});
$( "#shower" ).click(function(){
$(".spnTen").show(2000);
});

for ( var i = 0; i < 5; i++ ) {
  $( "" ).appendTo( document.body );
}
$( ".box" ).click(function() {
  $( this ).hide( 2000, function() {
    $( this ).remove();
  });
});

function doIt() {
  $( ".spnSix,#divFive" ).show( "slow" );
}
// Can pass in function name
$( "#btnFive" ).click( doIt );
 
$( "form" ).submit(function( event ) {
  if ( $( "input" ).val() === "yes" ) {
    $( "" ).show( 4000, function() {
      $( this ).text( "Ok, DONE! (now showing)" );
    });
  }
  $( ".spnSix,#divFive" ).hide( "fast" );
 
  // Prevent form submission
  event.preventDefault();
});

//toggle function

$( "#btn77" ).click(function() {
  $( ".tglpp" ).slideToggle( "slow" );
});

//accordion function
  
  $( function() {
    $( "#accordion" ).accordion();
  } );

  //tags function
  $( function() {
    var availableTags = [
      "Angular",
      "AppleScript",
      "Asp.net",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    });
 
 $( function() {
    $( "#datepicker" ).datepicker();
  } );
 
 $( function() {
    $( "#dialog" ).dialog();
  } );
 //menu function

$( function() {
    $( "#menu" ).menu();
  } );

$( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

 $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );
  $( function() {
    $( "#tabs" ).tabs();
  } );

});


