var allQuestions = {
    objQuestion: [{
            quesion: "What state's motto is 'North to Future'?",
            choices: ["North Dakota", "Alaska", "Montana", "Maine"],
            correctAnswer: 1
        },

        {
            quesion: "What southeastern state boasts the cities of Frog Jump, Only, and Sweet Lips?",
            choices: ["Georgia", "South Carolina", "Tennessee", "Florida"],
            correctAnswer: 2
        },

        {
            quesion: 'What southern U.S. city is sometimes nicknamed "Little Cuba"?',
            choices: ["Key West", "Miami", "Cuba City", "Jacksonville"],
            correctAnswer: 1
        },

        {
            quesion: "What state leads the nation in copper production?",
            choices: ["North Dakota", "South Dakota", "Montana", "Arizona"],
            correctAnswer: 3
        },


        {
            quesion: "What state's name means tribal town in the Creek Ingian language?",
            choices: ["Alabama", "Alaska", "Arkansas", "Georgia"],
            correctAnswer: 0
        },

        {
            quesion: "What state takes its name from a Spanish word meaning snow-clad?",
            choices: ["Texas", "Colorado", "Nevada"],
            correctAnswer: 2
        },

        {
            quesion: "What state shares its border with only one other state?",
            choices: ["Maine", "Michigan", "Delaware", "Florida"],
            correctAnswer: 0
        },

        {
            quesion: "What state ranks first in state boat registrations?",
            choices: ["Florida", "North Carolina", "Michigan", "Maryland"],
            correctAnswer: 2
        },

        {
            quesion: "What state has more ghost towns than any other state?",
            choices: ["Oregon", "Alaska", "Wyoming", "North Dakota"],
            correctAnswer: 0
        },
    ],
};



function timer() {

    var counter = 30;

    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }

        if (counter === 0) {
            clearInterval(counter);
        }

    }, 3000);

};

timer();


var gameSetup = {
    winCount: 0,
    lossCount: 0,
    notAnswered: 0,

    scoreQuestions(choices) {
        if (choices == correctAnswer) {
            winCount++;
        } else {
            lossCount--;
        }

    },
    // action
    increasewinCount() {
        this.winCount++;
    },

    increaselossCount() {
        this.lossCount++;
    },

    increasenotAnswered() {
        this.notAnswered++;
    },




    didUserWin() {
        if (this.choices === this.correctAnswer) {
            return true;
        }

    },




    didUserLose() {
        if (this.choices != this.correctAnswer) {
            return true;
        }
    },


    didUserAnswer() {

    },
};

function displayQuestions() {

    for (var i = 0; i < allQuestions.objQuestion.length; i++) {

        // print question
        var question = $("<h2>")
        question.text(allQuestions.objQuestion[i].quesion);
        $("#app").append(question);

        // print answers
        var choices = allQuestions.objQuestion[i].choices;
        for (var j = 0; j < choices.length; j++) {

            var label = $(`<label>${choices[j]}</label>`);
            $("#app").append(label);
            var button = $(`<input type="radio" name="answer-${i}" value="${choices[j]}" />`);
            $("#app").append(button);
        }


    }

}

function checkAnswers() {
  //console.log("testing");
  var answer0 = $('input[type=radio][name=answer-0]:checked').val();
  console.log(answer0);
}

$(document).ready(function() {

    // // View (html/css, updating with jQuery)

    // $("#app").append(".pushButton");
    $("#app").empty();
    $("#app").html('<p><strong>Time Remaining: </strong><span id="count"><strong> 30 </strong></span><strong> seconds</strong></p>');

    displayQuestions();

    var button = $('<p style="text-align:center"><button>Done!</button></p>');
    button.click(checkAnswers);
    $("#app").append(button);

    // $("#app").append();
    // $("#app").append();
    // $("#app").append();
    // $("#app").append();
    // $("#app").append();

    // var firstQuestion = $("<h2>")
    // firstQuestion.text(allQuestions.objQuestion[0].question)
    // $("#app").append(firstQuestion);

    // var newChoice = $("<jqxradiobutton>")
    // choices.text(choices[0])
    // $("#app").append("<jqxradiobutton>");

    // $(".js-click").click(function() {
    //     gameSetup.pushButton();
    // });

    // // create buttons
    // var components = {
    //     start - button: "<div class = 'pushButton'>" +
    //         "<button id = 'start-button js-click'>Start</button> " +
    //         "</div>",
    //     radio - button: "<div class = 'jqxRadioButton'>" +
    //         "<input type = 'button' id = 'radioButton js-click' />" +
    //         "</div>",
    //     done - button: "<div class = 'doneButton'>" +
    //         "<button id = 'done-button js-click'>Done!</button> " +
    //         "</div>",
    // }

})
/*$("#jqxradiobutton1").choices([]);
 */
// Logic that runs the game 






//  function buildQuiz(){
//   //  a place to store the HTML output
//  var output = [];

//   // for each question...
//   allQuestions.forEach(
//     (question) => {

//       // store the list of answer choices
//       var newChoices = choices[];

//       // and for each available answer...
//       for(question.newChoices){

//         //  HTML radio button
//         newChoices.push(
//           `<label>
//             <input type="radio" name="answer" value="$("newChoices")">
//             ${question.choices[]}
//           </label>`
//         );
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${question} </div>
//         <div class="choices"> ${choices.join('')} </div>`
//       );
//     }
//   );

//   // finally combine output list into one string of HTML and put it on the page
//   $("#app").innerHTML = output.join('');
// }

// get allQuestions(index) {
//  for (var i = 0; i < allQuestions.length; i++) {
//    return this.question[index];
//  }

// };

//} // <!--document ready-->


