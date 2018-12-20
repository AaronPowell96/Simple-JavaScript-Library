//gets new object without using new due to library
var g = G$("John", "Doe");

//greets in english and then in spanish, then formally, then english formally
g.greet()
  .setLang("es")
  .greet()
  .greet(true)
  .setLang("en")
  .greet(true);

//uses jQuery to get the login id, click event, calls the greet method with the name john doe.
$("#login").click(function() {
  var loginGreetr = G$("John", "Doe");

  $("#loginDiv").hide();

  //sets the language based on the value of the selector language.
  loginGreetr.setLang($("#lang").val()).HTMLGreeting("#greeting", true);
});
