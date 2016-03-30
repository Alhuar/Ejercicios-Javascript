 var user = {};
  var responses = [];


function question1() {
 
  var name = prompt('What is your name?')
  user.name = name
 
}

question1();


function question2(){
	answer2 = prompt("Is tomato a vegetable? (yes or no)")
	answer2_lower = answer2.toLowerCase();
	if (answer2_lower === 'yes'){
		answer2 = true;
	}
	else if (answer2_lower === 'no') {
		answer2 = false
	}

	else {alert('Remember to respond Yes or No')
		return question2();
}

	responses.push(answer2)


}


question2();

function question3() {
  var answer3 = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  answer3 = answer3.toLowerCase();
  switch (answer3) {
	case 'java': answer3 = false
		break;
	case 'livescript': answer3 = true
		break;
	case 'javalive': answer3 = false
		break;
	case 'scriptyscript': answer3 = false
		break;
	default: answer3 = false
		break;
	}

	responses.push(answer3)
	}  




question3();

function question4(){
	answer4 = prompt('Which of these cities was Freddie Mercury´s hometown: Sidney, Stone Town or London?');
	answer4 = answer4.toLowerCase();

	switch (answer4){

		case 'sidney': answer4 = false
		break;
		case 'stone town': answer4 = true
		break;
		case 'london': answer4 = false
		break;
		default: answer4 = false
		break;
	}
	responses.push(answer4)
	}

question4();

function question5(){
	answer5 = prompt("Which is the best football team ever: F.C. Barcelona, Real Madrid C.F. or A.C. Milan? Remember to write the full name or the answer will be incorrect.")
	answer5 = answer5.replace(/[^\w\s]/g, "").toLowerCase();
	switch (answer5){

		case "real madrid cf" : alert("Hell Yeah ;)"); answer5 = true
		break;
		case "fc barcelona" : alert("Come on, you gotta be kidding me!!!"); answer5 = false
		break;
		case "ac milan" : answer5 = false
		break;	
		default: answer5 = false
		break;
	}
	responses.push(answer5);
}

question5();
console.log(responses)
console.log(user)

function evaluate(responsesArray) {

trueresponses = 0;
falseresponses = 0;
console.log(responsesArray.length);

for (index = 0; index < responsesArray.length; index += 1){

	if (responsesArray[index] === true){
		trueresponses++;
	} else { falseresponses++}
	}
//console.log(trueresponses);
//console.log(falseresponses);
user.trueresponses = trueresponses;
user.falseresponses = falseresponses;
 
 showResults();
}



function showResults() {

alert("Hello " + user.name + "! You´ve got " + user.trueresponses+ " correct answers and " + user.falseresponses + " incorrect answers.")

}
// call the function, passing it the responses array
evaluate(responses);


// declare two variables to store the totals

// populate the “totals” variables from the “responsesArray”

// save the “totals” variables inside the user object

// call showResults


















