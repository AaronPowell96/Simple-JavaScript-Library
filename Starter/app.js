var g = G$("John", "Doe");

g.greet()
  .setLang("es")
  .greet()
  .greet(true)
  .setLang("en")
  .greet(true);

$("#login").click(function() {
  var loginGreetr = G$("John", "Doe");

  $("#loginDiv").hide();

  loginGreetr.setLang($("#lang").val()).HTMLGreeting("#greeting", true);
});
