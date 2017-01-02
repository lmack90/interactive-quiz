// We start, as usual, with waiting for the page to be loaded with all the elements.  
// After this, we set up our needed variables. We grab the questionArea, answerArea, 
// the checker area (where our correct/false-div will be placed), 
// create an object that will hold all our questions and answers. 
// The last digit in the array (in allQuestions) is the correct answer.

window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds questions + possible answers.
     // In the array --> last digit gives the correct answer-position
      allQuestions = {
        'Where would you find the Empire State building?' : ['New York', 'Los Angeles', 'San Francisco', 'New Orleans', 'New York'],
      };


/////////////////////// Load Questions and Answer /////////////////////////


function loadQuestion() {
  // This function loads the question into the question area
var question = Object.keys(allQuestions);

// console.log(question);

  //First remove any html from the question area
  questionArea.innerHTML = "";

  // Then add the question
  questionArea.innerHTML = question;
}


function loadAnswers() {

//This function is going to load the answers into the answer array
// Every answer is added with an 'on-click' - function


  var answers = allQuestions[Object.keys(allQuestions)];


//Make sure answer array is empty
answerArea.innerHTML = "";
//Add all the possible answers to the answerArea
// By minusing the length the loop stops after 3 cycles

for(var i = 0; i < answers.length-1; i++) {
  var createDiv = document.createElement("div"),
  text = document.createTextNode(answers[i]);

  createDiv.appendChild(text);

  //This adds the onClick function to the answer
  // The click will set of a function that check if the answer is correct
  createDiv.addEventListener("click", checkAnswer(answers[i], answers));

  answerArea.appendChild(createDiv);

  }
}

//////////////////////////// Check Answer /////////////////////////////////


// This is the function that will run, when clicked on one of the answers
// Check if the given answer is the same as the correctAnswer

// After this check if its the last question
// If it is empty the answer array and let them now its done

function checkAnswer(answer, questionArr) {

  return function() {
  var givenAnswer = answer;
  var correctAnswer = questionArr[4];
  console.log(questionArr[4]);

  if(answer === correctAnswer) {
    addChecker(true);
    questionArea.innerHTML = 'Done';
    answerArea.innerHTML ="";
  } else {
    addChecker(false);
  };

}
}

////////////////////  The AddChecker  ///////////////////
function addChecker(bool) {
  //This function adds the true/false div to the page
  // Used to see if it was correct or false

  var createDiv = document.createElement("div"),
  text = document.createTextNode(current + 1);

  var createNewDiv = document.createElement("div");


  createDiv.appendChild(text);

  if(bool){
    createDiv.className += 'correct';
    checker.appendChild(createDiv).css(correct);
    checker.innerHTML = "You ghave answered 1 out of " + Object.keys(allQuestions).length;

    $( ".checkAnswers").click(function(){
    var html = ["correct"];
  });

  } else {
    createDiv.className += 'false';
    checker.appendChild(createDiv).css(false);
    checker.innerHTML = "You have answered 0 out of " + " " + Object.keys(allQuestions).length;

    

  }

  }

  // Start the Quiz

  loadAnswers();
  loadQuestion();

};


