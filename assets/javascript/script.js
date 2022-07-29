// all required elements
const startBtn = document.querySelector(".start-btn button");
const modal = document.querySelector(".modal");
const exitBtn = modal.querySelector(".modal-btns .quit");
const enterBtn = modal.querySelector(".modal-btns .enter");
const quizBox = document.querySelector(".quiz-box");

// if start button clicked
startBtn.onclick = () => {
  modal.classList.add("activeInfo");
};

// if exit button clicked
exitBtn.onclick = () => {
  modal.classList.remove("activeInfo");
};

//if enter quiz button clicked
enterBtn.onclick = () => {
  modal.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
};

let questionCount = 0;

const nextBtn = quizBox.querySelector(".next-btn");

// next button click
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
  } else {
    console.log("questions complete");
  }
};

// fetching questions and answers from array
function showQuestions(index) {
  const questionText = document.querySelector(".q-text");
  const answerText = document.querySelector(".answers_list");

  let questionTag =
    "<span>" +
    questions[index].numb +
    "." +
    " " +
    questions[index].question +
    "</span>";
  let answerTag =
    '<div class="option">' +
    questions[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[1] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[3] +
    "<span></span></div>";
  questionText.innerHTML = questionTag;
  answerText.innerHTML = answerTag;

  //const option = answers.querySelectoraAll(".option");
  //for (let i = 0; i < answer.length; i++) {
  // option[i].setAttribute("onclick", "optionSelected(this)");
  //}
}

//function optionSelected(answer) {
//let userAns = answer.textContent;
//console.log(userAns);
//}
