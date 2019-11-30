
$(document).ready(function () {

// Exercise 1
$("#clicker").click(function(){
$( "#secret" ).fadeIn($( "#secret" ).slideDown( "slow")) ;
});

$(".text_t").hide();

$(".toggle").click(function(){
    $(".text_t").toggle();
});



// Exercise 2
$("#clicker_2").click(function(){
    $( ".secret_2" ).slideUp( "slow") ;
    });

//// Exercise 3


$("#clicker_3").click(function(){
    $( ".goodJob" ).attr("src","goodjob.gif");
    });







});
