$(document).ready(function() {
    $("div").css("border", "3px solid red");
    $("h1").fadeIn( 500 );
    $("#p1").click(function() {
        $( this ).hide();
    });
    $(".h3").mouseenter(function() {
        alert("You hovered on me!");
    });
    $("button").click(function() {
        alert("Alert Activated!");
    });
});
