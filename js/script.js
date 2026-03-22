console.log("script.js connected!");

let questionBlocks = document.querySelectorAll(".question-block");
let userAnswers = {}
questionBlocks.forEach(function(block) {
    let buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");
            let question = button.dataset.question;
            let answer = button.dataset.answer
            userAnswers[question] = answer;
            console.log(answer);
        });
    });
});

function displayResult() {

    if (Object.kets(userAnswers).length < 5) {
        alert("Please answer all 5 questions before seeing your result!");
        return;
    }

    let counts = {
        spring: 0,
        summer: 0,
        autumn: 0,
        winter: 0
    };

    let questions = Object.keys(userAnswers);
    questions.forEach(function(question) {
        let answer = userAnswers[question];
        counts[answer] = counts[answer] + 1;
  });

  let topSeason = "";
  let topCount = 0;

  if (counts.spring > topCount) {
    topSeason = "spring";
    topCount = counts.spring
  }
  if (counts.summer > topCount) {
    topSeason = "summer";
    topCount = counts.summer
  }
  if (counts.autumn > topCount) {
    topSeason = "autumn";
    topCount = counts.autumn
  }
  if (counts.winter > topCount) {
    topSeason = "winter";
    topCount = counts.winter
  }

  let result = "";
  if (topSeason === "spring") {
    result = "You are Spring 🌸!";
  } else if (topSeason === "summer ☀️") {
    result = "You are Summer!";
  } else if (topSeason === "autumn 🍂") {
    result = "You are Autumn";
  } else if (topSeason === "winter") {
    result = "You are Winter ❄️!"
  }

  let output = document.getElementById ("result-text");
  output.textContent = result;
  let resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
}
  let submitButton = document.getElementById("show-result");
  submitButton.addEventListener("click", function() {
    displayResult();
  });
  
