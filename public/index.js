const button = document.getElementById("generate-button");
const title = document.getElementById("title");
const container = document.querySelector(".container");
const triviaQuestion = document.getElementById("trivia-question");


let currentQuestionIndex = 0;

button.addEventListener("click", () => {
    fetch('http://localhost:9000/questions.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        loadQuestion(data,currentQuestionIndex)
        checkAnswer(data,currentQuestionIndex)
    })
    
    function loadQuestion(questions,index) {
        
        const currentQuestion = questions[index];
        triviaQuestion.textContent = currentQuestion.question;

        
        const radioInputs = document.querySelectorAll('input[name="answer"]');
        
        
        currentQuestion.options.forEach((option, optionIndex) => {
            
            radioInputs[optionIndex].value = option;
            
        });
    
        
        
    }


    function checkAnswer(answer,index){
        
        const radioInputs = document.querySelectorAll(`input[name="answer"]`)
        
        radioInputs.forEach(input => {
            input.addEventListener("click",() => {
                if(input.value === answer[index].answer){
                    console.log("correct");
                    input.classList.add("input-correct")
                }else{
                    console.log("wrong")
                    input.classList.add("input-wrong")
                }
            })
        })
    }

    



});
