$( document ).ready()

//   Start timer once the page loads
  window.onload = function(){
    $("#start").on("click", start);

    (function start(){
      var counter = 24;
    
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("timer");
          span.innerHTML = counter;
        }
        if (counter === 0) {
            // clearInterval(counter);
            alert("SHOT CLCOK VIOLATION!")
        }
    
      }, 1000);
    
    })();
    
    }

    // Array of questions that could be used to dynamically generate question in the DOM
    // var triviaQuestions = [{
    //     question: "Who is the shortest player of all-time?",
    //     answerList: ["Allen Iverson", "Tyrone 'Muggsy' Bogues", "Isaiah Thomas"],
    //     answer: 1
    // },{
    //     question: "What team drafted Kobe Bryant?",
    //     answerList: ["Lakers", "Suns", "Hornets"],
    //     answer: 2
    // },{
    //     question: "What player has the highest career FT percentage?",
    //     answerList: ["Steve Nash", "John Stockton", "Stephen Curry"],
    //     answer: 0
    // },{
    //     question: "Who has the most coaching wins?",
    //     answerList: ["Greg Popovich", "Steve Kerr", "Don Nelson"],
    //     answer: 2
    // },{
    //     question: "What player scored the most points in one game?",
    //     answerList: ["Kobe Bryant", "Wilt Chamberlain", "Michael Jordan"],
    //     answer: 1
    // }];

    // create variables to contain the correct answers

    // create a function to record user input

    // create a function to check user input against correct answers

    // Variables to record answers
    var correctGuesses = 0;
    var incorrectGuesses = 0;