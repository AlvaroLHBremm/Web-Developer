const display = document.getElementById("display");
var firstExpression 		= true;
var isFirstFloatDeclaration = true;
var lastAction = "action";
var isResult = false;


// keyboard.addEventListener('click', KeyboardInput);


function KeyboardInput(action, value)
{
	// console.log(action, value);

	const isButton = event.target.nodeName === 'BUTTON';
	if (!isButton) {
		return;
	}
	if(action === "action")
	{
		switch(value){
			case '+':
			case '-':
			case '/':
			case 'x':
				if(lastAction === "value"){	
					display.value += ' ' + value + ' '; 
					isFirstFloatDeclaration = true;
				}
				break;
			case 'c':
				display.value = 0;
				firstExpression = true;
				isFirstFloatDeclaration = true
				break;
			case '.':
				if(lastAction === "value" && isFirstFloatDeclaration == true){	
					display.value += value;
					isFirstFloatDeclaration = false;
				}
				break;
			case '=':
				display.value = eval(display.value.replace("x", "*"));
				firstExpression = true;
				action = "value";
				break;
		}
	}
	else{
		if(firstExpression === true){
			display.value = value;
			firstExpression = false;
		}
		else{
				display.value += value;
		}
	}
	lastAction = action;
}


 //  	console.dir(event.target.id);





// function Calculate(number1, number2, operation){
// 	var result;
// 	switch(operation)
// 	{
// 		case "sum": result = number1 + number2; break;
// 		case "sub": result = number1 - number2; break;
// 		case "sum": result = number1 * number2; break;
// 		case "sum": result = number1 / number2; break;
// 	}
// }


