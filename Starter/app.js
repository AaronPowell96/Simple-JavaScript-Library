var g = G$("John", "Doe");

g.greet()
  .setLang("es")
  .greet()
  .greet(true)
  .setLang("en")
  .greet(true);
