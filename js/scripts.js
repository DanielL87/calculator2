
// Business (or back-end) logic:

var add = function(number1, number2) {
return number1 + number2;
};

var subtract = function(number1, number2) {
return number1 - number2;
};

var devide = function(number1, number2) {
return number1 / number2;
};


var multiply = function(number1, number2) {
return number1 * number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result)
  });

    $("form#subtract").submit(function(event) {
      event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result2 = subtract(number1, number2);
    $("#output").text(result2)
    });

    $("form#multiply").submit(function(event) {
      event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result3 = multiply(number1, number2);
    $("#output").text(result3)
    });

    $("form#devide").submit(function(event) {
      event.preventDefault();
    var number1 = parseInt($("#devide1").val());
    var number2 = parseInt($("#devide2").val());
    var result4 = devide(number1, number2);
    $("#output").text(result4)

  });
});
