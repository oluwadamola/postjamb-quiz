/*-----------------------------------------------------------------------------
Quiz Application created To test Javascript programming knowledge
Program written by Stephen Ajose For the Funaab Post UTME Practice!
*/
timer = new Countdown();
timer.init();

var pos = 0,
    test, test_status, question, notchecked, choices, chA, chB, chC, chD, correct = 0;
var answered = 0;



var questions = [
    ["A major liability of a commercial bank arise from ", "customer\'s deposits", "loans and advances ", "overdrafts", "staff allowances", "A"],
    ["Retailers in an economy perform the function of ", "production!", "exchange", "distribution ", " investment", "C"],
    [" In a sole proprietorships the decision are made by the ", "government", "board of directors ", "owner", "shareholders", "C"],
    ["The meaning of wage-price spiral is ", "demand pull and cost push inflation pulling each other in different ", "demand pull and cost push intensifying each other", "that wages and price are rising at a proportional rate", " that demand pull and cost push inflation increase employment ", "C"],
    ["Which of the following enterprise does not pursue the sole objective of profit maximization", "roads Nig Ltd", "Union bank of Nigeria Ltd ", "power holding & company of Nigeria", "Kingsway Nigeria Ltd", "C"],
    ["Palm oil industry is located in Edo state because the", "imports raw material for oil industry", "is a palm tree growing area", "government does not engage land for other crops", "land is suitable for oil", "6"],
    ["Disequilibrium in the balance of payments means ", "imports of the country exceeding its export", "deficit in the trade balance ", "capital flowing out of the country exceeds the capital flowing into the country", "overall deficit or surplus in the current account and", "D"],
    ["Full employment is a situation in which ", "every adult is employed", "all adult who can work are employed", "only the disable are not employed", " all those who are able and eligible to work can findemployment", "8"],    
    ["PHCN as a public corporation is ", "duopoly", "a power-generating industryin Nigeria", "a monopoly", "a monopolistically competitive industry", "C"],
    ["Demand for a factor of production is", "composite demand", "a joint demand","derived demand", "an elasticity demand" , "C"],
    ["Differential product is the characteristic feature of","perfect competition ", "pure competition","monopoly", "monopolistic competition", "C"],
    ["The channel for food distribution in Nigeria consists of", "producers wholesalers and retailers","producers and consumers","producers and processor","farmers", "processors and consumers", "B"],
    ["One disadvantage of sole proprietorships is its","limited liability",  "high profits", "high sense of ownership ", "low credit rating", "D"],
    ["For two substitute goods, the cross elasticity of demand is","greater than one but less than two", "zero","negative", "positive", "C"],
    ["An imperfectly competitive market is one where", "a large number of firms sell homogenous product", "input and output prices are unaffected","commodities are differentiated","each firm maximizes profit by selecting an out put","level at which marginal cost equal mark price land is suitable for oil.", "C"],
    ["The most important characteristic of money is", "portability", "intrinsic value", "acceptability", "usefulness", "B"],
    ["The economic goal of public utilities is to","maximize profit" ,"expand assets","minimize cost", "provideessential services", "B"],
    ["Given the present state of the Nigerian economy which of the following measurers will promote a more rapid economic development","complete dependence on oil exports", "concentration on agricultural exports","diversification of the economy","introduction of nuclear energy in Nigeria", "D"],
    ["The most important characteristic of money is", "portability", "intrinsic value","acceptability","usefulness", "A"], 
    ["Which of the following is not a feature of economic, under development of a country?","large number of hg income earners relative to the population","high annual income for the few","high incidence of poverty","high infant mortality rate","C"],
    ["The following except ONE, are the differences between international trade and internal trade.","differences in currency", "government control","mobility of factors of production", "exchange of goods and services", "B"],
    ["The central bank instrument of control does NOT include","open market operations", "moral suction", "selective credit control", "printing banknotes","D"],
    ["The basic principle of co-operative societies are those of", "workers ownership and worker control", "sole proprietorship", "partnership", "denying of credit facilities to members", "A"],
    ["Generally property taxes", "are borne entirely by landlords", "cannot be shifted in the long run", "are borne only by renters", "are born by all (renter,owner-occupiers and landlords)", "A"],
    ["The population level that yields the maximum output when combined with available resources is known as","dependent population", "maximum population", "active population","optimum population","D"]
];

alert(questions.length);
var incorrectQuestions = [];

function _(x) {
    return document.getElementById(x);
}

//populating the questions here
function renderQuestion() {
    test = _("test");

    if (pos >= questions.length) {
        _("test_status").innerHTML = "Test Completed";
        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct. </h2>";

        var numQuestions = questions.length;
        var unAnswered = numQuestions - answered;

        unchecked.innerHTML = "<h5> You have " + unAnswered + " questions not answered. </h5>" //just added.

        // to display the answers for the ones gotten wrong.
        var wrongAnswers = "";

        //to go through the incorrectQuestions array to get each of the wrong questions and its answers
        for (var i = 0; i < incorrectQuestions.length; i++) {
            var q = incorrectQuestions[i];
            var questionString = q[0];
            var answerString = q[5];
            wrongAnswers += questionString + ". Answer: " + answerString + "<br />";
        }

        // If there are wrong answers, show them on the screen
        if (wrongAnswers != "") {
            test.innerHTML = test.innerHTML + wrongAnswers;
        }

        pos = 0; //resets after the test has been completed.
        correct = 0; //same reset.
        return false; //ensures that the questions don't keep coming up after the test has been completed.
    } //to display the questions gotten right at the end of the quiz.

    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type= 'radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='C'> " + chC + "<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='D'> " + chD + "<br><br>";
    test.innerHTML += "<button id='submit-button' onclick='checkAnswer()'>Submit Answer </button> ";

    //submit button
}

//The function checkAnswer will run at the click of the submit button.
function checkAnswer() {

    if (timer.formSubmitted === true) {
        alert("Time up!");
        pos = questions.length;
        renderQuestion();
        return;
    }
    //var notchecked = 0;
    var choice;

    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
            /*
             * At this point, the selected choice has been found. There is
             * no need to continue the loop.
             */
            break;
        }
        // else{
        //   notchecked += 1;//if no answer was checked display 
        // }  
    }

    if (choice == null) {
        // No choice was made. User must choose a choice. :)
        alert("Please choose an option.");
        return;
    }

    if (choice == questions[pos][5]) {
        correct++;
    } else {
        // The answer is incorrect. Keep the incorrect question.
        incorrectQuestions.push(questions[pos]);
    }


    answered++;

    pos++; //increments the pos by one which renders the next question
    renderQuestion(); //the test questions keep coming in sequence
}
// }else{
//   alert("You must choose an answer!");
// }


window.addEventListener("load", renderQuestion, false); /*this tells the html page to wait for the page to load before running the function renderQuestion (loading the first question.)*/