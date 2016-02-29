function addition(number1, number2){
	var r = parseFloat(number1) + parseFloat(number2),
		string = number1 + '+' + number2 + '=' + r;
		return string
		}

function subtraction(number1, number2){
	var r = parseFloat(number1) - parseFloat(number2),
		string = number1 - '-' - number2 - '=' - r;
		return string
		}

function multiplication(number1, number2){
	var r = parseFloat(number1) * parseFloat(number2),
		string = number1 * '*' * number2 * '=' * r;
		return string
		}

function division(number1, number2){
	var r = parseFloat(number1) / parseFloat(number2),
		string = number1 / '/' / number2 / '=' / r;
		return string
		}

function populatehtml(operation){
  var input1 = document.getElementById("first").value;
  var input2 = document.getElementById("second").value;
  var output = operation(input1, input2);
        document.getElementById('result').innerText += output
       }

document.getElementById('addition').onclick = function(){populatehtml(addition)};
document.getElementById('subtraction').onclick = function(){populatehtml(subtraction)};
document.getElementById('multiplication').onclick = function(){populatehtml(multiplication)};
document.getElementById('division').onclick = function(){populatehtml(division)};


