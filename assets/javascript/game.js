window.onload = function() {
  $("#results").hide();
  $("#quiz").hide();
  $("#start").show();


var count=300;
var counter=setInterval(timer, 1000);
function timer(){
  count=count-1;
  if (count <= 0){
      clearInterval(counter);
      finish();
      return;
    }

  $("#count").text(count + " Seconds"); 
  }


var wins = 0;
var losses = 0;
var unanswered = 0;


//Logic for Submit button
$("#done").on("click", function(){
finish();
});

//Logic for Try Again button
$("#reset").on("click", function(){
  wins = 0;
  losses = 0;
  unanswered = 0;
  count = 30;
  $("#results").hide();
  $("#start").hide();
  $("#quiz").show();
  });

$("#begin").on("click", function(){
  wins = 0;
  losses = 0;
  unanswered = 0;
  count = 30;
  $("#results").hide();
  $("#start").hide();
  $("#quiz").show();
  });

//What happens when the quiz is complete or time runs out
function finish(){
var Q1 = $('input:radio[name="q1"]:checked').val();
var Q2 = $('input:radio[name="q2"]:checked').val();
var Q3 = $('input:radio[name="q3"]:checked').val();
var Q4 = $('input:radio[name="q4"]:checked').val();
var Q5 = $('input:radio[name="q5"]:checked').val();

if(Q1 == undefined){
      unanswered++;
		}
		else if(Q1 == "A"){
			wins++;
		}
		else{
			losses++;
		}

    if(Q2 == undefined){
      unanswered++;
		}
		else if(Q2 == "B"){
      wins++;
		}
		else{
			losses++;
		}
    
    if(Q3 == undefined){
			unanswered++;
		}
		else if(Q3 == "C"){
      wins++;
		}
		else{
			losses++;
		}
    
    if(Q4 == undefined){
      unanswered++;
		}
		else if(Q4 == "A"){
      wins++;
		}
		else{
			losses++;
		}
    
    if(Q5 == undefined){
      unanswered++;
		}
		else if(Q5 == "B"){
      wins++;
		}
		else{
			losses++;
    }
    
//Results section of the finish function
    $("#quiz").hide();
    $("#start").hide();
    $("#results").show();
    $("#wins").text("Correct Answers: "+ wins);
    $("#losses").text("Incorrect Answers: "+ losses);
    $("#unanswered").text("Unanswered Questions: "+ unanswered);
    window.scrollTo(0, 0);
    console.log("Wins: "+wins +"  Losses: " +losses+"  Unanswered: " +unanswered);
  };

};