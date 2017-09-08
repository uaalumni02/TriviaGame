var countingDown = document.getElementById("timer")
var counter = 30;
var newElement = document.createElement("span");
newElement.innerHTML = "10";
var id;

countingDown.parentNode.replaceChild(newElement, countingDown);


id = setInterval(function() {
    counter--;
    if (counter === 0) {
        setTimeout(function() {
            $("#questionnaire").hide();
            $("#results-page").show();

        }, 1000);

    }

    if (counter < 0) {
        newElement.parentNode.replaceChild(countingDown, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = counter.toString();
    }

}, 1000);


$("#questionnaire").hide();

$("#results-page").hide();


$("#start-button").click(function() {
    $("#start-button").hide();
    $("#questionnaire").show();
});


$("#done-button").click(function() {
    DisplayFinalResults();
    $("#questionnaire").hide();
    $("#results-page").show();

});

function DisplayFinalResults()
{
  var finalAnswers = [];

  var ans1 = $('.q-one:checked').val();
 finalAnswers.push(ans1); 

 var ans2 = $('.q-two:checked').val();
 finalAnswers.push(ans2); 

 var ans3 = $('.q-three:checked').val();
 finalAnswers.push(ans3); 

 var ans4 = $('.q-four:checked').val();
 finalAnswers.push(ans4); 

 var ans5 = $('.q-five:checked').val();
 finalAnswers.push(ans5); 

 var ans6 = $('.q-six:checked').val();
 finalAnswers.push(ans6); 

var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;
var iCount =0;

for (iCount  = 0; iCount  < finalAnswers.length;iCount++ ) { 

var answser =  finalAnswers[iCount];

if(answser == "correct"){
    correctScore++;
}
else if (answser == "wrong"){
    incorrectScore++;
} 
else if(answser == undefined){
    unansweredScore++;
}
}

$("#correct-score").text(correctScore);

$("#incorrect-score").text(incorrectScore);

$("#unanswered-score").text(unansweredScore);


};