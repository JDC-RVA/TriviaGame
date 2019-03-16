
  window.onload = function(){
    $("#start").on("click", start);

    (function start(){
      var counter = 60;
    
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("timer");
          span.innerHTML = counter;
        }
        if (counter === 0) {
            clearInterval(counter);
        }
    
      }, 1000);
    
    })();
    
    }

    // Questions
    var triviaQuestions = [{
        question: "Who is the shortest player of all-time?",
        answerList: ["Allen Iverson", "Tyrone 'Muggsy' Bogues", "Isaiah Thomas", "John Stockton"],
        answer: 1
    },{
        question: "What team drafted Kobe Bryant?",
        answerList: ["Lakers", "Suns", "Hornets", "Wizards"],
        answer: 2
    },{
        question: "What player has the highest career FT percentage?",
        answerList: ["Steve Nash", "John Stockton", "Stephen Curry", "Ray Allen"],
        answer: 0
    },{
        question: "Who has the most coaching wins?",
        answerList: ["Greg Popovich", "Steve Kerr", "Don Nelson", "Phil Jackson"],
        answer: 2
    },{
        question: "What player scored the most points in one game?",
        answerList: ["Kobe Bryant", "Lebron James", "Michael Jordan", "Wilt Chamberlain"],
        answer: 3
    }];