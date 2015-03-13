$(function(){
	$('#email-form').submit(function () {
		submit_click();
		return false;
	});
});

function submit_click() {
	$("#form-result").removeClass("error");
	$("#form-result").text("");
	$.ajax({
		type: "POST",
		url: "http://codeschool-backend.herokuapp.com/subscribe/",
		data: { email: $("#email_text").val() }
	}).done(function( msg ) {
		$("#form-result").removeClass("error");
		$("#form-result").text("OK, you're on the list!");
	}).fail(function( jqXHR, textStatus ) {
		$("#form-result").addClass("error");
		$("#form-result").text("Oops! Something went wrong. Please try again later.");
	});
}