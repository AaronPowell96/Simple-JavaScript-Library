//Safe area for reusable code in libraries etc IIFE
//semicolon first justincase previous script didnt finish
(function(global, $) {
  //new object
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  //hidden within scope of IIFE never directly accessible, list of supported languages
  var supportedLangs = ["en", "es", "ar"];
  //informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola",
    ar: "Salaam"
  };
  //formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
    ar: "As-salāmu ʿalaykum"
  };
  //message logs
  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  };
  //sets methods of Greetr Prototype
  Greetr.prototype = {
    //returns full name of person
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },

    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreetings: function() {
      return formalGreetings[this.language] + ", " + this.fullName() + ".";
    },

    greet: function(formal) {
      var msg;

      // if undefined or null will be coerced to false
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      //this refers to the calling object at execution making the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this; //chainable
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    //Uses jQuery selector to decide the language and print the greet
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }
      if (!selector) {
        throw "missing jQUERY SELECTOR";
      }
      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);

      return this;
    }
  };

  //the actual object created here, allowing us to new an object without calling new
  Greetr.init = function(firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || "Enter First Name";
    self.lastName = lastName || "Enter Last Name";
    self.language = language || "en";

    self.validate();
  };
  //Sets function of Greetr.init to have the same prototype as Greetr.
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, $);
